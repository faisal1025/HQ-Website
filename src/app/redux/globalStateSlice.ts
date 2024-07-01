import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { RangePickerProps } from "antd/es/date-picker";
import dayjs from 'dayjs';
import moment from 'moment';
import { baseUrl } from "../services/cityApi";
import axios from "axios";
import { hotels, room } from "../Schema";

const dateFormat = 'YYYY/MM/DD';

enum category {
    kingSizedRoom,
    queenSizedRoom,
    twinSizedRoom,
    duplexRoom
}

export const categoryName = ['King Sized Room', 'Queen Sized Room', 'Twin Bed Room', 'Duplex Room']

export interface roomCategory {
    category: category,
    price?: number,
    capacity: number,
    noOfRooms: number,
    rooms: room[]
}

export interface selectRoomForSearch {
    category: category,
    capacity: number,
    noOfRooms: number
}

type initialState = {
    searchText: string,
    enableMobileFilter: boolean,
    showBookNowModal: boolean,
    showCancleBooking: boolean,
    dateVal: RangePickerProps['value'] | undefined,
    selectRooms: selectRoomForSearch[],
    rooms: {
        kingSizedRoom: roomCategory,
        queenSizedRoom: roomCategory,
        twinSizedRoom: roomCategory,
        duplexRoom: roomCategory,
    },
    givenRooms: {
        kingSizedRoom: roomCategory,
        queenSizedRoom: roomCategory,
        twinSizedRoom: roomCategory,
        duplexRoom: roomCategory,
    },
    payableAmount: number,
    orderId: number | undefined,
    bookingListChanged: boolean,
    loading: boolean,
    showSearchBar: boolean
} 

export const fetchRooms = createAsyncThunk(
    'rooms/fetchByHotels', 
    async (data: {hotelId: number, checkIn: string | null | undefined, checkOut: string | null | undefined}) => {
        const  {availableRooms} = (await axios.post(`${baseUrl}/fetch-rooms`, data)).data
        // console.log("result in thunk: ", availableRooms);
        let rooms: {
            kingSizedRoom: roomCategory,
            queenSizedRoom: roomCategory,
            twinSizedRoom: roomCategory,
            duplexRoom: roomCategory,
        } = {
            kingSizedRoom: {
                category:category.kingSizedRoom,
                capacity: 4,
                noOfRooms: 0,
                rooms:[]
            },
            duplexRoom: {
                category: category.duplexRoom,
                capacity: 4,
                noOfRooms: 0,
                rooms:[]
            },
            twinSizedRoom: {
                category: category.queenSizedRoom,
                capacity: 3,
                noOfRooms: 0,
                rooms:[]
            },
            queenSizedRoom: {
                category: category.twinSizedRoom,
                capacity: 3,
                noOfRooms: 0,
                rooms:[]
            }
        }
        availableRooms.forEach((room: room) => {
            if(room.room_type == 'King Sized Room'){
                rooms.kingSizedRoom.capacity = room.capacity
                rooms.kingSizedRoom.price = room.price,
                rooms.kingSizedRoom.noOfRooms++;
                rooms.kingSizedRoom.rooms.push(room)
            }else if(room.room_type === 'Duplex Room'){
                rooms.duplexRoom.capacity = room.capacity
                rooms.duplexRoom.price = room.price,
                rooms.duplexRoom.noOfRooms++;
                rooms.duplexRoom.rooms?.push(room)
            }else if(room.room_type === 'Queen Sized Room'){
                rooms.queenSizedRoom.capacity = room.capacity
                rooms.queenSizedRoom.price = room.price,
                rooms.queenSizedRoom.noOfRooms++;
                rooms.queenSizedRoom.rooms?.push(room)
            }else{
                rooms.twinSizedRoom.capacity = room.capacity
                rooms.twinSizedRoom.price = room.price,
                rooms.twinSizedRoom.noOfRooms++;
                rooms.twinSizedRoom.rooms?.push(room)
            }
        });

        // console.log("rooms from thunk: ", rooms);
        
        return rooms;

        
})

