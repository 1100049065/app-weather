import logo from './logo.svg';
import './App.css';
import WeatherReport from './WeatherReport';
//import WeatherState from './context/weather/WeatherState';
import NavigationBar from './NavigationBar';
//import  { WeatherProvider }   from './Context/CityContext';
import WeatherProvider from './WeatherContext';


function App() {
  //console.log("App.js | city -",city);
  return (
    <div className="App">
        <WeatherProvider>  
       {/* <WeatherPane/> */}
        <NavigationBar/>  
        <header className="App-header">
        <WeatherReport/>  
      </header>
       </WeatherProvider>
    </div>
  );
}


 export default App;
