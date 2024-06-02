import axios from "axios"
import { amenities, hotels, pagination } from "../Schema";
import { baseUrl } from "./cityApi";
import { getToken } from "../utils/authHelper";

export const getAllHotels = async () => {
    const url = `${baseUrl}/hotels?populate=*`
    const response = await (await fetch(url, { next: { revalidate: 3600 } })).json();
    if(response.error){
        throw new Error('Something went wrong')
    }
    const hotels: hotels[] = response.data.map((hotel: any) => {
        return {...hotel.attributes, id: hotel.id, 
            state: {...hotel.attributes.state.data.attributes, id: hotel.attributes.state.data.id},
            thumbnail: hotel.attributes.thumbnail.data.attributes.url, 
            photos:  hotel.attributes.photos.data.map((photo: any) => {
                return photo.attributes.url
            }),
            amenities: hotel.attributes.amenities.data.map((aminity: any) => {
                return {...aminity.attributes, id: aminity.id}
            }),
            payableAmount: hotel.attributes.price + hotel.attributes.taxAndFee
        }
    });
    
    return {
        props: {
            hotels
        }
    }
} 

export const getHotelById = async (slug: string) => {
    const url = `${baseUrl}/hotels/${slug}`;
  
    const response = await (await fetch(url, { next: { revalidate: 3600 } })).json();
    if(response.error){
        throw new Error('Something went wrong')
    }
    const hotel: hotels = {
        ...response.data.attributes, 
        id: response.data.id, 
        thumbnail: response.data.attributes.thumbnail.data.attributes.url,
        state: {...response.data.attributes.state.data.attributes, id: response.data.attributes.state.data.id},
        photos:  response.data.attributes.photos.data.map((photo: any) => {
            return photo.attributes.url
        }),
        amenities: response.data.attributes.amenities.data.map((amenity: any): amenities => {
            return {
                id: amenity.id,
                ...amenity.attributes
            }
        }),
        payableAmount: response.data.attributes.price + response.data.attributes.taxAndFee
    }
    
    return {
        props: {
            hotel
        }
    }
}

export const getSearchHotels = async (params: string) => {
    
    const url = `${baseUrl}/search?${params}`;
    const response = await (await fetch(url, {cache: "no-cache"})).json();
    if(response.error){
        throw new Error('Something went wrong')
    }
    const hotels: hotels[] = response.data.attributes.results.map((hotel: any): hotels => {
        return {
            ...hotel,
            thumbnail: hotel.thumbnail.url,
        }
    })
    return {
        props: {
            hotels: hotels,
            pagination: response.data.attributes.pagination
        }
    }
}

export  const createOrder = async (value: {payableAmount: string | number}) => {
    const url = `${baseUrl}/checkout`;
    const response = await fetch(url, {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${getToken()}`
        },
        body: JSON.stringify(value)
    })
    
    const checkout = await response.json();
    return checkout;
}

export const checkAvailable = async (data: any) => {
    const url = `${baseUrl}/check-available`
    const response = await fetch(url, {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    })

    const res = await response.json();
    console.log("res", res);
    
    if(res.error){
        throw new Error('Something went wrong')
    }
    return res;
}

export async function createPayAtHotel({payableAmount, user, hotel, checkin, checkout, givenRooms}: {payableAmount: string | number, user: {
    username: string | undefined,
    email: string | undefined,
    id: string | undefined
}, hotel: number, checkin: Date, checkout: Date, givenRooms: any}) {
    const data = {
        payableAmount,
        user,
        hotel,
        checkin,
        checkout,
        givenRooms
    }
    const url = `${baseUrl}/pay-at-hotel`
    const response = await (await fetch(url, {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${getToken()}`
        },
        body: JSON.stringify(data)
    })).json()
  
    return response
}