import axios from "axios";

// action name constants
export const init = "init";
export const increment = "account/increment";
export const decrement = "account/decrement";
export const incrementByValue = "account/incrementByValue";
export const incrementBonus = "bonus/increment";

export const accountUserPending = "account/user/pending"
export const accountUserFullfilled = "account/user/fullfilled"
export const accountUserRejected = "account/user/rejected"

// actions creators
export const initializeUserFun = (id) => {
    return async (dispatch, getState) => {
        try {
            dispatch(accountUserPendingFun())
            const { data } = await axios.get(`https://jsonplaceholder.typicode.com/users/${id}`)
            dispatch({ type: init, payload: data.id * 100 })
        }
        catch (error) {
            dispatch(accountUserRejectedFun(error.message))
        }
    }
}

export const incrementFun = () => {
    return { type: increment }
}
export const decrementFun = () => {
    return { type: decrement }
}
export const incrementByValueFun = (value) => {
    return { type: incrementByValue, payload: value }
}
export const incrementBonusFun = () => {
    return { type: incrementBonus }
}


export const accountUserPendingFun = (value) => {
    return { type: accountUserPending, payload: value }
}
export const accountUserFullfilledFun = () => {
    return { type: accountUserFullfilled }
}
export const accountUserRejectedFun = (error) => {
    return { type: accountUserRejected, error: error }
}
