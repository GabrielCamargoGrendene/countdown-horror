import { createContext, useState, useEffect } from "react";

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

  

  let timer = 0;

  

  function convertNegative(data) {
    if(Math.sign(data) === -1) {
    return (data * -1)
    } else {
      return data 
    } 
  }

  function calcDifference() { //trabalhar nos calculos de numeros negativos para quando o Input é um horário anterior ao horário presente
    setRemainTime(59);

    let now = new Date();

    let nowObj = {
      day: now.getDate(),
      month: now.getMonth() + 1,
      year: now.getFullYear(),
      hour: now.getHours(),
      minutes: now.getMinutes(),
      seconds: remainTime,
    };

    let monthDifference = (date.month - nowObj.month)
    let dayMonth = 30 * monthDifference
    let hourDifference = date.hour - nowObj.hour
    let dayDifference = date.day - nowObj.day + dayMonth
    let minutesDifference = date.minutes - nowObj.minutes

   
    hourDifference = convertNegative(hourDifference)
    minutesDifference = convertNegative(minutesDifference)
  


    setDifference({
      month: monthDifference,
      year: date.year - nowObj.year,
      hour: hourDifference,
      day: dayDifference,
      minutes: minutesDifference,
      seconds: remainTime,
    });

    console.log(difference.day);
  }

  function getDate(markedDate) {
    clearTimeout(timer);
    var currentDate = new Date(markedDate);
    date = {
      day: currentDate.getDate(),
      month: currentDate.getMonth() + 1,
      year: currentDate.getFullYear(),
      hour: currentDate.getHours(),
      minutes: currentDate.getMinutes(),
      seconds: currentDate.getSeconds(),
    };

    setFilledDate(true);
    calcDifference();
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
    if (remainTime >= 1 && filledDate == true) {
       //ler sobre isso também pra tentar não pular segundos
      timer = setTimeout(() => {
        //ler sobre setInterval para continuar daqui
        console.log("oi");
        setRemainTime((remainTime) => remainTime - 1);
      }, 1000);
      //taoooo  
    } else {
      if (difference.minutes > 0) {
        difference.minutes--;
      }
      else {
        if (difference.hour > 0) {
          difference.hour--;
          difference.minutes = 59;
        }
        
         else {
          if (difference.day > 0) {
            difference.day--;
            difference.hour = 23;
            difference.minutes = 59;
          }
        }
      }
      if(difference.minutes != 0 || difference.hour != 0 || difference.day != 0){
      setRemainTime(59);
      }
      
    }
    if(difference.minutes == 0 && difference.hour == 0 && difference.day == 0 && remainTime <= 5){
      document.querySelector('.countdown-container').classList.add("blink")
    }

    if(difference.minutes == 0 && difference.hour == 0 && difference.day == 0 && remainTime == 0){
      clearTimeout()
      alert('Não olhe pra trás!!!')
    }
  
  }, [remainTime, difference, filledDate]);

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
          setThemeFreddy
      }}
    >
      {children}
    </CountdownContext.Provider>
  );
}
