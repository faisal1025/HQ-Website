
import { city } from "@/app/Schema";
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"; 
import axios from "axios";


interface initialState {
    isLoading: boolean,
    isError: boolean,
    error: string,
    cities: city[],
    totalNoCities: number
}

export const cityList = createAsyncThunk("citiesList/getCityList", async () => {
    const url = `${process.env.API_BASE_URL_DEV}/cities?populate=*`
    const response = await axios.get(url);
    return response.data
})

// const cities: city[] = [
//     {
//         id: 1,
//         thumbnail: '/assets/city_background.webp',
//         name: "Banglore",
//         totalNoHotels: 15,
//         avgPrice: "4,069",
//     },
//     {
//         id: 2,
//         thumbnail: '/assets/city_background.webp',
//         name: "Mumbai",
//         totalNoHotels: 15,
//         avgPrice: "4,069",
//     },
//     {
//         id: 3,
//         thumbnail: '/assets/city_background.webp',
//         name: "Pune",
//         totalNoHotels: 15,
//         avgPrice: "4,069",
//     },
//     {
//         id: 4,
//         thumbnail: '/assets/city_background.webp',
//         name: "Kolkata",
//         totalNoHotels: 15,
//         avgPrice: "4,069",
//     },
//     {
//         id: 5,
//         thumbnail: '/assets/city_background.webp',
//         name: "Rajasthan",
//         totalNoHotels: 15,
//         avgPrice: "4,069",
//     },
//     {
//         id: 6,
//         thumbnail: '/assets/city_background.webp',
//         name: "Mussoorie",
//         totalNoHotels: 15,
//         avgPrice: "4,069",
//     },
//     {
//         id: 7,
//         thumbnail: '/assets/city_background.webp',
//         name: "Chennai",
//         totalNoHotels: 15,
//         avgPrice: "4,069",
//     },
    
// ]

const initialState: initialState = {
    isLoading: false,
    isError: false,
    error: "",
    cities: [],
    totalNoCities: 0
}

const citiesListSlice = createSlice({
    name: "citiesList",
    initialState,
    reducers: {

    },
    extraReducers: (builder) => {
        builder.addCase(cityList.pending, (state, action) => {
            state.isLoading = true;
        })
        builder.addCase(cityList.fulfilled, (state, action) => {
            console.log("payload: ", action.payload);
            const cities:city[] = action.payload.data.map((city:any) => {
                return {...city.attributes, id: city.id, thumbnail: city.attributes.thumbnail.data.attributes.url}
            })
            state.isError = false;
            state.isLoading = false;
            state.totalNoCities = action.payload.meta.pagination.total
            state.cities = cities
        })
        builder.addCase(cityList.rejected, (state, action) => {
            console.log(action.payload);
            
            state.isError = true;
        })
    }
})

export default citiesListSlice.reducer;
export const {} = citiesListSlice.actions;