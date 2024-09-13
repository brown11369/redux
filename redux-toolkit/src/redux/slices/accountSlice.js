import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    amount: 0
}

export const accountSlice = createSlice({
    name: "account",
    initialState,
    reducers: {
        increment: (state) => {
            state.amount += 100 //immer
        },
        decrement: (state) => {
            state.amount -= 100
        },
        incrementByAmount: (state, action) => {
            state.amount += action.payload
        }
    }
})

export const { increment, decrement, incrementByAmount } = accountSlice.actions;
export default accountSlice.reducer;