import { createSlice } from "@reduxjs/toolkit";


const CountSlice = createSlice({
    name : "Count",
    initialState : {
        count : 0
    },
    reducers : {
        increment(state){
            state.count = state.count +1
        },
        decrement(state){
            state.count = state.count -1
        },
        ADDNumber(state, action){
          state.count = state.count + action.payload
        }
        
    }
})

export const {increment , decrement, ADDNumber } = CountSlice.actions

export default CountSlice.reducer