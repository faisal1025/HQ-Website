'use client'

import Modal from '@/app/modal/modal'
import { setShowBookModal } from '@/app/redux/globalStateSlice'
import { RootState } from '@/app/redux/store'
import React from 'react'
import {useSelector, useDispatch} from 'react-redux'
import PaymentCard from './PaymentCard'

const PaymentModal = () => {
    const {showBookNowModal, itemForModal} = useSelector((store: RootState) => store.globalState)

    return (
        <div>
            {
                showBookNowModal && (
                    <Modal setModal={setShowBookModal}>
                        <PaymentCard item={itemForModal}/>
                    </Modal>
                )
            }
        </div>
    )
}

export default PaymentModal
