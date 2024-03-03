import { createSlice } from "@reduxjs/toolkit";

type initialState = {
    enableMobileFilter: boolean;
    rooms: [
        {
            guest: number
        }
    ],
    totalGuest: number
} 

const initialState: initialState = {
    enableMobileFilter: true,
    rooms: [
        {
            guest: 1
        }
    ],
    totalGuest: 1
}

const globalSateSlice = createSlice({
    name: 'globalState',
    initialState,
    reducers: {
        toggleMobileFilter: (state, action) => {
            console.log(action.payload);
            
            state.enableMobileFilter = action.payload;
        },
        increaseGuest: (state, action) => {
            if(state.rooms[action.payload].guest > 3) return;
            state.rooms[action.payload].guest += 1;
            state.totalGuest += 1;
        },
        decreaseGuest: (state, action) => {
            if(state.rooms[action.payload].guest <= 1) return;
            state.rooms[action.payload].guest -= 1;
            state.totalGuest -= 1;
        },
        addRooms: (state) => {
            state.rooms.push({guest: 1})
            state.totalGuest += 1;
        }
    },
    extraReducers: (builder) => {

    }
})

export default globalSateSlice.reducer;
export const {toggleMobileFilter, increaseGuest, decreaseGuest, addRooms} = globalSateSlice.actions;