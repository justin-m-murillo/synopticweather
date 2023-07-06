import React, { useState } from 'react';
import { View } from 'react-native';
import Search from '../components/search/Search';
import CityCard from '../components/city/CityCard';

const Home = () => {
  const [ selectedCity, setSelectedCity ] = useState(null);

  const handleSelectedCity = (selectedCity) => {
    setSelectedCity(selectedCity);
  }
  
  return (
    <View>
      <Search onSelectCity={handleSelectedCity} />
      {selectedCity && <CityCard selectedCity={selectedCity} />}
    </View>
  )
}

export default Home