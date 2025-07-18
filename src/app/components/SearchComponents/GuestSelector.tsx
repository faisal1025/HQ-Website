"use client"

import { Dropdown, MenuProps } from 'antd'
import React, {useState, useRef} from 'react'
import { FaBed } from 'react-icons/fa'
import RoomComponent from '../RoomComponent'
import { RootState } from '../../redux/store'
import { useSelector } from 'react-redux'
import DropBox from '../DropBox'



const GuestSelector = ({className, searchRoom}: {className?:string, searchRoom?: boolean}) => {
    
    const items: MenuProps['items'] = [
        {
            label: <RoomComponent searchRoom={searchRoom} />,
            key: 1
        }
    ]
    const {rooms} = useSelector((store: RootState) => store.globalState)
    const [dropDaown, setDropDown] = useState(false);
    const guestH2Ref = useRef(null)
    return (
        <div className={`room-container flex ${className !== undefined ? className : ''} max-sm:w-full h-14 justify-center items-center rounded-lg border-r-slate-400`}>
            <i className="bg-white text-black h-full text-center items-center justify-center flex w-12"><FaBed size={20} /></i>
            <div className="flex flex-col justify-center h-full max-md:w-full px-3 rounded-md bg-white font-sans font-semibold focus:border-0">
                <label className="text-black text-xs">Guest and Rooms</label>
              <Dropdown menu={{items}} trigger={['click']} placement='bottom'>
                  <h3 className='w-max dark:text-black'>Select Rooms</h3>
              </Dropdown>
            </div>
        </div>
    )
}

export default GuestSelector
