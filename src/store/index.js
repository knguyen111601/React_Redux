// Handle all of the react states inside of the store
import { createStore } from "redux";

const reducerFunction = (state= {counter:0}, action) => {
    // action has type and payload

    // Synchronous Function 
    // We should not mutate the original state

    if(action.type === "INCREMENT") {
        return {counter: state.counter+1}
    }

    if (action.type === "DECREMENT") {
        return {counter: state.counter-1}
    }

    if (action.type === "ADDBY") {
        return {counter: state.counter + action.payload}
    }

    return state

}


const store = createStore(reducerFunction)

export default store