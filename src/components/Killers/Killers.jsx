import "./style.scss";
import { useContext } from "react";
import { CountdownContext } from "../../contexts/CountdownContext";

export function Killers() {

    const {
        themeJason,
        themeFreddy
      } = useContext(CountdownContext);

    return(

<div className="killers">
<img className="jason" hidden={themeJason} src="src/assets/jason-mask.png" alt="" />
<img className="freddy" hidden={themeFreddy} src="src/assets/freddy-vazado.png" alt="" />
</div>
    )
}