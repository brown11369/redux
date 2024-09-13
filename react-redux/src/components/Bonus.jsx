import "./Bonus.css"; // Make sure this path is correct
import { incrementBonusFun } from "../actions";
import { useDispatch, useSelector } from "react-redux";

const Bonus = ({ store }) => {
  const dispatch=useDispatch()
 const points= useSelector(state=>state.bonus.points)
  return (
    <div className="bonus-container">
      <h4 className="bonus-heading">Bonus Component</h4>
      <h3 className="bonus-points">Point: {points}</h3>
      <button className="increment-button" onClick={() =>dispatch(incrementBonusFun())}>
        Increment +1
      </button>
    </div>
  );
};

export default Bonus;