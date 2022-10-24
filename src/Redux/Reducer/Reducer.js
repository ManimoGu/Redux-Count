import { INCREMENT, DECREMENT, ADDNUMBER} from "../action/Constantes"

const initialstate = {
    count : 0
}

const CountReducer = (state = initialstate, action) =>{

    switch(action.type){
      case DECREMENT : return {count : state.count-1}
      break
      case INCREMENT : return {count : state.count+1}
      break
      case ADDNUMBER : return {count : state.count + action.payload}
      default : return state

    }


}

export default CountReducer