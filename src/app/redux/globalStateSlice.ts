import { createSlice } from "@reduxjs/toolkit";

type initialState = {
    enableMobileFilter: boolean;
} 

const initialState: initialState = {
    enableMobileFilter: true
}

const globalSateSlice = createSlice({
    name: 'globalState',
    initialState,
    reducers: {
        toggleMobileFilter: (state, action) => {
            console.log(action.payload);
            
            state.enableMobileFilter = action.payload;
        }
    },
    extraReducers: (builder) => {

    }
})

export default globalSateSlice.reducer;
export const {toggleMobileFilter} = globalSateSlice.actions;