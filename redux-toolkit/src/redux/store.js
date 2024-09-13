import { configureStore } from "@reduxjs/toolkit"
import accountReducer from "./slices/accountSlice.js"
import bonusReducer from "./slices/bonusSlice.js"
import rewardReducer from './reducers/rewardReducer.js'

const store = configureStore({
    reducer: {
        account: accountReducer,
        bonus: bonusReducer,
        reward: rewardReducer
    }
})

export default store;