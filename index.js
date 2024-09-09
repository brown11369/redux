import { createStore, applyMiddleware } from "redux";
import logger from "redux-logger";
import axios from "axios";
import { thunk } from "redux-thunk";

// action name constants
const init = "init"
const increment = "increment"
const incrementByValue = "incrementByValue"
const decrement = "decrement"
const decrementByValue = "decrementByValue"

// reducer
const reducer = (state = { amount: 0 }, action) => {
    switch (action.type) {
        case init:
            return { amount: action.payload }
        case increment:
            // immutability
            return { amount: state.amount + 1 }
        case incrementByValue:
            return { amount: state.amount + action.payload }
        case decrement:
            return { amount: state.amount - 1 }
        case decrementByValue:
            return { amount: state.amount - action.payload }
        default:
            return state
    }
}
// store
const store = createStore(reducer, applyMiddleware(logger.default, thunk))

// global state
console.log(store.getState())

// subscribe
// store.subscribe(() => {
//     console.log(store.getState())
// })

// async api call
// async function getUser() {
//     const { data } = await axios.get("https://jsonplaceholder.typicode.com/users")
//     console.log(data)
// }
// getUser()



// actions creators
const initializeUserFun = (id) => {
    return async (dispatch, getState) => {
        const { data } = await axios.get(`https://jsonplaceholder.typicode.com/users/${id}`)
        dispatch({ type: init, payload: data.id * 100 })
    }
}
const incrementFun = () => {
    return { type: increment }
}
const incrementByValueFun = (value) => {
    return { type: incrementByValue, payload: value }
}
const decrementFun = () => {
    return { type: "decrement" }
}
const decrementByValueFun = (value) => {
    return { type: decrementByValue, payload: value }
}

// dispatch (it dispatch like an event)
store.dispatch(initializeUserFun(2))
// store.dispatch(incrementFun())
// store.dispatch(incrementByValueFun(600))
// store.dispatch(decrementFun())
// store.dispatch(decrementByValueFun(300))