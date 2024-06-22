"use client"
import React from 'react'
import { FaMinus, FaPlus } from 'react-icons/fa'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '../redux/store'
import { addRooms, categoryName, deselectRoomToSearch, removeRooms, selectRoomForSearch, selectRoomToSearch} from '../redux/globalStateSlice'
import { MdAdd } from 'react-icons/md'
 
 const RoomComponent = ({searchRoom}: {searchRoom?: boolean}) => {
    console.log('search room', searchRoom);
    
    const {rooms, givenRooms, selectRooms} = useSelector((store: RootState) => store.globalState)
    const dispatch = useDispatch()

    const roomOption = [rooms.kingSizedRoom, rooms.duplexRoom, rooms.queenSizedRoom, rooms.twinSizedRoom]
    const givenRoomOption = [givenRooms.kingSizedRoom, givenRooms.duplexRoom, givenRooms.queenSizedRoom, givenRooms.twinSizedRoom]
    return (
    <>
        <table onClick={e => e.stopPropagation()}>
            <tr className='w-full bg-gray-100 text-left border-b border-gray-300'>
                <th className='py-2 px-3 max-sm:px-1'>Category</th>
                <th className='py-2 px-3 max-sm:px-1'>Capacity</th>
                {
                    searchRoom ? 
                    null :
                    <th className='py-2 px-3 max-sm:px-1'>Price</th> 
                }
                <th className='py-2 px-3 max-sm:px-1'>Action</th>
            </tr>
            {
                searchRoom ?
                (
                    selectRooms && 
                        selectRooms.map((room: selectRoomForSearch, ind: number) => {
                            return (
                                <tr key={ind} className='" w-full border-b border-gray-200"'>
                                    <td className='py-2 px-3 max-sm:px-1'>{categoryName[room.category].split(' ').at(0)}</td>
                                    <td className='py-2 px-3 max-sm:px-1'>{room.capacity}</td>
                                    <td className='py-2 px-3 max-sm:px-1'>
                                        <button className='p-2' onClick={() => dispatch(selectRoomToSearch(room.category))}><FaPlus /></button>
                                        <span>{room.noOfRooms}</span>
                                        <button className='p-2' onClick={() => dispatch(deselectRoomToSearch(room.category))}><FaMinus /></button>
                                    </td>
                                </tr>
                            )
                        })
                ) :
                (
                    roomOption && 
                        roomOption.map((room, ind) => {
                            if(room.noOfRooms !== 0) {
                                return(
                                    <tr key={ind} className='" w-full border-b border-gray-200"'>
                                        <td className='py-2 px-3 max-sm:px-1'>{categoryName[room.category].split(' ').at(0)}</td>
                                        <td className='py-2 px-3 max-sm:px-1'>{room.capacity}</td>
                                        <td className='py-2 px-3 max-sm:px-1'>{room.price}</td>
                                        <td className='py-2 px-3 max-sm:px-1'>
                                            <button className='p-2' onClick={() => dispatch(addRooms(room.category))}><FaPlus /></button>
                                            <span>{givenRoomOption[ind].noOfRooms}/{room.noOfRooms}</span>
                                            <button className='p-2' onClick={() => dispatch(removeRooms(room.category))}><FaMinus /></button>
                                        </td>
                                    </tr>
                                )
                            }else{
                                return null
                            }
                        })  
                )
            }
        </table>
    </>
    )
 }
 
 export default RoomComponent
 