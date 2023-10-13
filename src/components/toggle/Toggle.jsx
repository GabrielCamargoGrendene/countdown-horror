import "./style.scss";
import { useContext } from "react";
import { CountdownContext } from "../../contexts/CountdownContext";

export function Toggle() {
  const { changeTheme } = useContext(CountdownContext);

  return (
    <div className="toggle-box">
      <label>
        <input
          type="checkbox"
          className="switch"
          onClick={() => {
            changeTheme();
          }}
        />
        <img className="jason-icon" src="src/assets/jason-mask.png" alt="" />
        <img className="freddy-icon" src="src/assets/freddy.png" alt="" />
      </label>
    </div>
  );
}
