import { accountUserFullfilled, accountUserPending, accountUserRejected, decrement, increment, incrementByValue, init } from "../actions"

export const accountReducer = (state = { amount: 0 }, action) => {
    switch (action.type) {
        case init:
            return { amount: action.payload }
        case accountUserPending:
            return { ...state, pending: true }
        case accountUserFullfilled:
            return { amount: action.payload, pending: false }
        case accountUserRejected:
            return { ...state, error: action.error, pending: false }
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