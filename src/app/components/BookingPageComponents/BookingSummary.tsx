'use client'

import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {Divider, message} from 'antd'
import { useRouter } from 'next/navigation'
import { AppDispatch, RootState } from '@/app/redux/store'
import { roomCategory, setLoading } from '@/app/redux/globalStateSlice'
import { hotels, room } from '@/app/Schema'
import { createOrder, createPayAtHotel } from '@/app/services/hotelApi'
import { getMe } from '@/app/services/authApi'
import { baseUrl } from '@/app/services/cityApi'
import { AiFillCheckCircle, AiFillCloseCircle } from 'react-icons/ai'
import Image from 'next/image'

const BookingSummary = ({item}: {item: hotels}) => {
    const {push} = useRouter()
    const {user, token} = useSelector((store: RootState) => store.authState)
    const {dateVal, payableAmount, givenRooms} = useSelector((store: RootState) => store.globalState)
    const dispatch  = useDispatch<AppDispatch>() 

    const checkIn = dateVal && dateVal[0]?.format('YYYY-MM-DD')
    const checkOut = dateVal && dateVal[1]?.format('YYYY-MM-DD')
    const days = dateVal?.[1]?.diff(dateVal[0], 'days') ? dateVal?.[1]?.diff(dateVal[0], 'days')+1 : 1
    const givenArr = [givenRooms.kingSizedRoom, givenRooms.queenSizedRoom, givenRooms.twinSizedRoom, givenRooms.duplexRoom]
    const getGivenRooms = (): number[] => {

        const res = givenArr.flatMap((category: roomCategory, ind: number) => {
            return category.rooms.map((room: room, i: number) => {
                return room.id
            })
        })

        return res;
    }

    const handlePayAtHotel = async  () => {
        const userData = {
            username: user.username,
            email: user.email,
            id: user?.id as any as string | undefined
        }
        dispatch(setLoading(true))
        const response = await createPayAtHotel({payableAmount: item ? payableAmount : 0, 
            user: userData,
            hotel: item ? item.id : -1, 
            checkin: checkIn ? new Date(checkIn) : new Date(),
            checkout: checkOut ? new Date(checkOut) : new Date(),
            givenRooms: getGivenRooms()
        })
        dispatch(setLoading(false))
        
        if(response.error && response.error.status === 401){
            message.error('User neeed to be authenticated')
        }else if(response.error){
            message.error('Something went wrong. Please try again')
        }
        if(response.status === 200){
            message.success('Your room is successfully booked. pay at hotel')
        }else{
            message.error("something went wrong ! rooms haven't booked try again")
        }
    }
    
    const makeOrder = async () => {
        dispatch(setLoading(true));
        const {data, error} = await createOrder({payableAmount: payableAmount})
        dispatch(setLoading(false))

        if(error && error.status === 401) {
            message.error('User should be logged in, please login again')
            return;
        }else if(error){
            message.error('Something went wrong. Please try again')
            return;
        }
        
        
        const options = {
            key: data?.attributes?.key, // Enter the Key ID generated from the Dashboard
            amount: (data.attributes.amount*100), // Amount is in currency subunits. Default currency is INR. Hence, 50000 refers to 50000 paise
            currency: "INR",
            name: "HQ-Events",
            description: "Test Transaction",
            image: "https://example.com/your_logo",
            order_id: data.id, //This is a sample Order ID. Pass the `id` obtained in the response of Step 1
            // callback_url: `${baseUrl}/paymentVerification?id=${me.id}&hotel=${item.id}`,
            handler: async function(response: any) {
            const value = {
                me: user,
                hotel: item ? item.id : -1,
                amount: data.attributes.amount,
                checkin: checkIn ? new Date(checkIn) : new Date(),
                checkout: checkOut ? new Date(checkOut) : new Date(),
                givenRooms: getGivenRooms(),
                razorpay_order_id: response.razorpay_order_id,
                razorpay_payment_id:  response.razorpay_payment_id,
                razorpay_signature: response.razorpay_signature 
            }
            
            let res = await fetch(`${baseUrl}/paymentVerification`, {
                method: 'POST',
                headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
                },
                body: JSON.stringify(value)
            })
            res = await res.json()
            
            if(res.status === 200){
                push('/payment-success')
            }else{
                push('/payment-faliure')
            }
            },
            prefill: {
            "name": user?.username,
            "email": user?.email,
            "contact": user?.phoneNumber
            },
            notes: {
            "address": "2nd Floor, F35/4, Okhla Phase - 2, New Delhi, Delhi, India 110020"
            },
            theme: {
            "color": "#121212"
            }
        };
        const rzp1 = new (window as any).Razorpay(options)
        rzp1.open();
    }
    return (
        <>
        {
            item ?
                <>
                    <div className='border-b-2  border-slate-500'>
                        <h3 className='text-xl max-sm:text-lg font-medium'>Product Details</h3>
                        <div className='p-2 my-4 bg-white flex flex-wrap gap-2 items-center rounded-md'>
                            <div className='w-28'>
                                <Image src={item.thumbnail} alt={`thumbnail picture of ${item.name}`} width={100} height={100} className='w-full h-auto object-cover' layout='responsive' />
                            </div>
                            <div className='dark:text-black'>
                                <h2 className='text-sm font-semibold'>{item.name}</h2>
                                <h3 className='text-xs font-medium text-slate-500'>{item.address}</h3>
                                
                            </div>

                        </div>
                        <div className='max-sm:text-sm'>
                            <div className='flex items-center gap-3 px-2'>
                                <AiFillCheckCircle color='green' /> <span>{`Check In:  ${checkIn}`}</span>
                            </div>
                            <div className='flex items-center gap-3 p-2 border-dashed border-b border-slate-500'>
                                <AiFillCloseCircle color='red' /> <span>{`Check Out:  ${checkOut}`}</span>
                            </div>
                            <div className='flex justify-between items-center font-semibold my-2 p-3'>
                                <p>Total days</p>
                                <p>{days}</p>
                            </div>
                        </div>
                    </div>
                    <div className='max-sm:text-sm pt-3'>
                        <h3 className='text-xl max-sm:text-lg font-medium'>Price Details</h3>
                        <ul className='p-3 border-dashed border-b border-slate-500 '>
                            {
                                givenArr.map((category: roomCategory, ind: number) => {
                                    return (
                                        category.rooms.length !== 0 ? 
                                            <li key={ind} className='flex gap-5 justify-around p-2'>
                                                <p>{category.rooms[0].room_type}</p>
                                                <p>{category.rooms[0].price} X {category.rooms.length}</p>
                                                <p>&#8377;{category.rooms[0].price * category.rooms.length}</p>
                                            </li>
                                        :
                                            null
                                    )
                                })
                            }
                        </ul>
                        <div className='flex justify-between items-center font-semibold my-2 p-3'>
                            <p>Total Amount</p>
                            <p>&#8377;{payableAmount}</p>
                        </div>
                    </div>
                    <div>
                        <button disabled={(!user?.fullName) || (!user?.phoneNumber) || (!user?.address)} 
                            className="w-full h-9 rounded bg-green-500 hover:bg-green-600 font-semibold my-2 disabled:bg-green-200 disabled:cursor-not-allowed" 
                            title={(!user?.fullName) || (!user?.phoneNumber) || (!user?.address) ? 'Please fill your name, phone number, address first' : ''} 
                            onClick={makeOrder}>Check Out
                        </button>
                        <Divider className='dark:text-white'>or</Divider>
                        <button disabled={(!user?.fullName) || (!user?.phoneNumber) || (!user?.address)} 
                            className="w-full h-9 text-white rounded-full active:scale-75 transition bg-gradient-to-r from-slate-800 to-slate-600 font-semibold my-2 disabled:bg-slate-200 disabled:active:scale-100 disabled:cursor-not-allowed" 
                            title={(!user?.fullName) || (!user?.phoneNumber) || (!user?.address) ? 'Please fill your name, phone number, address first' : ''} 
                            onClick={handlePayAtHotel}>Pay at hotel
                        </button>
                    </div>
                </>
            :
            null
            
        }
        </>
    )
}

export default BookingSummary
