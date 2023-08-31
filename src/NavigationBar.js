import myLoc from './images/icons8-place-marker-16.png';
import AppLogo2 from './images/AppLogo2.png';
import {   useState } from "react";
import { useWeatherContext } from './WeatherContext';

function NavigationBar(){
   debugger;
    const { fetchWeatherData } = useWeatherContext();
    const [city, setCity] = useState("");

    console.log("Navbar.js | city :",city);
   
  const handleSearch = () => {
    alert("hih");
    debugger;
    console.log("Navbar.js | handleSearch triggered | city :",city)
    fetchWeatherData(city);
    setCity('');
    console.log("Navbar.js | After handleSearch:",city)
  };
  
  return (    
<nav className="navbar navbar-expand-lg navbar-light bg-light">
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo03" aria-controls="navbarTogglerDemo03" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>
  <a className="navbar-brand" href="#">WeatherApp</a>

  <div className="collapse navbar-collapse" id="navbarTogglerDemo03">
    <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
      <li className="nav-item active">
        <a className="nav-link" href="#">Today <span className="sr-only">(current)</span></a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#">3 Day</a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#">7 Day</a>
      </li>
    </ul>

    <form className="form-inline my-2 my-lg-0" 
    onSubmit={handleSearch}
    >
    <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
      <li className="nav-item">
        {/* <p className="nav-link" href="#"><img src={myLoc} alt="my-gif" /> {props.region} </p> */}
        <p className="nav-link" href="#"><img src={myLoc} alt="my-gif" /> </p>
      </li>
      </ul>
       <input className="form-control mr-sm-2" type="text"   value={city} 
       onChange={ (e) => setCity(e.target.value) } 
       placeholder="Search for a city" aria-label="Search" />

       <button className="btn btn-outline-success my-2 my-sm-0" 
      // type="submit" 
        //onClick={ cityData.contextValue.handleSelectedCity }
        //onClick={handleSearch}
       >Search </button>
     </form>
  </div>
</nav>

  );
}

export default NavigationBar;