import "./Bonus.css"; // Make sure this path is correct
import { incrementBonusFun } from "../actions";

const Bonus = ({ store }) => {
  console.log(store.getState().bonus.points)
  return (
    <div className="bonus-container">
      <h4 className="bonus-heading">Bonus Component</h4>
      <h3 className="bonus-points">Point: {store.getState().bonus.points}</h3>
      <button className="increment-button" onClick={() => store.dispatch(incrementBonusFun())}>
        Increment +1
      </button>
    </div>
  );
};

export default Bonus;