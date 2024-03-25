import { hotels } from "@/app/Schema";
import { createSlice } from "@reduxjs/toolkit/react";

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
        state: {
            id: 1,
            name: 'Rajasthan',
            totalNoHotels: 1,
            avgPrice: '4,200',
            slug: 'rajasthan',
            createdAt: '2024-03-20T10:20:32.564Z',
            updatedAt: '2024-03-20T10:20:38.622Z',
            publishedAt: '2024-03-20T10:20:38.444Z'
          },
        price: 1700,
        originalPrice: 3000,
        rating: 4.9,
        slug: "antariksh-hotel",
        updatedAt: "",
        createdAt:"string",
        publishedAt:"string",
        taxAndFee: 191,
        payableAmount: 1891,
        description: 'Hotel SPOT ON 61091 Hotel Silver Palace Dx located in Delhi is an affordable option for travelers who are looking for comfort and convenience. The 5 km distance from India Gate and 4 km distance from Red Fort is within easy reach for tourists. Power backup, housekeeping, and reception are the amenities offered. Special Features The hotel room is a clean and modern space equipped with a fire-extinguisher, AC, and TV. There is a modern wardrobe for clothing storage. Location & Transportation Guests can visit Jama Masjid, Agrasen ki baoli and Lodhi Garden which are about 3 km, 3 km and 7 km away from the property.'
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