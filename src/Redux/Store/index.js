import { createStore } from "redux";
import CountReducer from "../Reducer/Reducer";

const Store = createStore(CountReducer)


export default Store