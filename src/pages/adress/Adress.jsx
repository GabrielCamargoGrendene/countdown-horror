import { useContext} from "react";
import { CountdownContext } from "../../contexts/CountdownContext";
import { Killers } from "../../components/Killers/Killers";
import "./style.scss";

export function Adress() {
  const {
    adressJSON,
    setAdressJSON,
    getDate,
    setFilledAdress,
  } = useContext(CountdownContext);


  async function getCep(cep) {
    const cepUrl = `https://viacep.com.br/ws/${cep}/json/`;
    console.log(cepUrl);

    fetch(cepUrl)
      .then((response) => {
        if (!response.ok) {
          console.log("deu ruim");
          throw new Error(response.status);
        }
        console.log("deu bom");
        return response.json();
      })
      .then((data) => {
        setAdressJSON({
          cep: data.cep,
          logradouro: data.logradouro,
          cidade: data.localidade,
          estado: data.uf,
        });
        setFilledAdress(true);
      })
      .catch((e) => alert("Insira um CEP válido", e));

  
    console.log(adressJSON);

    alert('Iremos te buscar em casa...')
  }


  return (
    <>
      <div className="content">
        <form className="container-calendar">
          <label htmlFor="inputCalendar">Calendário</label>
          <div className="container-input-calendar">
            <input
              id="inputCalendar"
              type="datetime-local"
              min="2023-10-07T00:00"
              max="2023-12-31T23:59"
              defaultValue="2023-10-31T10:00"
            />
            <button
              type="button"
              onClick={() => {
                getDate(document.querySelector("#inputCalendar").value);
              }}
            >
              aperte
            </button>
          </div>
        </form>

       <Killers />

        <form className="container-adress">
          <label htmlFor="inputCEP">Digite seu CEP:</label>
          <div className="container-input-button">
            <input
              type="text"
              id="inputCEP"
              maxLength={8}
              placeholder="se tiver coragem..."
              onKeyDown={
                ("keypress",
                function (event) {
                  if (event.key === "Enter") {
                    event.preventDefault();
                    getCep(document.querySelector("#inputCEP").value);
                  }
                })
              }
            ></input>
            <button
              type="button"
              onClick={() => {
                getCep(document.querySelector("#inputCEP").value);
              }}
            >
              aperte
            </button>
            <div></div>
          </div>
        </form>
      </div>
    </>
  );
}
