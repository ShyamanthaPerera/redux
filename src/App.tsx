import './App.css'
import {useDispatch, useSelector} from "react-redux";

function App() {

  const {count, visible} = useSelector(state => state);

  const dispatch = useDispatch();

  const toggle = () => {
      dispatch({type: 'RESET'})
  }

  return (
    <>
      {visible && count}
      <br/>
      <button onClick={() => dispatch({type:'INCREMENT'})}>Increment</button>
      <button onClick={() => dispatch({type:'DECREMENT'})}>Decrement</button>
      <button onClick={toggle}>Toggle</button>
    </>
  )
}

export default App
