"use client"

import Image from "next/image";
import Check from "../../../public/assets/Login.png";
import type { Dayjs } from "dayjs";
import { RangePickerProps } from "antd/es/date-picker";
import Link from "next/link";
import GuestSelector from "./GuestSelector";
import DateRangePicker from "./DateRangePicker";
import { getOffPercent, getSavingAmount } from "../utils/hotelDetailUtility";
import { hotels } from "../Schema";

type RangeValue = [Dayjs | null, Dayjs | null] | null;

const PaymentCard = ({item}: {item: hotels}) => {

  const onOk = (value: RangePickerProps["value"]) => {
    console.log("onOk: ", value);
  };

  return (
    <section className="p-2 max-md:text-sm">
      <div className="title flex justify-around items-center text-white bg-red-600 h-[3rem] gap-2 font-bold text-sm max-md:text-[0.6rem] ">
        <div className="flex gap-4 items-center justify-start">
          {/* logo */}
          <Image src={Check} width={20} alt="check" />
          {/* title */}
          <h3>LOGIN NOW TO GET LOWER PRICES</h3>
        </div>
        <div className="flex w-auto items-center justify-center">
          {/* login btn */}
          <button className="p-2 h-[2rem] bg-red-500">
            LOGIN
          </button>
        </div>
      </div>

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
            <button className="w-full h-9 rounded bg-green-500 hover:bg-green-600 font-semibold my-2">Continue to Book</button>
        </div>
      </div>
    </section>
  );
};

export default PaymentCard;
