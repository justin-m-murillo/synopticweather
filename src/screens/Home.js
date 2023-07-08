import React, { useState } from 'react';
import { View } from 'react-native';
import Search from '../components/search/Search';
import CityCanvas from '../components/city/CityCanvas';
import GradientView from '../components/gradient/GradientView';
import { DateTime } from 'ts-luxon';

const Home = () => {
  const [ selectedCity, setSelectedCity ] = useState(null);

  const handleSelectedCity = (selectedCity) => {
    setSelectedCity(selectedCity);

  }
  
  return (
    <View>
      <Search onSelectCity={handleSelectedCity}/>
      {selectedCity && 
        <CityCanvas 
          selectedCity={selectedCity}
        />}
    </View>
  )
}

export default Home