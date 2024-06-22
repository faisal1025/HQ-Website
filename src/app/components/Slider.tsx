"use client"
import { Slider, Switch } from 'antd';
import React from 'react'

const CustomSlider = ({handlePriceFilter}: {handlePriceFilter: (value: number[]) => void}) => {
    const onChangeComplete = (value: number[]) => {
        handlePriceFilter(value);
    };

    return (
        <div>
            <Slider 
                range
                max={10000}
                min={100}
                defaultValue={[100, 10000]}
                onChangeComplete={onChangeComplete}
            />
        </div>
    )
}

export default CustomSlider
