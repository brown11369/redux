import { createAction, createSlice } from "@reduxjs/toolkit";

const initialState = {
    points: 0,
}

export const incrementByAmount = createAction("account/incrementByAmount")

const bonusSlice = createSlice({
    name: "bonus",
    initialState,
    reducers: {
        increment: (state) => {
            state.points += 1
        }
    },
    extraReducers: (builer) => {
        builer
            .addCase(incrementByAmount, (state, action) => {
                if (action.payload >= 300) {
                    state.points++
                }
            })
    }
})

export const { increment } = bonusSlice.actions;
export default bonusSlice.reducer;