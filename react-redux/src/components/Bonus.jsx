import { useState } from "react";
import "./Bonus.css"; // Make sure this path is correct

const Bonus = ({ bonus, incrementBonus }) => {
  return (
    <div className="bonus-container">
      <h4 className="bonus-heading">Bonus Component</h4>
      <h3 className="bonus-points">Point: {bonus.points}</h3>
      <button className="increment-button" onClick={incrementBonus}>
        Increment +1
      </button>
    </div>
  );
};

export default Bonus;
