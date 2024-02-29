import { createSlice } from "@reduxjs/toolkit/react";
import { hotels, initialState, hotelsData } from "./hotels";

const initialState: initialState = {
    hotels: hotelsData,
    totalNoHotels: hotelsData.length
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