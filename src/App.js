import logo from './logo.svg';
import './App.css';
import WeatherPane from './WeatherPane';
//import WeatherState from './context/weather/WeatherState';
import NavigationBar from './NavigationBar';


function App() {
  return (
    <div className="App">
      <NavigationBar/>
      <header className="App-header">
        <WeatherPane/>  
      </header>
    </div>
  );
}

export default App;
