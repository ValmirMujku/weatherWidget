import React from "react";
import { useEffect, useState } from "react";
import InpWeather from "./InpWeather";

export default function Weather() {

  const [weather, setWeather] = useState({});
  const [cName, setCname] = useState();

  const getName = (em)=>{
    setCname(em);
     
}


  useEffect(() => {
       
    const api = `https://api.weatherapi.com/v1/forecast.json?key=32727477402f423f820210524211311&q=${cName==null?'Kosovo':cName}`;
    fetch(api)
      .then((resp) => resp.json())
      .then((data) => {
        setWeather(data);
      })
      .catch((e) => console.log(e));
  },);

  
 

  return (
    <div>
        <div className="d-flex justify-content-center "  >
         <InpWeather getName={getName}   class =  'rounded-5'/>
        </div>
      
       {(typeof weather.current != 'undefined')?  <div className="container-fluid">
        <h4 className="text-center mt-2">{weather.location.country}</h4>
        <div className="d-flex flex-row justify-content-between">
          <div className="border border-light p-1 w-50 text-center">
            <h2>{weather.current.temp_c} C</h2>
          </div>
          <div className=" border border-light p-1 w-50 text-center">
            <h2>{weather.current.temp_f} F</h2>
          </div>
        </div>
        <div className="d-flex justify-content-center align-items-center">
          <img src={weather.current.condition.icon} alt="Weather"  />
        </div>
        <h5 className="text-center mt-3">{weather.location.localtime}</h5>
        <p className="text-center"><span className="text-danger">Condition: </span>{weather.current.condition.text}</p>
        <div className="d-flex flex-column align-items-center">
            <h6><span className="text-danger">Wind: </span>{weather.current.wind_mph} mph</h6>
            <h6><span className="text-danger">Wind: </span>{weather.current.wind_kph} kph</h6>
            <h6><span className="text-danger">Feels like: </span>{weather.current.feelslike_c} C</h6>
            <h6><span className="text-danger">Feels like: </span>{weather.current.feelslike_f} F</h6>
        </div>
      </div> : '' }
    
    </div>
  );
}
