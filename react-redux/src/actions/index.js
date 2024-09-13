import axios from "axios";

// action name constants
export const init = "init";
export const increment = "account/increment";
export const decrement = "account/decrement";
export const incrementByValue = "account/incrementByValue";
export const incrementBonus = "bonus/increment";

// actions creators
export const initializeUserFun = (id) => {
    return async (dispatch, getState) => {
        const { data } = await axios.get(`https://jsonplaceholder.typicode.com/users/${id}`)
        dispatch({ type: init, payload: data.id * 100 })
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
