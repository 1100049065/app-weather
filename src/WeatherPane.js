import logo from './logo.svg';
import './App.css';
import axios from 'axios';
import {  useState, useEffect, useContext } from 'react';
import { Link } from 'react-router-dom';
import './WeatherPane.css';
import myGif from './images/icons8-location.gif'; 
import TimeAgo from 'javascript-time-ago'
import en from 'javascript-time-ago/locale/en' 
import { CityContext } from './Context/CityContext';
import NavigationBar from './NavigationBar';

//const weatherContext = React.createContext();


export default function WeatherPane() {
 // debugger;
     const cityNameContext = useContext(CityContext)
     const [ city,setCity ] = useState(cityNameContext.city.name);
     console.log("***** from weatherPane - cityNameContext.city.name",cityNameContext);
     let weatherData = cityNameContext.weatherData;
     let counter = cityNameContext.city.counter;
    //let changeCity = cityNameContext.cityName.update;
   // let weatherData = cityNameContext.weatherData;

   //  const [ weatherData, setWeatherData ] = useState();
     const [stylePath] = useState(     
      );

    // const APIKey = '05c7464eb07c4ec9b73131828220803';
    // const url = `http://api.weatherapi.com/v1/current.json?key=${APIKey}&q=${city}&aqi=no`;
      
  //   console.log(url);

     useEffect(()=>{
      //debugger;
      console.log("cityName from useEffect - Context",cityNameContext.cityName);
      cityNameContext.update()
     },[])
 


// Understand useEffect Hook not | setTimeOutInterval 



    // const handleChange = (e) =>{
    //     console.log("inside HandleChaneg"+e.target.value);
    //   changeCity(e.target.value);
    // }


    // const handleKeyPress=(e)=>{
    //     console.log("handleChange is being callled");
    //   if(e.charCode==="13"){
    //     handleSubmit();
    //   }
    // }

    const icon = weatherData ? weatherData.current.condition.icon : '';
    const text = weatherData ? weatherData.current.condition.text: ''; 
    const celsius = weatherData ? weatherData.current.temp_c : '';
    const fahrenheit = weatherData ? weatherData.current.temp_f : '';
    const humidity = weatherData ? weatherData.current.humidity : '';
    const wind_kph = weatherData ? weatherData.current.wind_kph : '';
    const wind_dir = weatherData ? weatherData.current.wind_dir : ''



    const last_updated = weatherData ? weatherData.current.last_updated : '';
    const last_updated_epoch = weatherData ? weatherData.current.last_updated_epoch : '';
    const region = weatherData ? weatherData.location.region : ''; 
    const name = weatherData ? weatherData.location.name : ''; 
    const country = weatherData ? weatherData.location.country : '';
    const lat = weatherData ? weatherData.location.lat : ''; 
    const lon = weatherData ? weatherData.location.lon : '';  

    const tz_id = weatherData ? weatherData.location.tz_id : '';
    const localtime = weatherData ? weatherData.location.localtime : ''; 
    TimeAgo.addDefaultLocale(en)
    let timeAgo = new TimeAgo('en-US')
    let timeAgoRes = timeAgo.format(Date.now() - 60 * 1000)

  return (
    <div>
      
     <link rel="stylesheet" type="text/css" href={stylePath} />      
<small>
 <div className="card text-center"> 
  <div className="card-body" style={{color: "black"}}>
  <div className="card-header">
  <ul className="list-group">

  <p><img src={myGif} alt="my-gif" /> {name}, {region} </p> 
  <p>{country}, {tz_id}</p>
  <p>Latitude:{ lat }       Longitude: { lon }</p>


  
</ul>
  
  </div>


  <ul className="list-group">
  <li className="list-group-item"><img src={icon} alt="weather"/>  {text}</li> 
  {/* <li className="list-group-item">Counter :{ counter }</li> */}
  <li className="list-group-item">Celsius :{celsius}</li>
  <li className="list-group-item">Fahrenheit :{fahrenheit}</li>
  <li className="list-group-item">Humidity: {humidity}</li>
  <li className="list-group-item">Wind :{wind_kph } km/hr</li>
  {/*<li className="list-group-item">Wind Direction: { wind_dir}</li>
 <li className="list-group-item"><small className="text-muted">Last Updated: {timeAgoRes}</small></li> */}
  {/* <a to="https://www.youtube.com/watch?v=QUPbFnTSHso" className="btn btn-primary">Go somewhere</a> */}
  
</ul>
<div className="card-footer bg-transparent border-success"><small className="text-muted">Last Updated {timeAgoRes}</small></div>
  </div>


</div>
</small>
</div>


  )
}