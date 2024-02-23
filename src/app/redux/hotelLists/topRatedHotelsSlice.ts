import { createSlice } from "@reduxjs/toolkit/react";
import { hotels } from "./hotels";

interface initialState  {
    hotels: hotels[],
    totalNoHotels: number
}

const hotels:hotels[] = [
    {
        id: 1,
        thumbnail: "/assets/hotel_tnagar1.avif",
        photos: ["/assets/hotel_demo4.avif", "/assets/hotel_demo2.avif", "/assets/hotel_demo3.avif"],
        name: "Spot On Jayam Residency",
        price: 1700,
        rating: 4.9
    },
    {
        id: 2,
        thumbnail: "/assets/hotel_tnagar1.avif",
        photos: ["/assets/hotel_demo4.avif", "/assets/hotel_demo2.avif", "/assets/hotel_demo3.avif"],
        name: "Spot On Jayam Residency",
        price: 1700,
        rating: 4.9
    },
    {
        id: 3,
        thumbnail: "/assets/hotel_tnagar1.avif",
        photos: ["/assets/hotel_demo4.avif", "/assets/hotel_demo2.avif", "/assets/hotel_demo3.avif"],
        name: "Spot On Jayam Residency",
        price: 1700,
        rating: 4.9
    },
    {
        id: 4,
        thumbnail: "/assets/hotel_tnagar1.avif",
        photos: ["/assets/hotel_demo4.avif", "/assets/hotel_demo2.avif", "/assets/hotel_demo3.avif"],
        name: "Spot On Jayam Residency",
        price: 1700,
        rating: 4.9
    },
    {
        id: 5,
        thumbnail: "/assets/hotel_tnagar1.avif",
        photos: ["/assets/hotel_demo4.avif", "/assets/hotel_demo2.avif", "/assets/hotel_demo3.avif"],
        name: "Spot On Jayam Residency",
        price: 1700,
        rating: 4.9
    },
]

const initialState: initialState = {
    hotels: hotels,
    totalNoHotels: hotels.length
}


const topRatedHotelsSlice = createSlice({
    name: 'topRatedHotels',
    initialState,
    reducers: {
        addElement: () => {

        }
    },
    extraReducers: (builder) => {
        
    }
})

export default topRatedHotelsSlice.reducer;

export const {addElement} = topRatedHotelsSlice.actions