import { createSlice } from "@reduxjs/toolkit";
import { initialState } from "./hotels";

const initialState: initialState = {
    hotels: [],
    totalNoHotels: 0
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