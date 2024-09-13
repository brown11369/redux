import { decrement, increment, incrementByValue, init } from "../actions"

export const accountReducer = (state = { amount: 1000 }, action) => {
    switch (action.type) {
        case init:
            return { amount: action.payload }
        case increment:
            // immutability
            return { amount: state.amount + 100 }
        case incrementByValue:
            return { amount: state.amount + action.payload }
        case decrement:
            return { amount: state.amount - 100 }
        default:
            return state
    }
}