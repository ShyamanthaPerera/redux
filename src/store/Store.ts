import {configureStore} from "@reduxjs/toolkit";
import counterSlice from "../reducer/CounterSlice.ts";

export const store = configureStore({
    reducer: {
        counter: counterSlice
    }
})