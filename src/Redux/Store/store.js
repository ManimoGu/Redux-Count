import { configureStore } from "@reduxjs/toolkit";
import CountReducer from "../Reducer/reducerCount"

const Store = configureStore({
    reducer : {

        Count : CountReducer

    }
})

export default Store