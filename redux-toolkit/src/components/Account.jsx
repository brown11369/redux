import "./Account.css";
import { increment, decrement, incrementByAmount, getUser } from "../redux/slices/accountSlice";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";

const Account = () => {
    const dispatch = useDispatch()
    const account = useSelector(state => state.account)
    const [value, setValue] = useState(0);

    const handleInputChange = (e) => {
        const newValue = +e.target.value;
        if (!isNaN(newValue)) {
            setValue(newValue);
        } else {
            setValue(0); // Handle invalid input by resetting to 0
        }
    };

    return (
        <div className="account-container">
            <h4 className="account-heading">Account Component</h4>
            {
                account.pending ? <p>Loading...</p> : account?.error ? <p>{account?.error}</p> : <h3 className="account-amount">Amount: {account.amount}</h3>
            }
            <button className="account-button" onClick={() => dispatch(getUser(3))}>Init</button>
            <button className="account-button" onClick={() => dispatch(increment())}>Increment +100</button>
            <button className="account-button" onClick={() => dispatch(decrement())}>Decrement -100</button>
            <input
                type="number"
                value={value}
                onChange={handleInputChange}
                className="account-input"
            />
            <button className="account-button" onClick={() => dispatch(incrementByAmount(value))}>
                Increment by + {value}
            </button>
        </div>
    );
};

export default Account;
