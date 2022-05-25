import {useSelector, useDispatch} from "react-redux" // extract the counter from the store


function App() {
  const counter = useSelector((state) => state.counter)
  const dispatch = useDispatch()

  const increment = () => {
    dispatch({type: "INCREMENT"})
  }

  const decrement = () => {
    dispatch({type:"DECREMENT"})
  }

  const addBy = () => {
    dispatch({type:"ADDBY", payload: 10}) // sending data through payload
  }

  return (
    <div>
      <h1 style={{textAlign:"center"}}>Counter App</h1>
      <h2 style={{textAlign:"center"}}>{counter}</h2>

      <div style={{display:"flex", flexDirection:"column", maxWidth:"80%", margin:"auto"}}>
        <div style={{display:"flex", justifyContent:"space-around"}}>
          <button onClick={increment} style={{width: "40%"}}>Increment</button>
          <p style={{width: "40%"}}>Dispatches the type of "increment" which the reducer function receives and returns the state after incrementing</p>
        </div>

        <div style={{display:"flex", justifyContent:"space-around"}}>
          <button onClick={decrement} style={{width: "40%"}}>Decrement</button>
          <p style={{width: "40%"}}>Dispatches the type of "decrement" which the reducer function receives and returns the state after decrementing</p>
        </div>

        <div style={{display:"flex", justifyContent:"space-around"}}>
          <button onClick={addBy} style={{width: "40%"}}>Add by 10</button>
          <p style={{width: "40%"}}>Dispatches the type of "addby" and payload of 10. The reducer function receives the type to discover which action to complete and then utilizes the data from the payload to commit the action. It then returns the state</p>
        </div>
      </div>


    </div>
  );
}

export default App;
