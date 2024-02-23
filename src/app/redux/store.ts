import { configureStore } from '@reduxjs/toolkit'
import topRatedHotelsReducer from './hotelLists/topRatedHotelsSlice'
import citiesListReducer from './cities/citiesListSlice'
import contactUsReducer from './contact-us/contactUsSlice'

export const store = configureStore({
    reducer: {
        topRatedHotels: topRatedHotelsReducer,
        citiesList: citiesListReducer,
        contactUs: contactUsReducer
    }
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch