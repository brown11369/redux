import { createStore } from "redux";

// action type
const increment = "increment"
const incrementByValue = "incrementByValue"
const decrement = "decrement"
const decrementByValue = "decrementByValue"

const reducer = (state = { amount: 0 }, action) => {
    switch (action.type) {
        case increment:
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
    return state
}
const store = createStore(reducer)

console.log(store.getState())