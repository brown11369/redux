import "./Account.css";
import { decrementFun, incrementByValueFun, incrementFun } from "../actions";

const Account = ({ store, value, handleInputChange }) => {

    return (
        <div className="account-container">
            <h4 className="account-heading">Account Component</h4>
            <h3 className="account-amount">Amount: {store.getState().account.amount}</h3>
            <button className="account-button" onClick={() => store.dispatch(incrementFun())}>Increment +100</button>
            <button className="account-button" onClick={() => store.dispatch(decrementFun())}>Decrement -100</button>
            <input
                type="number"
                value={value}
                onChange={handleInputChange}
                className="account-input"
            />
            <button className="account-button" onClick={() => store.dispatch(incrementByValueFun(value))}>
                Increment by Amount + {value}
            </button>
        </div>
    );
};

export default Account;
