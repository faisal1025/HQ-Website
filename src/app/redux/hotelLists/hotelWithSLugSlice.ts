import { createSlice } from "@reduxjs/toolkit/react";
import { hotels } from "./hotels";

type initialState = {
    hotel: hotels
}

const initialState: initialState = {
    hotel: {
        id: 1,
        thumbnail: "/assets/hotel_tnagar1.avif",
        photos: ["/assets/hotel_demo4.avif", "/assets/hotel_demo2.avif", "/assets/hotel_demo3.avif"],
        name: "Spot On Jayam Residency",
        address: "near arumbakkam metro station",
        city: 'chennai',
        state: "tamil nadu",
        price: 1700,
        originalPrice: 3000,
        rating: 4.9,
        slug: "spot-on-jayam-residency",
    }
}

const hotelWithSlug = createSlice({
    name: 'hotelWithSlug',
    initialState,
    reducers: {

    },
    extraReducers: (builder) => {

    }
})

export default hotelWithSlug.reducer;
export const {} =  hotelWithSlug.actions;