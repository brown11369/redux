import { useState } from "react";
import "./Account.css"; // Import the CSS file

const Account = () => {
    const [account, setAccount] = useState({ amount: 0 });
    const [value, setValue] = useState(0);

    const increment = () => {
        setAccount(prevAccount => ({ amount: prevAccount.amount + 100 }));
    };

    const decrement = () => {
        setAccount(prevAccount => ({ amount: prevAccount.amount - 100 }));
    };

    const incrementByAmount = (value) => {
        setAccount(prevAccount => ({ amount: prevAccount.amount + value }));
    };

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
