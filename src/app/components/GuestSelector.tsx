import { Dropdown, MenuProps } from 'antd'
import React, {useState} from 'react'
import { FaBed } from 'react-icons/fa'
import RoomComponent from './RoomComponent'
import { RootState } from '../redux/store'
import { useSelector } from 'react-redux'

const items: MenuProps['items'] = [
    {
        label: <RoomComponent />,
        key: 1
    }
]


const GuestSelector = ({className}: {className?:string}) => {
    
    const {rooms, totalGuest} = useSelector((store: RootState) => store.globalState)

    return (
        <div className={`room-container flex ${className} max-sm:w-full h-14 justify-center items-center rounded-lg border-r-slate-400`}>
            <i className="bg-white text-black h-full text-center items-center justify-center flex w-14"><FaBed size={20} /></i>
            <div className="flex flex-col justify-center h-full w-80 max-md:w-full px-3 rounded-md bg-white font-sans font-semibold focus:border-0">
              <label className="text-black text-xs">Guest and Rooms</label>
              <Dropdown menu={{items}} trigger={['click']}>
                <div className=" text-slate-400 py-1 px-2 text-sm max-w-fit">
                    <h3>{totalGuest} Guest, {rooms.length} Rooms</h3>
                </div>
              </Dropdown>
            </div>
        </div>
    )
}

export default GuestSelector
