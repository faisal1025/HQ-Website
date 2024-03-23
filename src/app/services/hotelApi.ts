import axios from "axios"
import { amenities, hotels } from "../Schema";

export const getAllHotels = async () => {
    const url = `${process.env.API_BASE_URL_DEV}/hotels?populate=*`
    const response = (await axios.get(url)).data;
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
    const url = `${process.env.API_BASE_URL_DEV}/hotels/${slug}`;

    const response = await (await fetch(url, {cache: 'default'})).json();
    
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