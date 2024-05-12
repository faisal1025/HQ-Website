"use client"

import { DatePicker } from 'antd';
import { RangePickerProps } from 'antd/es/date-picker';
import React from 'react'
import dayjs from 'dayjs';
import { FaRegCalendar } from 'react-icons/fa';
import {useSelector} from 'react-redux'
import { RootState } from '../../redux/store';
import moment from 'moment';

const { RangePicker } = DatePicker;
const dateFormat = 'YYYY/MM/DD';

const DateRangePicker = ({className, onOk}: {className?:string, onOk: (value: RangePickerProps['value']) => void}) => {
  
  const {dateVal, rooms, totalGuest} = useSelector((store: RootState) => store.globalState)

  return (
        
        <div className={`calender-container flex ${className !== undefined ? className : ''} max-sm:w-full h-14 justify-center items-center rounded-lg border-r-slate-400`}>
            <i className="bg-white text-black h-full text-center items-center justify-center flex w-12"><FaRegCalendar size={20} /></i>
            <div className="flex flex-col justify-center h-full px-3 w-full text-black font-sans font-semibold focus:border-0">
              <label className=" text-xs">Date</label>
              <RangePicker className="text-base" 
                value={dateVal}
                showTime={{ format: 'HH:mm' }}
                defaultValue={[dayjs(moment().format('YYYY/MM/DD'), dateFormat), dayjs(moment().add(1, 'days').format('YYYY/MM/DD'), dateFormat)]}
                format="YYYY-MM-DD" onOk={onOk}
              />
            </div>
        </div>
    )
}

export default DateRangePicker
