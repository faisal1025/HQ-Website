import { DatePicker } from 'antd';
import { RangePickerProps } from 'antd/es/date-picker';
import React from 'react'
import { FaRegCalendar } from 'react-icons/fa';


const { RangePicker } = DatePicker;

const DateRangePicker = ({className, onOk}: {className?:string, onOk: (value: RangePickerProps['value']) => void}) => {
    return (
        
        <div className={`calender-container flex ${className} max-sm:w-full h-14 justify-center items-center rounded-lg border-r-slate-400`}>
            <i className="bg-white text-black h-full text-center items-center justify-center flex w-12"><FaRegCalendar size={20} /></i>
            <div className="flex flex-col justify-center h-full px-5 w-full text-black font-sans font-semibold focus:border-0">
              <label className=" text-xs">Date</label>
              <RangePicker className="text-base" 
                showTime={{ format: 'HH:mm' }}
                format="YYYY-MM-DD" onOk={onOk}
              />
            </div>
        </div>
    )
}

export default DateRangePicker
