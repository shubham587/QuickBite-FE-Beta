import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    token: localStorage.getItem('eat-token') || null,
    isAuthenticated: localStorage.getItem("token") || false,
    location: localStorage.getItem("eat-location") || null,
    userName: null,
    email: null
}

const AuthSlice = createSlice({
    name: "Auth",
    initialState,
    reducers: {
        login(state, action) {

        },
        logout(state, action) {

        },
        setAuth(state, action) {

        }
    }
})

export const { login, logout, setAuth } = AuthSlice.actions
export default AuthSlice


