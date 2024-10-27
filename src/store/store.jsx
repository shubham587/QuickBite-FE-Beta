import { configureStore } from "@reduxjs/toolkit";
import AuthSlice from "./slices/AuthSlice";
import UserSlice from "./slices/UserSlice";


const store = configureStore({
    reducer: {user: UserSlice.reducer, auth: AuthSlice.reducer}
})

export default store