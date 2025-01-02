import './App.css'
import {decrement, increment} from "./reducer/CounterSlice.ts";
import {useDispatch, useSelector} from "react-redux";

function App() {

    const count = useSelector(state => state.counter.count);

    const dispatch = useDispatch();

  return (
      <>
          {count}
          <br/>
          <button onClick={() => dispatch(increment())}>Increment</button>
          <button onClick={() => dispatch(decrement())}>Decrement</button>
      </>
  )
}

export default App
