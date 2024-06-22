import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { getToken } from "../utils/authHelper";
import { baseUrl } from "../services/cityApi";
import { getMe } from "../services/authApi";

export interface user {
    address: string | null | undefined,
    blocked: boolean | undefined,
    confirmed: boolean | undefined,
    createdAt: string | undefined,
    email: string | undefined,
    fullName: string | null | undefined,
    id: number | undefined,
    phoneNumber: string | null | undefined,
    provider: string | undefined,
    updatedAt: string | undefined,
    username: string | undefined
}

interface initialState {
    isLoading: boolean,
    isAuthenticated: boolean,
    user: user,
    token: string | undefined,
}

const initialState: initialState = {
    isLoading: false,
    isAuthenticated: getToken() ? true : false,
    user: {
        address:  undefined,
        blocked: undefined,
        confirmed: undefined,
        createdAt:  undefined,
        email: undefined,
        fullName: undefined,
        id: undefined,
        phoneNumber: undefined,
        provider: undefined,
        updatedAt: undefined,
        username: undefined
    },
    token: getToken(),
}

export const setAuthAsync = createAsyncThunk('setAuth', async (value) => {
    const me = await getMe()
    return me;
})

export const updateUserAsync = createAsyncThunk('updateUser', async (value: {id?: string, values: {
    fullName: string,
    phoneNumber: string,
    address: string
}}) => {
    try {
        const response = await fetch(`${baseUrl}/users/${value?.id}`, {
            method: 'PUT',
            headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${getToken()}`
            },
            body: JSON.stringify(value.values)
        })
        
        const result = await  response.json()
        return result
    } catch (error) {
        if(error instanceof Error){
            throw error
        }
    }
})

const authStateSlice = createSlice({
    name: 'authState',
    initialState,
    reducers: {
        logoutUser: (state) => {
            state.isAuthenticated = getToken() ? true : false
            state.user = initialState.user
            state.token = getToken()
        }
    },
    extraReducers: (builder) => {
        builder.addCase(setAuthAsync.pending, (state, action) => {
            state.isLoading = true;
        })
        builder.addCase(setAuthAsync.fulfilled, (state, action) => {
            state.isLoading = false
            state.isAuthenticated = getToken() ? true : false
            state.user = action.payload
            state.token = getToken()
        })
        builder.addCase(updateUserAsync.pending, (state, action) => {
            state.isLoading = true;
        })
        builder.addCase(updateUserAsync.fulfilled, (state, action) => {
            state.isLoading = false
            state.user = action.payload
        })
    }
})

export default authStateSlice.reducer

export const { logoutUser } = authStateSlice.actions