import { configureStore } from '@reduxjs/toolkit'
import topRatedHotelsReducer from './hotelLists/topRatedHotelsSlice'
import hotelsWithCityReducer from './hotelLists/hotelsWithCitySlice'
import hotelWithSLugReducer from './hotelLists/hotelWithSLugSlice'
import citiesListReducer from './cities/citiesListSlice'
import contactUsReducer from './contact-us/contactUsSlice'
import globalStateSlice from './globalStateSlice'
import authStateSlice from './authStateSlice'

export const store = configureStore({
    reducer: {
        topRatedHotels: topRatedHotelsReducer,
        citiesList: citiesListReducer,
        contactUs: contactUsReducer,
        hotelWithCity: hotelsWithCityReducer,
        hotelWithSlug: hotelWithSLugReducer,
        globalState: globalStateSlice,
        authState: authStateSlice
    }
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch