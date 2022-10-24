
import './App.css';
import { connect } from 'react-redux';
import {increment, decrement, ADDNumber} from "./Redux/action/action"


function App(props) {
  return (
    <div className="App">
      <button onClick={() => props.Plus()}>+</button>
      <h3>{props.count}</h3>
      <button onClick={() => props.Minus()}>-</button>
      <button onClick={() => props.ADD(20)} >Add 10</button>
    </div>
  );
}

const mapStatetoProps =(state) =>{

  return {
    count : state.count
  }
}

const mapDispatchtoProps = (dispatch) =>({

  Plus : () =>{
    dispatch(increment())
  },
  Minus : () =>{
    dispatch(decrement())
  },
  ADD : (payload) =>{
      dispatch(ADDNumber(payload))
  }

  
})


export default connect(mapStatetoProps, mapDispatchtoProps)(App);
