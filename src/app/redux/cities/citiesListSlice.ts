import { createSlice } from "@reduxjs/toolkit"; 
import { city } from "./city";

interface initialState {
    cities: city[],
    totalNoCities: number
}

const cities: city[] = [
    {
        id: 1,
        thumbnail: '/assets/city_background.webp',
        name: "Banglore",
        totalNoHotels: 15,
        avgPrice: "4,069",
    },
    {
        id: 2,
        thumbnail: '/assets/city_background.webp',
        name: "Mumbai",
        totalNoHotels: 15,
        avgPrice: "4,069",
    },
    {
        id: 3,
        thumbnail: '/assets/city_background.webp',
        name: "Pune",
        totalNoHotels: 15,
        avgPrice: "4,069",
    },
    {
        id: 4,
        thumbnail: '/assets/city_background.webp',
        name: "Kolkata",
        totalNoHotels: 15,
        avgPrice: "4,069",
    },
    {
        id: 5,
        thumbnail: '/assets/city_background.webp',
        name: "Rajasthan",
        totalNoHotels: 15,
        avgPrice: "4,069",
    },
    {
        id: 6,
        thumbnail: '/assets/city_background.webp',
        name: "Mussoorie",
        totalNoHotels: 15,
        avgPrice: "4,069",
    },
    {
        id: 7,
        thumbnail: '/assets/city_background.webp',
        name: "Chennai",
        totalNoHotels: 15,
        avgPrice: "4,069",
    },
    
]

const initialState: initialState = {
    cities: cities,
    totalNoCities: cities.length
}

const citiesListSlice = createSlice({
    name: "citiesList",
    initialState,
    reducers: {

    },
    extraReducers: (builder) => {

    }
})

export default citiesListSlice.reducer;
export const {} = citiesListSlice.actions;