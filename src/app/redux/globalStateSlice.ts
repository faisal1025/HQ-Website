import { createSlice } from "@reduxjs/toolkit";
import { RangePickerProps } from "antd/es/date-picker";
import { hotels } from "../Schema";
import dayjs from 'dayjs';
import moment from 'moment';

const dateFormat = 'YYYY/MM/DD';

interface rooms {
    guest: number
}

type initialState = {
    searchText: string,
    enableMobileFilter: boolean,
    showBookNowModal: boolean,
    showCancleBooking: boolean,
    dateVal: RangePickerProps['value'] | undefined,
    rooms: rooms[],
    totalGuest: number,
    orderId: number | undefined,
    bookingListChanged: boolean,
    loading: boolean,
    showSearchBar: boolean
} 

const initialState: initialState = {
    searchText: "",
    dateVal: [dayjs(moment().format('YYYY/MM/DD'), dateFormat), dayjs(moment().add(1, 'days').format('YYYY/MM/DD'), dateFormat)],
    showBookNowModal: false,
    showCancleBooking: false,
    enableMobileFilter: true,
    rooms: [
        {
            guest: 1
        }
    ],
    totalGuest: 1,
    orderId: undefined,
    bookingListChanged: false,
    loading: false,
    showSearchBar: false
}

const globalSateSlice = createSlice({
    name: 'globalState',
    initialState,
    reducers: {
        toggleMobileFilter: (state, action) => { 
            state.enableMobileFilter = action.payload;
        },
        setLoading: (state, action) => {
            state.loading = action.payload
        },
        increaseGuest: (state, action) => {
            if(state.rooms[action.payload].guest >= 3) return;
            state.rooms[action.payload].guest += 1;
            state.totalGuest += 1;
        },
        decreaseGuest: (state, action) => {
            if(state.rooms[action.payload].guest <= 1 && state.rooms.length === 1) {
                return
            }else if(state.rooms[action.payload].guest <= 1 && state.rooms.length > 1) {
                state.rooms = state.rooms.filter((room, ind) => {
                    return (ind !== action.payload);
                })
                state.totalGuest -= 1;
                return;
            } else {
                state.rooms[action.payload].guest -= 1;
                state.totalGuest -= 1;
            }
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
        setShowBookModal: (state, action) => {
            state.showBookNowModal = action.payload
        },
        setShowCancleBooking: (state, action) => {
            state.showCancleBooking = action.payload
        },
        setOrderNumber: (state, action) => {
            state.orderId = action.payload
        },
        changeBookingList: (state, action) => {
            state.bookingListChanged = action.payload
        },
        setShowSearchBar: (state, action) => {
            state.showSearchBar = action.payload
        }
    },
    extraReducers: (builder) => {

    }
})

export default globalSateSlice.reducer;
export const {toggleMobileFilter, increaseGuest, setShowSearchBar, setLoading, decreaseGuest, addRooms, setDateVal, changeBookingList, setOrderNumber, setShowCancleBooking, setSearchText, setShowBookModal} = globalSateSlice.actions;