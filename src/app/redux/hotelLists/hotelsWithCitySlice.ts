import { createSlice } from "@reduxjs/toolkit";
import { initialState, hotelsData } from "./hotels";

const initialState: initialState = {
    hotels: hotelsData,
    totalNoHotels: hotelsData.length
}

const hotelWithCitySlice = createSlice({
    name: "hotelWithCitySlice",
    initialState,
    reducers: {

    },
    extraReducers: (builder) => {

    }
})

export default hotelWithCitySlice.reducer;
export const {} = hotelWithCitySlice.actions;