import React from 'react';
import { View, Text, } from 'react-native';

import cityCardStyle from '../../style/citycard';
import CityCardBody from './CityCardBody';
import CityCardFooter from './CityCardFooter';
import CityGradient from './CityGradient';

import { WeatherContext } from '../../context/WeatherContext';

import useFetch from '../../hooks/useFetch';

const CityCard = ({ 
  selectedCity: {
    id, name, admin1, country_code,
    latitude, longitude, timezone,
}}) => {
  
  const fetchUrl = `https://api.open-meteo.com/v1/forecast?`+
  `latitude=${latitude}`+
  `&longitude=${longitude}`+
  `&daily=sunrise,sunset`+
  `&current_weather=true`+
  `&timezone=${timezone}`

  const weatherFetch = useFetch({url: fetchUrl, fireNow: true});
  
  const sunrise = weatherFetch?.data?.daily?.sunrise;
  const sunset = weatherFetch?.data?.daily?.sunset;
  const currentWeather = weatherFetch?.data?.current_weather;

  //console.log('CW:', currentWeather, '\nSUNR: ',sunrise, '\nSUNS:', sunset);

  return (
    <View className={cityCardStyle.cardContainer}>
      {currentWeather &&
        <WeatherContext.Provider
          value={
            {
              currentWeather: currentWeather,
              sunrise: sunrise,
              sunset: sunset, 
            }
          }
        >
          <CityGradient>
            <CityCardBody 
              name={name} 
              admin1={admin1} 
              country_code={country_code}
            />
            <CityCardFooter />
          </CityGradient>
        </WeatherContext.Provider>
      }
    </View>
  )
}

export default CityCard