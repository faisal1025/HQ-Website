import { createSlice } from "@reduxjs/toolkit/react";
import { hotels } from "./hotels";

type initialState = {
    hotel: hotels
}

const initialState: initialState = {
    hotel: {
        id: 1,
        thumbnail: "/assets/antriksh-hotel-thumbnail.png",
        photos: ["/assets/antariksh-hotel-room-1.png", "/assets/antariksh-hotel-room-2.png", "/assets/antriksh-hotel-room-3.png", "/assets/antriksh-hotel-exterior-5.png"],
        name: "Antariksh Hotel at Neem Ka Thana",
        address: "near arumbakkam metro station",
        city: 'Neem Ka Thana',
        state: "rajasthan",
        price: 1700,
        originalPrice: 3000,
        rating: 4.9,
        slug: "antariksh-hotel",
    },
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