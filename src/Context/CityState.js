import React, {useState, useEffect} from 'react'
import axios from 'axios';
import { CityContext } from './CityContext'

const CityState = (props)=> {
  //debugger;



  let cityDefault = "Rohtak";
  //let cityName = '';
    const cityName = {
        "name":"Rohtak",
        "counter":1
    } 
   //cityInput==''?cityInput==cityDefault: cityInput; 

    console.log("props.CityContext-------",props)
    
    const APIKey = '05c7464eb07c4ec9b73131828220803';
    //const url = `http://api.weatherapi.com/v1/current.json?key=${APIKey}&q=${cityName.name}&aqi=no`;
    const url = `http://api.weatherapi.com/v1/current.json?key=${APIKey}&q=${cityName.name}&aqi=no`;


  const [ city, changeCity] = useState(cityName);
  const [ weatherData, setWeatherData ] = useState();
  console.log("props.children - ", props.children);
  console.log("counter from cityContext, city.counter: ",city.counter)

  const getData = () => {
        axios.get(url)
          .then(res => 
          setWeatherData(res.data))
          .catch(err => console.log(err))
          console.log("weatherData:---"+weatherData);
      }
  
    const update=()=>{
      setTimeout(()=>{
       // debugger;
        changeCity({"counter":5})
        console.log("counter from cityContext setTimeout",city)
              //changeCity(cityName="test")
               // test() 
      },3000)
    }   
    
    useEffect(()=>{
      getData();
   },[])

  return(
    <CityContext.Provider value={{city,update, weatherData}}>
        {props.children}
    </CityContext.Provider>
  )
}


export default CityState