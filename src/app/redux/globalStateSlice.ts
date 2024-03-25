import { createSlice } from "@reduxjs/toolkit";
import { RangePickerProps } from "antd/es/date-picker";
import { stat } from "fs";

interface rooms {
    guest: number
}

type initialState = {
    searchText: string,
    enableMobileFilter: boolean,
    dateVal: RangePickerProps['value'],
    rooms: rooms[],
    totalGuest: number
} 

const initialState: initialState = {
    searchText: "",
    dateVal: null,
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
            state.enableMobileFilter = action.payload;
        },
        increaseGuest: (state, action) => {
            if(state.rooms[action.payload].guest > 3) return;
            state.rooms[action.payload].guest += 1;
            state.totalGuest += 1;
        },
        decreaseGuest: (state, action) => {
            if(state.rooms[action.payload].guest <= 1) {
                state.rooms = state.rooms.filter((room, ind) => {
                    return (ind !== action.payload);
                })
                state.totalGuest -= 1;
                return;
            }
            state.rooms[action.payload].guest -= 1;
            state.totalGuest -= 1;
        },
        addRooms: (state) => {
            state.rooms = [...state.rooms, {guest: 1}]
            state.totalGuest += 1;
        },
        setSearchText: (state, action) => {
            state.searchText = action.payload
        },
        setDateVal: (state, action) => {
            state.dateVal = action.payload
        },
    },
    extraReducers: (builder) => {

    }
})

export default globalSateSlice.reducer;
export const {toggleMobileFilter, increaseGuest, decreaseGuest, addRooms, setDateVal, setSearchText} = globalSateSlice.actions;