import axios from "axios";
import { amenities, city, hotels } from "../Schema";

export const baseUrl = process.env.NODE_ENV === 'production' ? process.env.API_BASE_URL_PROD : process.env.API_BASE_URL_DEV
export const socketUrl = process.env.NODE_ENV === 'production' ? process.env.SOCKET_API_URL_PROD : process.env.SOCKET_API_URL_DEV

export const getAllStates = async () => {
    const url = `${baseUrl}/states`
    const response = await (await fetch(url, { next: { revalidate: 3600 } })).json();

    if(response.error){
      throw new Error('something went wrong')
    }

    const cities:city[] = response.data.map((city:any): city => {
        const totalNoHotels = city.attributes.hotels.data.length
        const totalPrice = city.attributes.hotels.data.reduce((pre: number, nxt: any) => {
          return pre += nxt.attributes.price;
        }, 0);
        
        const avgPrice = totalNoHotels ? Math.floor(totalPrice / totalNoHotels) : 0;

        return {...city.attributes, 
          id: city.id, 
          thumbnail: city.attributes.thumbnail.data.attributes.url,
          totalNoHotels,
          avgPrice
        }
    })
    
    return {
      props: {
        cities
      }
    }
}

export const getStateById = async (slug: string, query: string) => {
    
    const url = `${baseUrl}/states/${slug}?${query}`
    const response = await (await fetch(url, {cache: 'no-cache'})).json()

    if(response.error) {
      throw new Error('something went wrong')
    }

    const city: city = { ...response.data.attributes,
      totalNoHotels: response.data.attributes.hotels.data.attributes.pagination.total,
      id: response.data.id,
      hotels: response.data.attributes.hotels.data.attributes.results.map((hotel: any): hotels => {
        return {
          ...hotel,
          id: hotel.id,
          thumbnail: hotel.thumbnail.url,
          amenities: hotel.amenities.map((amenity: any): amenities => {
            return {
              ...amenity,
              id: amenity.id
            }
          }),
          payableAmount: hotel.taxAndFee + hotel.price,
        }
      }),
    }
    
    return {
      props: {
        city,
        pagination: response.data.attributes.hotels.data.attributes.pagination
      }
    }
}