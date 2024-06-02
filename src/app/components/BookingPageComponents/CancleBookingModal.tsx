'use client'

import { AppDispatch, RootState } from '@/app/redux/store'
import {useDispatch, useSelector} from 'react-redux'
import React, { useState } from 'react';
import OtpInput from 'react-otp-input';
import { changeBookingList, setShowCancleBooking } from '@/app/redux/globalStateSlice';
import { redirect, usePathname, useRouter } from 'next/navigation';
import { cancleRoomBooking } from '@/app/services/ordersApi';
import { message } from 'antd';

const CancleBookingModal = () => {
    const {user, isAuthenticated} = useSelector((store: RootState) => store.authState)
    const [otp, setOtp] = useState<string | undefined>()
    const {orderId, bookingListChanged} = useSelector((store: RootState) => store.globalState)
    const dispatch = useDispatch<AppDispatch>()
    const router = useRouter()
    
    const backButton = () => {
        dispatch(setShowCancleBooking(false));
        router.back();
        const elem = document.body;
        elem.classList.remove("fixedPosition");
    }
    
    const confirmButton = async () => {
        
        if(otp !== undefined) {
            const res = await cancleRoomBooking(orderId, user, otp);
            
            if(res.status === true){
                message.success(res.msg)
                dispatch(changeBookingList(!bookingListChanged))
            }else{
                if(res.msg !== undefined) message.error(res.msg)
                dispatch(changeBookingList(!bookingListChanged))
            }
            dispatch(setShowCancleBooking(false));
            const elem = document.body;
            elem.classList.remove("fixedPosition");
            router.back()
        }else{
            message.error('Please enter otp to cancle booking')
        }
        
    }

    return (
        <div className='flex flex-col justify-center items-center p-4'>
            <h3 className='text-center py-3'>Do you really want to cancle this booking ?</h3>
            <h3 className='text-center py-3'>We have send you a confirmation code. Please check your registered email <strong>{user.email}</strong></h3>
            <div className='py-3'>
                <OtpInput
                    inputStyle={{margin: 5, borderWidth: 1, borderColor: 'rgb(173 162 162)'}}
                    value={otp}
                    onChange={setOtp}
                    numInputs={4}
                    renderSeparator={<span>-</span>}
                    renderInput={(props) => <input {...props} />}
                />
            </div>
            <div className='flex gap-4 items-center justify-around w-full'>
                <button className='px-4 py-3 rounded-md border-2 text-green-500 border-green-500 active:scale-75 transition' onClick={backButton}>Back</button>
                <button className='px-4 py-3 rounded-md border-2 text-red-500 border-red-500 active:scale-75 transition' onClick={confirmButton}>Yes, I Confirm</button>
            </div>
        </div>
    )
}

export default CancleBookingModal
