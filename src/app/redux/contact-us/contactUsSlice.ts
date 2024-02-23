import { createSlice } from "@reduxjs/toolkit/react";

interface initialState {
    email: string
}

const initialState: initialState = {
    email: ""
}


const contactUsSlice = createSlice({
    name: "contactUs",
    initialState,
    reducers: {
        handleOnChange: (state, action) => {
            state.email = action.payload;
        }
    },
    extraReducers: (builder) => {

    }
})

export default contactUsSlice.reducer

export const {handleOnChange} = contactUsSlice.actions