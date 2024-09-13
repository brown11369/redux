import { useSelector } from "react-redux"
import './App.css';
import Account from './components/Account';
import Bonus from './components/Bonus';
import Reward from './components/Reward';

function App({ store }) {
  const amount = useSelector(state => state.account.amount)
  const points = useSelector(state => state.bonus.points)

  return (
    <div className="app-container">
      <h1 className="app-heading">Account Statement</h1>
      <div className="app-info">
        <p className="app-text">Amount: {amount}</p>
        <p className="app-text">Bonus: {points}</p>
      </div>
      <Account />
      <Bonus />
      <Reward />
    </div>
  );
}

export default App;