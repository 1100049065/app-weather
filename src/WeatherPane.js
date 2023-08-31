import React from 'react'
import WeatherReport from './WeatherReport'
import NavigationBar from './NavigationBar'

export default function WeatherPane() {
  return (    
        <header className="App-header">
        <NavigationBar/>
        <WeatherReport/> 
      </header> 

  )
}
