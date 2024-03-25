import { createSlice } from "@reduxjs/toolkit/react";
import { initialState } from "./hotels";

const initialState: initialState = {
    hotels: [],
    totalNoHotels: 0
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