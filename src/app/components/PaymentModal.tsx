'use client'

import Modal from '@/app/modal/modal'
import { setShowBookModal } from '@/app/redux/globalStateSlice'
import { RootState } from '@/app/redux/store'
import React, { useEffect, useState } from 'react'
import {useSelector} from 'react-redux'
import PaymentCard from './PaymentCard'
import { hotels } from '../Schema'
import { getHotelById } from '../services/hotelApi'

const PaymentModal = ({item}: {item:hotels}) => {
    const {showBookNowModal} = useSelector((store: RootState) => store.globalState)
    
    // console.log("hotel: ", item);
    
    return (
        <div>
            {
                
                showBookNowModal && (
                    <Modal setModal={setShowBookModal}>
                        <PaymentCard item={item}/>
                    </Modal>
                )
            }
        </div>
    )
}

export default PaymentModal
