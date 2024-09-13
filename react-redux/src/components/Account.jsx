import "./Account.css";
import { decrementFun, incrementByValueFun, incrementFun, initializeUserFun } from "../actions";
import { useDispatch, useSelector } from "react-redux";

const Account = ({ store, value, handleInputChange }) => {
    const dispatch = useDispatch()
    const account = useSelector(state => state.account)

    return (
        <div className="account-container">
            <h4 className="account-heading">Account Component</h4>
            {
                account.pending ? <p>Loading...</p> : account?.error ? <p>{account?.error}</p> : <h3 className="account-amount">Amount: {account.amount}</h3>
            }
            <button className="account-button" onClick={() => dispatch(initializeUserFun(5))}>Init</button>
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
