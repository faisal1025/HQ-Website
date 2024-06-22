"use client"

import React, {useState, useEffect} from 'react'
import Image from "next/image";
import { AiFillCloseCircle, AiFillCheckCircle } from "react-icons/ai";
import Check from "../../../public/assets/Login.png";
import type { Dayjs } from "dayjs";
import { RangePickerProps } from "antd/es/date-picker";
import Link from "next/link";
import GuestSelector from "./SearchComponents/GuestSelector";
import DateRangePicker from "./SearchComponents/DateRangePicker";
import { getOffPercent, getSavingAmount } from "../utils/hotelDetailUtility";
import { hotels, room } from "../Schema";
import { useSelector, useDispatch } from 'react-redux'
import { AppDispatch, RootState } from "../redux/store";
import { getMe } from "../services/authApi";
import { useRouter } from "next/navigation";
import { addRooms, fetchRooms, resetRoom, resetGivenRoom, roomCategory, setDateVal, setLoading, updatePayableAmount } from "../redux/globalStateSlice";
import moment from 'moment';
import { message } from 'antd';

type RangeValue = [Dayjs | null, Dayjs | null] | null;

const PaymentCard = ({item}: {item: hotels}) => {
  // console.log('payment card: ', item);
  
  const {push} = useRouter()
  const {user, isAuthenticated, token} = useSelector((store: RootState) => store.authState)
  const {dateVal, payableAmount, givenRooms} = useSelector((store: RootState) => store.globalState)
  const dispatch  = useDispatch<AppDispatch>() 

  const checkIn = dateVal && dateVal[0]?.format('YYYY-MM-DD')
  const checkOut = dateVal && dateVal[1]?.format('YYYY-MM-DD')

  const getGivenRooms = (): number[] => {
    const givenArr = [givenRooms.kingSizedRoom, givenRooms.queenSizedRoom, givenRooms.twinSizedRoom, givenRooms.duplexRoom]

    const res = givenArr.flatMap((category: roomCategory, ind: number) => {
      return category.rooms.map((room: room, i: number) => {
        return room.id
      })
    })

    return res;
  }

  function roomSelected() {
    const arr = getGivenRooms()
    if(arr.length === 0){
      message.error('Please select a room to book')
      return false
    }
    return true
  }
  
  const onOk = (value: RangePickerProps["value"]) => {
    dispatch(setDateVal(value));
  };
  
  
  useEffect(() => {
    async function fetchAvailableRooms(){
      const data = {
        hotelId: item.id,
        checkIn,
        checkOut,
      }
      dispatch(resetGivenRoom())
      const response = await dispatch(fetchRooms(data))
      const rooms = response.payload as any

      if(rooms.kingSizedRoom.noOfRooms !== 0) {
        item.price = rooms.kingSizedRoom.price  
        dispatch(addRooms(rooms.kingSizedRoom.category))
      }else if(rooms.duplexRoom.noOfRooms !== 0){
        item.price = rooms.duplexRoom.price
        dispatch(addRooms(rooms.duplexRoom.category))
      }else if(rooms.queenSizedRoom.noOfRooms !== 0){
        item.price = rooms.queenSizedRoom.price
        dispatch(addRooms(rooms.queenSizedRoom.category))
      }else if(rooms.twinSizedRoom.noOfRooms !== 0){
        item.price = rooms.twinSizedRoom.price
        dispatch(addRooms(rooms.twinSizedRoom.category))
      }
    }
    
    fetchAvailableRooms();

  }, [dateVal, item, checkIn, checkOut, dispatch])

  useEffect(() => {
    const givenRoomsArr = [givenRooms.kingSizedRoom, givenRooms.queenSizedRoom, givenRooms.twinSizedRoom, givenRooms.duplexRoom]

    const oneDayPrice = givenRoomsArr.reduce((pre: number, curr: roomCategory, ind: number): number => {
      // console.log(curr.category, curr.noOfRooms, curr.rooms[0]?.price);
      
      if(curr.rooms.length !== 0){
        return pre += (curr.rooms.length * curr.rooms[0]?.price)
      }else{
        return pre
      }
    }, 0)

    // console.log("one day price", oneDayPrice);
    
    const days = dateVal?.[1]?.diff(dateVal[0], 'days') ? dateVal?.[1]?.diff(dateVal[0], 'days')+1 : 1
    // console.log((days*oneDayPrice)+Number(item.taxAndFee));
    
    dispatch(updatePayableAmount((days*oneDayPrice)+Number(item.taxAndFee)))

  }, [givenRooms, item, dateVal, dispatch])

  return (
    <section className="p-2 max-md:text-sm">
      {
        !isAuthenticated &&
          <div className="title flex justify-around items-center text-white bg-red-600 h-[3rem] gap-2 font-bold text-sm max-md:text-[0.6rem] ">
            <div className="flex gap-4 items-center justify-start">
              {/* logo */}
              <Image src={Check} width={20} alt="check" />
              {/* title */}
              <h3>LOGIN NOW TO GET LOWER PRICES</h3>
            </div>
            <div className="flex w-auto items-center justify-center">
              {/* login btn */}
              <button className="p-2 h-[2rem] bg-red-500" onClick={() => push('/login')}>
                LOGIN
              </button>
            </div>
          </div>
      }

      <div className="flex flex-col gap-2 mt-2 font-sans text-sm">
        <div className="flex gap-2 px-2 mx-3 font-bold text-xl">
          <h3>&#8377;{item.price}</h3>
          <h5 className="text-[0.8rem] line-through">&#8377;{item.originalPrice}</h5>
          <h3 className="text-[0.6rem] text-yellow-500">{getOffPercent(item.originalPrice, item.price)}% off</h3>
        </div>
        <div className="px-2 mx-3 text-[0.8rem]">
          <h5>+taxes and fee &#8377;{item.taxAndFee}</h5>
        </div>

        <div className="flex-1 gap-2 max-md:flex-wrap max-w-full m-3 p-2 bg-white rounded-lg justify-center items-center">
          <DateRangePicker className="w-fit" onOk={onOk} />
          <GuestSelector searchRoom={false} className="w-fit" />
        </div>

        <div className="my-2">
            <div className="flex justify-between font-semibold p-2">
                <h4>Saving</h4>
                <h4>&#8377;{getSavingAmount(item.originalPrice, item.price)}</h4>
            </div>
            <div className="flex justify-between font-bold p-2">
                <h4 className="">Total price</h4>
                <h4 className="">&#8377;{payableAmount}</h4>
            </div>
            <button className="w-full h-9 rounded bg-yellow-500 hover:bg-yellow-600 font-semibold my-2" onClick={() => {
                if(roomSelected())
                  push(`/booking-summary/${item.slug}`)
              }}>
              {'Continue to Checkout'}
            </button>
        </div>
      </div>
    </section>
  );
};

export default PaymentCard;