const initialState: initialState = {
    searchText: "",
    dateVal: [dayjs(moment().format('YYYY/MM/DD'), dateFormat), dayjs(moment().add(1, 'days').format('YYYY/MM/DD'), dateFormat)],
    showBookNowModal: false,
    showCancleBooking: false,
    enableMobileFilter: true,
    selectRooms: [
        {
            category: category.kingSizedRoom,
            capacity: 4,
            noOfRooms: 0
        },
        {
            category: category.queenSizedRoom,
            capacity: 3,
            noOfRooms: 0
        },
        {
            category: category.twinSizedRoom,
            capacity: 3,
            noOfRooms: 0
        },
        {
            category: category.duplexRoom,
            capacity: 4,
            noOfRooms: 0
        },
    ],
    rooms: {
        kingSizedRoom: {
            category:category.kingSizedRoom,
            capacity: 4,
            noOfRooms: 0,
            rooms:[]
        },
        duplexRoom: {
            category: category.duplexRoom,
            capacity: 4,
            noOfRooms: 0,
            rooms:[]
        },
        twinSizedRoom: {
            category: category.queenSizedRoom,
            capacity: 3,
            noOfRooms: 0,
            rooms:[]
        },
        queenSizedRoom: {
            category: category.twinSizedRoom,
            capacity: 3,
            noOfRooms: 0,
            rooms:[]
        }
    },
    givenRooms: {
        kingSizedRoom: {
            category:category.kingSizedRoom,
            capacity: 4,
            noOfRooms: 0,
            rooms:[]
        },
        duplexRoom: {
            category: category.duplexRoom,
            capacity: 4,
            noOfRooms: 0,
            rooms:[]
        },
        twinSizedRoom: {
            category: category.queenSizedRoom,
            capacity: 3,
            noOfRooms: 0,
            rooms:[]
        },
        queenSizedRoom: {
            category: category.twinSizedRoom,
            capacity: 3,
            noOfRooms: 0,
            rooms:[]
        }
    },
    payableAmount: 0,
    orderId: undefined,
    bookingListChanged: false,
    loading: false,
    showSearchBar: false,
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
        resetGivenRoom: (state) => {
            state.givenRooms = initialState.givenRooms
        },
        removeRooms: (state, action) => {
            const category = action.payload
            if(category === 0 && state.givenRooms.kingSizedRoom.rooms.length !== 0){
                const room = state.givenRooms.kingSizedRoom.rooms.pop()
                if(room){
                    state.rooms.kingSizedRoom.rooms.push(room)
                    state.givenRooms.kingSizedRoom.noOfRooms -= 1
                }
            } else if(category === 1  && state.givenRooms.queenSizedRoom.rooms.length !== 0){
                const room = state.givenRooms.queenSizedRoom.rooms.pop()
                if(room){
                    state.rooms.queenSizedRoom.rooms.push(room)
                    state.givenRooms.queenSizedRoom.noOfRooms -= 1;
                }
            } else if(category === 3   && state.givenRooms.duplexRoom.rooms.length !== 0){
                const room = state.givenRooms.duplexRoom.rooms.pop()
                if(room){
                    state.rooms.duplexRoom.rooms.push(room)
                    state.givenRooms.duplexRoom.noOfRooms -= 1;
                }
            } else if(state.givenRooms.twinSizedRoom.rooms.length !== 0){
                const room = state.givenRooms.twinSizedRoom.rooms.pop()
                if(room){
                    state.rooms.twinSizedRoom.rooms.push(room)
                    state.givenRooms.twinSizedRoom.noOfRooms -= 1;
                }
            }
        },
        addRooms: (state, action) => {
            const category = action.payload
            if(category === 0 && state.rooms.kingSizedRoom.rooms.length !== 0){
                const room = state.rooms.kingSizedRoom.rooms.pop()
                if(room){
                    state.givenRooms.kingSizedRoom.rooms.push(room)
                    state.givenRooms.kingSizedRoom.noOfRooms += 1
                }
            } else if(category === 1  && state.rooms.queenSizedRoom.rooms.length !== 0){
                const room = state.rooms.queenSizedRoom.rooms.pop()
                if(room){
                    state.givenRooms.queenSizedRoom.rooms.push(room)
                    state.givenRooms.queenSizedRoom.noOfRooms += 1;
                }
            } else if(category === 3   && state.rooms.duplexRoom.rooms.length !== 0){
                const room = state.rooms.duplexRoom.rooms.pop()
                if(room){
                    state.givenRooms.duplexRoom.rooms.push(room)
                    state.givenRooms.duplexRoom.noOfRooms += 1;
                }
            } else if(state.rooms.twinSizedRoom.rooms.length !== 0){
                const room = state.rooms.twinSizedRoom.rooms.pop()
                if(room){
                    state.givenRooms.twinSizedRoom.rooms.push(room)
                    state.givenRooms.twinSizedRoom.noOfRooms += 1;
                }
            }
        },
        selectRoomToSearch: (state, action) => {
            state.selectRooms[action.payload].noOfRooms += 1
        },
        deselectRoomToSearch: (state, action) => {
            if(state.selectRooms[action.payload].noOfRooms > 0)
                state.selectRooms[action.payload].noOfRooms -= 1
        },
        updatePayableAmount: (state, action) => {
            state.payableAmount = action.payload
        },
        setSearchText: (state, action) => {
            state.searchText = action.payload
        },
        setDateVal: (state, action) => {
            const dates = action.payload;
            if(dates[0] !== null && dates[1] !== null && dates[0] > dates[1]){
                dates.reverse()
            }
            state.dateVal = dates
        },
        setShowBookModal: (state, action) => {
            state.showBookNowModal = action.payload
        },
        resetRoom: (state) => {
            state.rooms = initialState.rooms
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
        builder.addCase(fetchRooms.pending, (state, action) => {
            
        }),
        builder.addCase(fetchRooms.fulfilled, (state, action) => {
            state.loading = false,
            state.rooms = action.payload
        }),
        builder.addCase(fetchRooms.rejected, (state, action) => {
            state.loading = false,
            console.log(action.error);
        })
    }
})

export default globalSateSlice.reducer;
export const {toggleMobileFilter, removeRooms, resetRoom, selectRoomToSearch, deselectRoomToSearch, updatePayableAmount, resetGivenRoom, setShowSearchBar, setLoading, addRooms, setDateVal, changeBookingList, setOrderNumber, setShowCancleBooking, setSearchText, setShowBookModal} = globalSateSlice.actions;