import { Router } from 'next/router'
import React from 'react'
import CityLayout from '../city/layout'

const City = ({params}: {params: {city: string}}) => {
    return (
        <CityLayout>
            City details {params.city}
        </CityLayout>
    )
}

export default City
