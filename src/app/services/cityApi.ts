import axios from "axios";
import { errorToJSON } from "next/dist/server/render";
import { amenities, city, hotels } from "../Schema";

export const baseUrl = process.env.NODE_ENV === 'production' ? process.env.API_BASE_URL_PROD : process.env.API_BASE_URL_DEV

export const getAllStates = async () => {
    const url = `${baseUrl}/states?populate=*`
    const response = (await axios.get(url)).data;
    const cities:city[] = response.data.map((city:any) => {
        return {...city.attributes, id: city.id, thumbnail: city.attributes.thumbnail.data.attributes.url}
    })
    
    return {
      props: {
        cities
      }
    }
}

export const getStateById = async (slug: string, page: number) => {
    const url = `${baseUrl}/states/${slug}?page=${page}`
    const response = await (await fetch(url, {cache: 'no-cache'})).json()

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