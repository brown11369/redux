import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

// Initial state should include pending and error properties
const initialState = {
    amount: 0,
    pending: false,
    error: null
};

// Correct URL in the axios call
export const getUser = createAsyncThunk(
    'account/getUser',
    async (userId) => {
        const { data } = await axios.get(`https://jsonplaceholder.typicode.com/user/${userId}`);
        return data.id * 100;
    },
);

export const accountSlice = createSlice({
    name: "account",
    initialState,
    reducers: {
        increment: (state) => {
            state.amount += 100; // immer
        },
        decrement: (state) => {
            state.amount -= 100;
        },
        incrementByAmount: (state, action) => {
            state.amount += action.payload;
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(getUser.pending, (state) => {
                state.pending = true;
            })
            .addCase(getUser.fulfilled, (state, action) => {
                state.amount = action.payload;
                state.pending = false;
            })
            .addCase(getUser.rejected, (state, action) => {
                state.pending = false;
                state.error = action.error.message;
            });
    }
});

export const { increment, decrement, incrementByAmount } = accountSlice.actions;
export default accountSlice.reducer;