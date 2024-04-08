import { baseUrl } from "./cityApi"


export const getAllAmenities = async () => {
    const url = `${baseUrl}/amenities`
    const response = await (await fetch(url)).json();
    if(response.error){
        throw new Error('Something went wrong')
    }
    const amenities = response.data.attributes.results.map((amenity: any) => {
        return amenity
    })

    return {
        props: {
            amenities,
            pagination: response.data.attributes.pagination
        }
    }
}