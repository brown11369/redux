import "./Account.css";
import { decrementFun, incrementByValueFun, incrementFun } from "../actions";
import { useDispatch, useSelector } from "react-redux";

const Account = ({ store, value, handleInputChange }) => {
    const dispatch = useDispatch()
    const amount = useSelector(state => state.account.amount)

    return (
        <div className="account-container">
            <h4 className="account-heading">Account Component</h4>
            <h3 className="account-amount">Amount: {amount}</h3>
            <button className="account-button" onClick={() => dispatch(incrementFun())}>Increment +100</button>
            <button className="account-button" onClick={() => dispatch(decrementFun())}>Decrement -100</button>
            <input
                type="number"
                value={value}
                onChange={handleInputChange}
                className="account-input"
            />
            <button className="account-button" onClick={() => dispatch(incrementByValueFun(value))}>
                Increment by Amount + {value}
            </button>
        </div>
    );
};

export default Account;
