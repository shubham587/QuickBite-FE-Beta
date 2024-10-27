import { createSlice } from "@reduxjs/toolkit"
const initialState = {
    userName: null,
    email: null,
    location: localStorage.getItem('location') || null
}

const UserSlice = createSlice({
    name: "User",
    initialState,
    reducers:
    {
        setUser(state, action){

        },
        unSetUser(state, action){

        }
    }
})

export const { setUser, unSetUser} = UserSlice.actions
export default UserSlice