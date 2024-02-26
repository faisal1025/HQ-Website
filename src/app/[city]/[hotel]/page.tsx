import React from 'react'

const HotelDetails = ({params}: {params: {hotel: string}}) => {
    return (
        <>
            Hotel slug {params.hotel}
        </>
    )
}

export default HotelDetails
