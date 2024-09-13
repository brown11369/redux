import "./Bonus.css"; // Make sure this path is correct
import { increment, incrementByAmount } from "../redux/reducers/rewardReducer";
import { useDispatch, useSelector } from "react-redux";

const Reward = () => {
  const dispatch = useDispatch()
  const gifts = useSelector(state => state.reward.gifts)
  return (
    <div className="bonus-container">
      <h4 className="bonus-heading">Reward Component</h4>
      <h3 className="bonus-points">Gifts: {gifts}</h3>
      <button className="increment-button" onClick={() => dispatch(increment())}>
        Increment +1
      </button>
      <button className="increment-button" onClick={() => dispatch(incrementByAmount(7))}>
        Increment By +7
      </button>
    </div>
  );
};

export default Reward;