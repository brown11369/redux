import { createAction, createReducer } from "@reduxjs/toolkit";

export const increment = createAction("reward/increment");
export const incrementByAmount = createAction("reward/incrementByAmount")

const initialState = {
    gifts: 0,
}

const rewardReducer = createReducer(initialState, (builder) => {
    builder
        .addCase(increment, (state, action) => {
            state.gifts++
        })
        .addCase(incrementByAmount, (state, action) => {
            state.gifts += action.payload;
        })
})

export default rewardReducer;