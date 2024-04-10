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
import { hotels } from "../Schema";
import { checkAvailable, createOrder, createPayAtHotel } from "../services/hotelApi";
import { baseUrl } from "../services/cityApi";
import { useSelector, useDispatch } from 'react-redux'
import { AppDispatch, RootState } from "../redux/store";
import { getMe } from "../services/authApi";
import { useRouter } from "next/navigation";
import { setDateVal, setLoading } from "../redux/globalStateSlice";
import moment from 'moment';
import {Divider, message} from 'antd'

type RangeValue = [Dayjs | null, Dayjs | null] | null;

const PaymentCard = ({item}: {item: hotels}) => {
  const {push} = useRouter()
  const [resObject, setResObject] = useState({
    isAvailable: false,
    givenRooms: [],
    checkin: new Date(),
    checkout: new Date(),
    info: ''
  })
  const {user, isAuthenticated, token} = useSelector((store: RootState) => store.authState)
  const {dateVal, rooms, totalGuest} = useSelector((store: RootState) => store.globalState)
  const dispatch  = useDispatch<AppDispatch>() 
  
  const onOk = (value: RangePickerProps["value"]) => {
    dispatch(setDateVal(value));
  };

  const handlePayAtHotel = async  () => {
    dispatch(setLoading(true))
    const response = await createPayAtHotel({payableAmount: item.payableAmount, 
      user,
      hotel: item.id, 
      checkin: resObject.checkin,
      checkout: resObject.checkout,
      givenRooms: resObject.givenRooms
    })
    dispatch(setLoading(false))
    setResObject({
      isAvailable: false,
      givenRooms: [],
      checkin: new Date(),
      checkout: new Date(),
      info: ''
    })
    if(response.error && response.error.status === 401){
      message.error('User neeed to be authenticated')
      throw new Error('User neeed to be authenticated')
    }else if(response.error){
      message.error('Something went wrong. Please try again')
      throw new Error('Something went wrong. Please try again')
    }
    if(response.status === 200){
      message.success('Your room is successfully booked. pay at hotel')
    }else{
      message.error("something went wrong ! rooms haven't booked try again")
    }
  }
  
  const makeOrder = async () => {
    dispatch(setLoading(true));
    const {data, error} = await createOrder({payableAmount: item.payableAmount})
    const me = await getMe()
    dispatch(setLoading(false))
    if(error && error.status === 401) {
      message.error('User should be logged in')
        throw new Error('User should be logged in')
      }else if(error){
        message.error('Something went wrong. Please try again')
        throw new Error('Something went wrong')
      }
      
      const options = {
        key: data.attributes.key, // Enter the Key ID generated from the Dashboard
        amount: (data.attributes.amount*100), // Amount is in currency subunits. Default currency is INR. Hence, 50000 refers to 50000 paise
        currency: "INR",
        name: "HQ-Events",
        description: "Test Transaction",
        image: "https://example.com/your_logo",
        order_id: data.id, //This is a sample Order ID. Pass the `id` obtained in the response of Step 1
        // callback_url: `${baseUrl}/paymentVerification?id=${me.id}&hotel=${item.id}`,
        handler: async function(response: any) {
          const value = {
            me: me,
            hotel: item.id,
            amount: data.attributes.amount,
            checkin: resObject.checkin,
            checkout: resObject.checkout,
            givenRooms: resObject.givenRooms,
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
          setResObject({
            isAvailable: false,
            givenRooms: [],
            checkin: new Date(),
            checkout: new Date(),
            info: ''
          })
          if(res.status === 200){
            push('/payment-success')
          }else{
            push('/payment-faliure')
          }
        },
        prefill: {
          "name": me.username,
          "email": me.email,
          "contact": "9000090000"
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
    
    useEffect(() => {
      const updatePayableAmount = () => {
        const days = dateVal?.[1]?.diff(dateVal[0], 'days') || 1
        item.payableAmount = (days*Number(item.price)*Number(rooms.length))+Number(item.taxAndFee)
      }
      setResObject({
        isAvailable: false,
        givenRooms: [],
        checkin: new Date(),
        checkout: new Date(),
        info: ''
      })
      updatePayableAmount();
    }, [dateVal, rooms])

    const checkAvailability = async () => {
      const checkIn = dateVal && dateVal[0]?.format('YYYY-MM-DD')
      const checkOut = dateVal && dateVal[1]?.format('YYYY-MM-DD')
      
      const room = rooms.length;
      const guest = totalGuest;
      let room_config = rooms.reduce((pre, next, ind) => {
          return pre += `${ind}_${next.guest}-`
      }, "")
      room_config = room_config.slice(0, -1);
      const data = {
        hotelId: item.id,
        checkIn,
        checkOut,
        room_config,
        room,
        guest
      }
      const res = await checkAvailable(data)
      
      setResObject({
        ...resObject,
        givenRooms: res.givenRooms,
        isAvailable: res.isAvailable,
        checkin: res.checkin,
        checkout: res.checkout,
        info: res.isAvailable ? 'Rooms are available proceed' : 'Rooms are not available at this date'
      })
      
    }

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
          <GuestSelector className="w-fit" />
        </div>

        <div className="my-2">
            <div className="flex justify-between font-semibold p-2">
                <h4>Saving</h4>
                <h4>&#8377;{getSavingAmount(item.originalPrice, item.price)}</h4>
            </div>
            <div className="flex justify-between font-bold p-2">
                <h4 className="">Total price</h4>
                <h4 className="">&#8377;{item.payableAmount}</h4>
            </div>
            {
              resObject.isAvailable ?
                <div>
                  <button className="w-full h-9 rounded bg-green-500 hover:bg-green-600 font-semibold my-2" onClick={() => {isAuthenticated ? makeOrder() : push('/login')}}>Continue to Book</button>
                  <Divider>or</Divider>
                  <button className="w-full h-9 text-white rounded-full active:scale-75 transition bg-gradient-to-r from-slate-800 to-slate-600 font-semibold my-2" onClick={() => {isAuthenticated ? handlePayAtHotel() : push('/login')}}>Pay at hotel</button>
                </div>
              :
                <button className="w-full h-9 rounded bg-yellow-500 hover:bg-yellow-600 font-semibold my-2" onClick={() => {checkAvailability()}}>Check Availability</button>
            }
            {
              resObject.isAvailable ? 
                resObject.info !== '' &&
                <div className="flex gap-1 items-center font-medium text-green-500">
                  <AiFillCheckCircle /><span>{resObject.info}</span>
                </div> :
                resObject.info !== '' &&
                <div className="flex gap-1 items-center font-medium text-red-500">
                  <AiFillCloseCircle /><span>{resObject.info}</span>
                </div>
            }
        </div>
      </div>
    </section>
  );
};

export default PaymentCard;
