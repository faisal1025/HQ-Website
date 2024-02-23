import { Typography } from 'antd'
import React from 'react'
import * as ReactIcons from 'react-icons/md'

export type IconNames = keyof typeof ReactIcons

const Amenities = ({icon, text}: {icon: IconNames, text: string}) => {

    const IconI = ReactIcons[icon];

    return (
        <Typography.Text className='para-text flex items-center gap-1 dark:!text-white '>
            <i className='inline-block'><IconI /></i> {text}
        </Typography.Text>
    )
}

export default Amenities
