import { INCREMENT, DECREMENT, ADDNUMBER } from "./Constantes";

export const increment =()=>({
    type : INCREMENT
})

export const decrement = () =>({
    type : DECREMENT
})


export const  ADDNumber = (payload) =>({
    type : ADDNUMBER,
    payload : payload
})
