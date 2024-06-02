'use client'

import React from 'react'
import { booking } from '../../Schema'
import Card from '../../custom-template/Card'
import Image from 'next/image'
import { MdOutlineStarPurple500 } from 'react-icons/md'
import { getRatingStatus } from '../../utils/hotelDetailUtility'
import { AiFillCloseCircle, AiFillCheckCircle } from "react-icons/ai";
import Link from 'next/link'
import { useDispatch, useSelector } from 'react-redux'
import { AppDispatch, RootState } from '@/app/redux/store'
import { setOrderNumber, setShowCancleBooking } from '@/app/redux/globalStateSlice'
import { getKey, sendMailForCancleBooking } from '@/app/services/ordersApi'
import { baseUrl } from '@/app/services/cityApi'
import { useRouter } from 'next/navigation'

const BookingCardVertical = ({item} : {item:booking}) => {
    const {user, token} = useSelector((store: RootState) => store.authState)
    const dispatch = useDispatch<AppDispatch>()
    const {push} = useRouter() 

    const cancleBooking = async () => {
        const res = await sendMailForCancleBooking(item.razorpay_order_id, user)
        dispatch(setShowCancleBooking(true));
        dispatch(setOrderNumber(item.id))
    }

    const makePayment = async () => {
        const {key} = await getKey()
        const options = {
            key: key, // Enter the Key ID generated from the Dashboard
            amount: (item.amount*100), // Amount is in currency subunits. Default currency is INR. Hence, 50000 refers to 50000 paise
            currency: "INR",
            name: "HQ-Events",
            description: "Test Transaction",
            image: "https://example.com/your_logo",
            order_id: item.razorpay_order_id, //This is a sample Order ID. Pass the `id` obtained in the response of Step 1
            // callback_url: `${baseUrl}/paymentVerification?id=${me.id}&hotel=${item.id}`,
            handler: async function(response: any) {
              const value = {
                me: user,
                hotel: item.hotel.id,
                checkin: item.checkin,
                checkout: item.checkout,
                givenRooms: item.givenRooms,
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
                "name": user.username,
                "email": user.email,
                "contact": user.phoneNumber
            },
            notes: {
                "address": "Razorpay Corporate Office"
            },
            theme: {
                "color": "#121212"
            }
        };
        const rzp1 = new (window as any).Razorpay(options)
        rzp1.open();
    }

    return (
        <div className='py-2 w-full'>
        <Card>
            <div className='thumbnail-img p-4 flex flex-wrap justify-around items-center'>
                {/* <Link href={`/${item.hotel.state.slug}/${item.hotel.slug}`}> */}
                    <div className='w-[41%] booking-thumbnail max-md:w-[80%] max-sm:w-full'>
                        <Image src={item.hotel.thumbnail} alt='hotel image' width={100} height={100} className='w-full h-auto object-cover' layout='responsive' />
                    </div>
                {/* </Link> */}
                <div className='flex flex-col justify-start min-w-[52%] hotel-container py-2 max-md:w-[80%] max-sm:w-full max-sm:px-2'>
                    <Link href={`/${item.hotel.state.slug}/${item.hotel.slug}`}>
                        <h2 className='text-2xl font-sans font-semibold capitalize tracking-tight'>{ item.hotel.name }</h2>
                        <h2 className='text-base text-slate-800 dark:text-slate-400 ont-sans font-medium capitalize'>{ `${item.hotel.address}, ${item.hotel.city}` }</h2>
                        <div className='flex gap-1 items-center py-2 text-xs font-sans capitalize font-semibold'>
                            <div className='px-1 py-1 flex gap-1 items-center w-fit bg-green-600 text-white'>{item.hotel.rating} <i className='inline-block m-auto p-auto'><MdOutlineStarPurple500 size={14} /></i></div> {" "}
                            <div>( {item.hotel.reviews?.length} Ratings ) . {getRatingStatus(item.hotel.rating)}</div>
                        </div>
                    </Link>

                    <div className='flex flex-col booking-details gap-2 py-4 text-sm font-medium'>
                        <div className='flex items-center gap-3 '>
                            <AiFillCheckCircle color='green' /> <span>{`Check In:  ${item.checkin}`}</span>
                        </div>
                        <div className='flex items-center gap-3 '>
                            <AiFillCloseCircle color='red' /> <span>{`Check Out:  ${item.checkout}`}</span>
                        </div>
                        <div className='transaction-block flex justify-between items-center'>
                            <div>{`Order Id: ${item.razorpay_order_id}`}</div>
                            <div>
                                {`Status: `} <span className={`${item.Status === 'Confirmed' ? 'text-green-700 dark:text-green-500' : item.Status === 'Check In' ? 'text-yellow-700' : 'text-red-700'}`}>{item.Status}</span>
                            </div>
                        </div>
                        <div className='flex justify-end items-center gap-4'>    
                            <button className={`p-4 text-white rounded-lg min-w-1/5 ${item.razorpay_payment_id ? 'bg-green-600' : 'bg-yellow-600 active:scale-75 transition'}`} 
                                    disabled={item.razorpay_payment_id ? true : item.Status === 'Cancelled' ? true : false}
                                    onClick={makePayment} >
                                        {item.razorpay_payment_id ? <>Paid (Amount &#x20b9;{item.amount/100})</> : <>Pay Now &#x20b9; {item.amount/100}</>}
                            </button> 
                            
                            {
                                item.Status === 'Confirmed' ?
                                <Link href={`?modal=true`}>
                                    <button disabled={item.Status === 'Confirmed' ? false : true} className='bg-red-700 p-4 rounded-lg transition active:scale-75 text-white min-w-1/5' onClick={cancleBooking}>Cancel Booking</button> 
                                </Link> :
                                <button disabled={true} className='bg-slate-300 p-4 rounded-lg text-white min-w-1/5' onClick={cancleBooking}>Cancel Booking</button>
                            }
                        </div>
                    </div>
                </div>
            </div>
        </Card>
        </div>
    )
}

export default BookingCardVertical
