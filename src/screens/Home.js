import React, { useState } from 'react';
import Search from '../components/search/Search';
import CityCanvas from '../components/city/CityCanvas';
import GradientView from '../components/gradient/GradientView';
import { DateTime } from 'ts-luxon';

const Home = () => {
  const [ selectedCity, setSelectedCity ] = useState(null);

  const handleSelectedCity = (selectedCity) => {
    setSelectedCity(selectedCity);

    //const weatherFetch = fetch();
  }

  // const handleDayPhaseGradient = (currentTime, sunriseTime, sunsetTime) => {
  //   const curr = DateTime.fromISO(currentTime);
  //   const sunr = DateTime.fromISO(sunriseTime);
  //   const suns = DateTime.fromISO(sunsetTime);

  //   const phase = 
  //     curr < sunr ? '0'
  //     : curr > suns ? '2'
  //     : '1';
    
  //   setGradientIndex(phase);
  // }
  
  return (
    <GradientView>
      <Search onSelectCity={handleSelectedCity}/>
      {selectedCity && 
        <CityCanvas 
          selectedCity={selectedCity}
        />}
    </GradientView>
  )
}

export default Home