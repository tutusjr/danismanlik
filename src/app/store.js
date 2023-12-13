import { configureStore } from "@reduxjs/toolkit";
import scrollReducer from "../body/bodySlice"

export const store = configureStore({
    reducer: {
        scroll: scrollReducer
    },
})