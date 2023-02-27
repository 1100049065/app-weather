import logo from './logo.svg';
import './App.css';
import WeatherPane from './WeatherPane';
//import WeatherState from './context/weather/WeatherState';
import NavigationBar from './NavigationBar';
import CityContext from './Context/CityContext';
import CityState from './Context/CityState';

function App() {
  return (
    <div className="App">
      <CityState>
        <NavigationBar/>
        <header className="App-header">
        <WeatherPane/>  
      </header>
      </CityState>
    </div>
  );
}

export default App;
