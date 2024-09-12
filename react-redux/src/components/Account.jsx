import { useState } from "react";
import "./Account.css";

const Account = ({ account, value, increment, decrement, incrementByAmount, handleInputChange }) => {

    return (
        <div className="account-container">
            <h4 className="account-heading">Account Component</h4>
            <h3 className="account-amount">Amount: {account.amount}</h3>
            <button className="account-button" onClick={increment}>Increment +100</button>
            <button className="account-button" onClick={decrement}>Decrement -100</button>
            <input
                type="number"
                value={value}
                onChange={handleInputChange}
                className="account-input"
            />
            <button className="account-button" onClick={() => incrementByAmount(value)}>
                Increment by Amount + {value}
            </button>
        </div>
    );
};

export default Account;
