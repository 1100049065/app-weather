import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import myLoc from './images/icons8-place-marker-16.png';
import AppLogo2 from './images/AppLogo2.png';
import { CityContext } from './Context/CityContext';
import { useContext, useState } from "react";

function NavigationBar(props) {

  debugger;
     const cityNameContext = useContext(CityContext)
     console.log(cityNameContext.city.name);
     const [ cityFromInput, setCityInput ] = useState();
     var cityInput = '';

  
  const handleSubmit=(event)=>{
    debugger;
    cityInput = event.target.value;
    console.log("cityInput from Navbar: ",cityInput);
    cityNameContext.cityName = cityInput;
    console.log("from navbar , cityNameContext.city.name---------------------------",cityNameContext.city.name);
  }

  const handleSearch=()=>{
    setCityInput(cityInput);

  }

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
    <form className="form-inline my-2 my-lg-0">
    <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
      <li className="nav-item">
        <p className="nav-link" href="#"><img src={myLoc} alt="my-gif" /> {props.region} </p>
      </li>
      </ul>
      <input className="form-control mr-sm-2" type="search" onKeyUp={ handleSubmit } placeholder="Search for a city" aria-label="Search" />
      <button className="btn btn-outline-success my-2 my-sm-0" type="submit" onClick={ handleSearch }>Search </button>
    </form>
  </div>
</nav>

  );
}

export default NavigationBar;