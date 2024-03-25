"use client"
import { Slider, Switch } from 'antd';
import React from 'react'

const CustomSlider = () => {
    return (
        <div>
            <Slider range defaultValue={[40, 90]} />
        </div>
    )
}

export default CustomSlider
