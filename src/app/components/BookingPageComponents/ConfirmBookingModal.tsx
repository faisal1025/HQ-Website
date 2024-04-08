'use client'

import Modal from '@/app/modal/modal'
import { setShowCancleBooking } from '@/app/redux/globalStateSlice'
import { RootState } from '@/app/redux/store'
import React from 'react'
import {useSelector, useDispatch} from 'react-redux'
import CancleBookingModal from './CancleBookingModal'

const ConfirmBookingModal = () => {
    const {showCancleBooking} = useSelector((store: RootState) => store.globalState)

    return (
        <div>
            {
                showCancleBooking && (
                    <Modal setModal={setShowCancleBooking}>
                        <CancleBookingModal />
                    </Modal>
                )
            }
        </div>
    )
}

export default ConfirmBookingModal
