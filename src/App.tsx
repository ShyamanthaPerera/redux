import './App.css'
import {useDispatch, useSelector} from "react-redux";
import {useState} from "react";

function App() {

    const customer = useSelector(state => state.customer);
    const item = useSelector(state => state.item);

    const dispatch = useDispatch();

    const [customerName, setCustomerName] = useState('');
    const [itemName, setItemName] = useState('');

  return (
      <>
          <input type="text" placeholder="Customer Name" value={customerName} onChange={(e) => setCustomerName(e.target.value)}/>
          <button onClick={() => dispatch({type: 'ADD_CUSTOMER', payload: customerName})}></button>
          <br/>
          <input type="text" placeholder="Item Name" value={itemName} onChange={(e) => setItemName(e.target.value)}/>
          <button onClick={() => dispatch({type: 'ADD_ITEM', payload: itemName})}></button>

          <br/>
          {customer}
          <br/>
          {item}
      </>
  )
}

export default App
