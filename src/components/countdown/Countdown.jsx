import "./style.scss";
import { useContext} from "react";
import { CountdownContext } from "../../contexts/CountdownContext";
import { Killers } from "../Killers/Killers";

export function Countdown() {
  const {
    filledDate,
    filledAdress,
    scaryPhrase,
    remainTime,
    difference
  } = useContext(CountdownContext);

 



  return (
    <div className="main-container">
       <div className="adress-msg">{filledAdress ? scaryPhrase : ''}</div>
       
      <Killers />

      <div className="countdown-container">
        <div className="countdown-days">
          <h1 className="days-number">{filledDate ? difference.day : 0}</h1>
          <div className="days-text">Dias</div>
        </div>
        <h1 className="dots">:</h1>

        <div className="countdown-hours">
          <h1 className="hours-number">{filledDate ? difference.hour : 0}</h1>
          <div className="hours-text">Horas</div>
        </div>
        <h1 className="dots">:</h1>

        <div className="countdown-minutes">
          <h1 className="minutes-number">{filledDate ? difference.minutes : 0}</h1>
          <div className="minutes-text">Minutos</div>
        </div>
        <h1 className="dots">:</h1>

        <div className="countdown-seconds">
          <h1 className="seconds">{filledDate ? remainTime : 0}</h1>
          <div className="seconds">Segundos</div>
        </div>
      </div>
    </div>
  );
}
