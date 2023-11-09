import { createContext, useState, useEffect, useRef } from "react";

export const CountdownContext = createContext({});

export function CountdownContextProvider({ children }) {
  const [adressJSON, setAdressJSON] = useState({});
  let date = {};
  const [filledAdress, setFilledAdress] = useState(false);
  const [scaryPhrase, setScaryPhrase] = useState(" ");

  const [remainTime, setRemainTime] = useState(0);
  const [filledDate, setFilledDate] = useState(false);
  const [themeJason, setThemeJason] = useState(false)
  const [themeFreddy, setThemeFreddy] = useState(true)
  const [difference, setDifference] = useState({});

  const [timerDays, setTimerDays] = useState(0);
  const [timerHours, setTimerHours] = useState(0);
  const [timerMinutes, setTimerMinutes] = useState(0);
  const [timerSeconds, setTimerSeconds] = useState(0);

  let interval = useRef()

  function calcDifference(chosenDate) { 
    //trabalhar nos calculos de numeros negativos para quando o Input é um horário anterior ao horário presente
    interval.current = setInterval(() => {
      console.log(interval)
    let now = new Date().getTime();
    let distance = chosenDate - now

    let days = Math.floor(distance / (1000 * 60 * 60 * 24));
    let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    let seconds = Math.floor((distance % (1000 * 60)) / 1000);
      console.log(distance)

    if(distance < 0) {
      clearInterval(interval.current)
      setTimerDays(0);
      setTimerHours(0);
      setTimerMinutes(0);
      setTimerSeconds(0);
      alert('Não olhe pra trás')
    } else {
      
      setTimerDays(days);
      setTimerHours(hours);
      setTimerMinutes(minutes);
      setTimerSeconds(seconds);

      if(days == 0 && hours == 0 && minutes == 0 && seconds <= 5){
        document.querySelector('.countdown-container').classList.add("blink")
      }
    }
  }, 1000);
}

  function getDate(markedDate) {
    clearInterval(interval.current)
    var currentDate = new Date(markedDate).getTime();

    setFilledDate(true);
    calcDifference(currentDate);
    console.log(date);
    alert('Seu fim está próximo...')
  }

  function changeTheme() {
    if(themeJason == true) {
         setThemeJason(false)
         setThemeFreddy(true)
    } else {
        setThemeJason(true)
        setThemeFreddy(false)       
    }
  }

  useEffect(() => {
    setScaryPhrase(`Iremos te buscar na ${adressJSON.logradouro} em ${adressJSON.cidade}/${adressJSON.estado}`);
  }, [adressJSON]);

  return (
    <CountdownContext.Provider
      value={{
        adressJSON,
        setAdressJSON,
        date,
        getDate,
        filledDate,
        setFilledDate,
        filledAdress,
        setFilledAdress,
        scaryPhrase,
        setScaryPhrase,
        remainTime,
        setRemainTime,
        setDifference,
        difference,
        calcDifference,
        themeJason,
         setThemeJason,
         changeTheme,
         themeFreddy,
          setThemeFreddy,
          timerDays,
          timerHours,
          timerMinutes,
          timerSeconds
      }}
    >
      {children}
    </CountdownContext.Provider>
  );
}
