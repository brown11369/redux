import { useState } from 'react';
import { useDispatch, useSelector } from "react-redux"
import './App.css';
import Account from './components/Account';
import Bonus from './components/Bonus';
import { initializeUserFun } from './actions';

function App({ store }) {
  const amount = useSelector(state => state.account.amount)
  const points = useSelector(state => state.bonus.points)
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
    <div className="app-container">
      <h1 className="app-heading">Account Statement</h1>
      <div className="app-info">
        <p className="app-text">Amount: {amount}</p>
        <p className="app-text">Bonus: {points}</p>
      </div>
      <Account store={store} value={value} handleInputChange={handleInputChange} />
      <Bonus store={store} />
    </div>
  );
}

export default App;