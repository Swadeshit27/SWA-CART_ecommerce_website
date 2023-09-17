
import { configureStore } from "@reduxjs/toolkit"
import { authSlice } from "./index";

const store = configureStore({
    reducer: {
        auth: authSlice.reducer
    }
})

export default store;