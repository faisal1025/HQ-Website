"use client"
import React from 'react'
import { FaMinus, FaPlus } from 'react-icons/fa'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '../redux/store'
import { addRooms, decreaseGuest, increaseGuest } from '../redux/globalStateSlice'
import { MdAdd } from 'react-icons/md'
 
 const RoomComponent = () => {
    const {rooms} = useSelector((store: RootState) => store.globalState)
    const dispatch = useDispatch()
    return (
    <>
        {
        rooms && 
            rooms.map((room, ind) => {
                return(
                    <div key={ind} className='flex items-center justify-center gap-2 w-full py-1 text-[13px]'>
                        <button className='p-1 rounded-full dark:bg-slate-700 bg-slate-600 text-white' onClick={() => dispatch(increaseGuest(ind))}><FaPlus /></button>
                        <h3 className='text-semibold w-max'>{room.guest} Guest</h3>
                        <button className='p-1 rounded-full dark:bg-slate-700 bg-slate-600 text-white' onClick={() => dispatch(decreaseGuest(ind))}><FaMinus /></button>
                    </div>
                )
            })  
        }
        <div className='flex justify-end pt-4 items-center'>
            <button onClick={() => dispatch(addRooms())} className='flex text-blue-500 text-[12px] justify-end w-fit items-center gap-1'>
                <MdAdd /> 
                <div className='w-max'>
                    ADD ROOM
                </div>
            </button>
        </div>
    </>
    )
 }
 
 export default RoomComponent
 