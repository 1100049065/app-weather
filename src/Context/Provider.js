import React, {useState, useEffect} from 'react'
import axios from 'axios';
import  CityContext  from './CityContext'

// export function Provider(props){
//     debugger;
//     //const inputCityData = "Rohtak"; 
//     console.log("Provider | props.CityContext-------",props)

//   const [ cityData, setCityData] = useState("Rohtak");
//   //const [ weatherData, setWeatherData ] = useState();
//   console.log("props.children - ", props.children);
//   console.log("cityData: ",cityData)

//   const handleSelectedCity = (inputCity) => {
//     debugger;
//     alert("hello | inputCity: ",inputCity);
//     console.log("Provider.js | handleSelectedCity triggered");
//     //debugger;
//     //inputCity = event.target.value;
//     setCityData(inputCity);
//     console.log("handleSelectedCity | inputCity",inputCity);
// };

// const contextValue = { cityData, setCityData,
//    handleSelectedCity 
// };

//   return(
//     <CityContext.Provider value= { contextValue }>
//         {props.children}
//     </CityContext.Provider>
//   )
// }


// export function WeatherProvider({ children }) {
//   const [weatherData, setWeatherData] = useState(null);

//   async function fetchWeather(city) {
//     try {
//       const APIKey = '05c7464eb07c4ec9b73131828220803';
//       const url = `http://api.weatherapi.com/v1/current.json?key=${APIKey}&q=${city}&aqi=no`;

//       const response = await axios.get(url);
//       setWeatherData(response.data);
//     } catch (error) {
//       console.error('Error fetching weather data:', error);
//     }
//   }

//   return (
//     <CityContext.Provider value={{ weatherData, fetchWeather }}>
//       {children}
//     </CityContext.Provider>
//   );
// }



const WeatherProvider = ({ children }) => {
  debugger;
  const [weatherData, setWeatherData] = useState(null);

  const fetchWeatherData = async (city) => {
    debugger;
    console.log("city from WeatherContext", city);
    try {
      const APIKey = '05c7464eb07c4ec9b73131828220803';
      const url = `http://api.weatherapi.com/v1/current.json?key=${APIKey}&q=${city}&aqi=no`;
      const response = await fetch(url);
      const data = await response.json();
      setWeatherData(data);
    } catch (error) {
      console.error('Error fetching weather data:', error);
    }
  };

  useEffect(() => {
    // Fetch weather data for the default city (local city)
    fetchWeatherData('Rohtak'); // Replace with your local city name
  }, []);

  return (
    <CityContext.Provider value={{ weatherData, fetchWeatherData }}>
      {children}
    </CityContext.Provider>
  );
};

export default WeatherProvider;



