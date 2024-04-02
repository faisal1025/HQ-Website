import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { getToken, getUser } from "../utils/authHelper";

interface initialState {
    isLoading: boolean,
    isAuthenticated: boolean,
    user: {
        username: string | undefined,
        id: string | undefined
    },
    token: string | undefined
}

const initialState: initialState = {
    isLoading: false,
    isAuthenticated: getToken() ? true : false,
    user: getUser(),
    token: getToken() 
}

export const setAuthAsync = createAsyncThunk('setAuth', (value) => {
    return value;
})

const authStateSlice = createSlice({
    name: 'authState',
    initialState,
    reducers: {
        setAuth:  (state) => {
            state.isAuthenticated = getToken() ? true : false,
            state.user = getUser(),
            state.token = getToken() 
        }
    },
    extraReducers: (builder) => {
        builder.addCase(setAuthAsync.pending, (state, action) => {
            state.isLoading = true;
        })
        builder.addCase(setAuthAsync.fulfilled, (state, action) => {
            state.isLoading = false
            state.isAuthenticated = getToken() ? true : false,
            state.user = getUser(),
            state.token = getToken() 
        })
    }
})

export default authStateSlice.reducer

export const {setAuth} = authStateSlice.actions