import { configureStore } from "@reduxjs/toolkit";
import todoslice from "./redux/slice";

export const store = configureStore({
    reducer: {
        todo: todoslice,

    }
});