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
}
const store = createStore(reducer)

console.log(store.getState())

store.subscribe(() => {
    console.log(store.getState())
})

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

store.dispatch(incrementFun())
store.dispatch(incrementByValueFun(600))
store.dispatch(decrementFun())
store.dispatch(decrementByValueFun(300))