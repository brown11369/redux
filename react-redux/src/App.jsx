import { useState } from 'react';
import './App.css';
import Account from './components/Account';
import Bonus from './components/Bonus';

function App() {
  const [account, setAccount] = useState({ amount: 0 });
  const [value, setValue] = useState(0);

  const [bonus, setBonus] = useState({ points: 0 });

  const incrementBonus = () => {
    setBonus({ points: bonus.points + 1 });
  };


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
    <div className="app-container">
      <h1 className="app-heading">Account Statement</h1>
      <div className="app-info">
        <p className="app-text">Amount: {account.amount}</p>
        <p className="app-text">Bonus: {bonus.points}</p>
      </div>
      <Account account={account} value={value} increment={increment} decrement={decrement} incrementByAmount={incrementByAmount} handleInputChange={handleInputChange} />
      <Bonus bonus={bonus} incrementBonus={incrementBonus} />
    </div>
  );
}

export default App;