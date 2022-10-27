import {useState} from "react"
import './App.css';
import {increment, decrement, ADDNumber} from "./Redux/Reducer/reducerCount"
import {useDispatch, useSelector} from "react-redux"


function App(props) {

  const dispatch = useDispatch()

  const count = useSelector((state) => state.Count.count)
  
  return (
    <div className="App">
      <button onClick={() => dispatch(increment())}>+</button>
      <p>{count}</p>
      <button onClick={() => dispatch(decrement())}>-</button>
      <button onClick={() => dispatch(ADDNumber(10))}>ADD</button>
    </div>
  );
}


 

export default App;
