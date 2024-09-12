import { useState } from 'react';
import './App.css';
import Account from './components/Account';
import Bonus from './components/Bonus';

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="app-container">
      <h1 className="app-heading">Account Statement</h1>
      <div className="app-info">
        <p className="app-text">Amount:</p>
        <p className="app-text">Bonus:</p>
      </div>
      <Account />
      <Bonus />
    </div>
  );
}

export default App;