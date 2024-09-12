import { useState } from "react";
import "./Bonus.css"; // Make sure this path is correct

const Bonus = () => {
  const [bonus, setBonus] = useState({ points: 0 });

  const increment = () => {
    setBonus({ points: bonus.points + 1 });
  };

  return (
    <div className="bonus-container">
      <h4 className="bonus-heading">Bonus Component</h4>
      <h3 className="bonus-points">Point: {bonus.points}</h3>
      <button className="increment-button" onClick={increment}>
        Increment +1
      </button>
    </div>
  );
};

export default Bonus;
