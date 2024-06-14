'use client'
import React, {EffectCallback, FormEvent, MouseEventHandler, useEffect, useMemo, useRef, useState} from 'react'
import { io } from 'socket.io-client'
import Cookies from 'js-cookie'
import { FaMessage, FaXmark  } from 'react-icons/fa6'
import {message} from 'antd'
import {useSelector, useDispatch} from 'react-redux'
import { RootState } from '../redux/store'
import { baseUrl } from '../services/cityApi'
import { socketUrl } from '../services/cityApi'

type messageObj = {
    id?: number,
    content: string,
    sender: string,
    receiver: string,
    timestamp: Date,
    createdAt?: Date,
    updatedAt?: Date,
    publishedAt?: Date | null
}

const SocketClient = () => {
    const [chat, setChat] = useState(false) 
    const [fullName, setFullName] = useState('') 
    const [nameError, setNameError] = useState('') 
    const [newMessage, setNewMessage] = useState('') 
    const [roomId, setRoomId] = useState<string | undefined>(undefined) 
    const [messages, setMessages] = useState<Array<messageObj>>([])
    const [messageError, setMessageError] = useState('') 
    const {isAuthenticated, user} = useSelector((store: RootState) => store.authState)
    const socket = useMemo(() => io(socketUrl || 'https://admin.hqrooms.in/', {
        withCredentials: true,
        extraHeaders: {
            "my-custom-header": "abcd"
        }
    }), [])
    
    useEffect( () => {

        window.addEventListener('click', (event: MouseEvent) => {
            setChat(false)
        })

        async function updateMessage() {
            const {fetchedMessages, err} = await fetchMessages()
            setMessages(fetchedMessages)
            if(err){
                message.error(err.message)
            }
        }

        if(Cookies.get('roomId')) {
            setRoomId(Cookies.get('roomId'))
            socket.emit('join', {name: fullName, roomId: Cookies.get('roomId')})
            updateMessage()
        }
            
        socket.on('connect', () => {
            console.log('Connected to the web socket');
        })
        
        socket.on('welcome', ({msg, roomId}) => {
            setMessages([...messages, msg]);
            Cookies.set('roomId', roomId)
            setRoomId(Cookies.get('roomId'))
        })

        socket.on('newMessage', ({msg, roomId}) => {
            updateMessage()
        })

        return () => {
            socket.disconnect()
            window.removeEventListener('click', (event: MouseEvent) => {
                setChat(false)
                
            })
        }
        
    }, [])
    
    async function fetchMessages() : Promise<{fetchedMessages: Array<messageObj>, err: Error | null}> {
        try {
            if(!Cookies.get('roomId')){
                throw new Error('roomId is not available')
            }
            const response = await fetch(`${baseUrl}/chat-rooms/${Cookies.get('roomId')}/?populate=*`)
            if(!response.ok){
                throw new Error('data not found !!')
            }
            const res = await response.json()
            const fetchedMessages = res.data.attributes.messages.data.map((msg: any, i: number): messageObj => {
                return (
                  {
                    id: msg.id,
                    ...msg.attributes,
                  }
                )
            });
            return {fetchedMessages, err: null}
        } catch (err) {
            if(err instanceof Error){
                return {fetchedMessages: [], err}
            }
        }
        return {fetchedMessages: [], err: null}
    }

    function openChat(e: any){
        e.stopPropagation()

        setChat(!chat);
        if(isAuthenticated && (!roomId))
        socket.emit('join', {name: Cookies.get('username')})
    }


    function handleJoin(e: FormEvent) {
        e.preventDefault();
        if(fullName === '' || fullName.length <= 3){
            if(fullName.length === 0)
                setNameError('fullname is required')
            else if(fullName.length <= 3)
                setNameError('full name should be more than 3 character')
            
            return;
        }

        socket.emit('join', {name: fullName})
    }

    function sendMsg(e: FormEvent) {
        e.preventDefault()
        if(newMessage === '' || newMessage.length === 0){
            setMessageError('Message is required field')
            return;
        }
        const reqMessage: messageObj = {
            content: newMessage,
            sender: messages[0].receiver,
            receiver: 'admin',
            timestamp: new Date(),
        }
        setMessages([...messages, reqMessage])
        setNewMessage('')
        if(Cookies.get('roomId'))
            socket.emit('sendMsg', {msg: reqMessage, roomId: Cookies.get('roomId')})
        else 
            message.error('Room id is not available')
    }

    async function handleChatClear() {
        try {
            const response = await fetch(`${baseUrl}/chat-rooms/${Cookies.get('roomId')}`, {
                method: 'delete'
            })
            if(!response.ok){
                message.error('something went wrong, please try later')
                return;
            }
            const result = await response.json()
            console.log('delete result: ', result);
            
            Cookies.remove('roomId')
            setRoomId(undefined)
            message.success('Chat cleared successfully :)')
            const {fetchedMessages, err} = await fetchMessages()
            setMessages(fetchedMessages)
            if(err){
                console.log(err.message);
            }
        } catch (error) {
            if(error instanceof Error)
                message.error(error.message)
        }

    }
    
    return (
        <>
            {
                (
                    <div className='flex flex-col gap-2 justify-end items-end fixed bottom-4 right-4 w-96 max-sm:w-72'>
                        <div onClick={e => e.stopPropagation()} className={`flex border border-slate-500  w-full flex-col rounded-lg bg-gradient-to-r from-indigo-200 to-indigo-50 dark:from-slate-700 dark:to-slate-950 shadow-xl transition-all ${chat ? 'flex' : 'hidden'}`}>
                            <div className='flex justify-between items-center bg-gradient-to-t from-violet-200 to-sky-50 dark:from-sky-950 dark:to-slate-600 px-4 py-4 text-xl max-sm:text-base rounded'>
                                <span>Chat with HQ Rooms</span>
                                <span onClick={handleChatClear} className='text-red-500 hover:underline cursor-pointer text-sm'>Clear Chat</span>
                            </div>
                            <div className='pl-4 py-2 max-sm:pl-2 h-52 overflow-y-scroll chat-box max-sm:text-sm'> 
                                {
                                    roomId === undefined &&
                                        (isAuthenticated ? 
                                        null: (
                                            <form className='flex justify-between gap-4 items-start' onSubmit={handleJoin}>
                                                <div className='w-3/5'>
                                                    <input type="text" onChange={(e) => {setFullName(e.target.value); if(nameError.length > 0) setNameError('')}} placeholder='Enter your full name' className='p-3 w-full rounded border border-gray-500 dark:border-gray-200 dark:text-black' />
                                                    {nameError.length !== 0  ? (
                                                    <p className="text-sm text-red-500 drop-shadow-xl">{nameError}</p>
                                                    ) : null}
                                                </div>
                                                <button type="submit" className=' w-4/12 text-white p-3 rounded bg-gradient-to-r from-slate-800 to-slate-400'>Join Chat</button>
                                            </form>
                                        ))
                                }
                                
                                {
                                    messages.length !== 0 &&
                                    messages.map((obj:messageObj, i) => {
                                            return (
                                                <div key={i} className={`w-full my-2 flex ${obj.sender === 'admin' ? 'justify-start' : 'justify-end' }`}>
                                                    <div className='flex flex-col gap-3 justify-center p-2 rounded-md items-start w-max bg-gradient-to-tr dark:from-slate-600 dark:to-slate-500 dark:text-white from-blue-400 to-blue-300'>
                                                        <span className='text-sm font-normal'>{obj.sender}</span>
                                                        <span className='text-base font-semibold'>{obj.content}</span>
                                                    </div>
                                                </div>
                                            )
                                        })
                                }
                                
                            </div>
                            <div className='bg-gradient-to-t from-violet-200 to-sky-50 dark:from-sky-950 dark:to-slate-600 px-3 py-3 flex justify-around rounded max-sm:text-sm'>
                                <form className='flex justify-evenly gap-4 items-start' onSubmit={sendMsg}>
                                    <div className='w-3/5'>
                                        <input type="text" onChange={(e) => {setNewMessage(e.target.value); if(messageError.length !== 0) setMessageError(''); }} placeholder='write your message' className='p-3 rounded border border-gray-500 dark:border-gray-200 dark:text-black w-full' />
                                        {messageError.length !== 0  ? (
                                            <p className="text-sm text-red-500 drop-shadow-xl">{messageError}</p>
                                        ) : null}
                                    </div>
                                    <button type="submit" className='w-1/3 text-white p-3 rounded bg-gradient-to-r from-slate-800 to-slate-400'>Send</button>
                                </form>
                            </div>
                        </div>
                        <div onClick={openChat} className='flex justify-center items-center bg-gradient-to-r from-slate-600 to-slate-400 text-white rounded-full max-sm:size-12 size-14'>
                            {chat ? <FaXmark  size={16} /> : <FaMessage size={16} />}
                        </div>
                    </div>
                )
            }
        </>
    )
}

export default SocketClient
