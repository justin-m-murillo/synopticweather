import React, { useState, useEffect, useRef } from 'react';
import { View, Text } from 'react-native';
import { AutocompleteDropdown } from 'react-native-autocomplete-dropdown';
import useFetch from '../../hooks/useFetch';

const Search = ({ onSelectCity }) => {
  const [ searchQuery, setSearchQuery ] = useState('');
  const searchUrl = `https://geocoding-api.open-meteo.com/v1/search?name=${searchQuery}&count=10&lanuage=en&format=json`;
  const searchRef = useRef(null);

  const handleSearchQuery = (query) => {
    setSearchQuery(query);
  }

  const { data } = useFetch({url: searchUrl});
  const cities = data['results']?.map((city) => (
    {
      id:           `${city.id}`,
      title:        `${city.name} ${city.admin1} ${city.country_code}`,
      name:         `${city.name}`,
      admin1:       `${city.admin1}`,
      country_code: `${city.country_code}`,
      latitude:     `${city.latitude}`,
      longitude:    `${city.longitude}`,
      timezone:     `${city.timezone}`
    }
  ))

  return (
    <View>
      <AutocompleteDropdown 
        ref={searchRef}
        dataSet={!cities ? [] : cities}
        onChangeText={handleSearchQuery}
        onSelectItem={onSelectCity}
        debounce={500}
        useFilter={false}
        claseOnBlue
        closeOnSubmit
        emptyResultText={'Search city or postal code'}
      />
    </View>
  )
}

export default Search