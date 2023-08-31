// WeatherContext.js
import React, { createContext, useContext, useState, useEffect } from 'react';

const WeatherContext = createContext();

export const useWeatherContext = () => useContext(WeatherContext);

const WeatherProvider = ({ children }) => {
  const [weatherData, setWeatherData] = useState(null);
  const [city, setCity] = useState("Rohtak")

  const fetchWeatherData = async (city) => {
    console.log("WeatherContext.js | city:",city);
    setCity(city);
    try {
        debugger;
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

    fetchWeatherData(city); // Replace with your local city name
  }, [city]);

  return (
    <WeatherContext.Provider value={{ weatherData, fetchWeatherData }}>
      {children}
    </WeatherContext.Provider>
  );
};

export default WeatherProvider;
