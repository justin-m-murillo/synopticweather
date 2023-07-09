import React, { useState, useEffect, useRef } from 'react';
import { View, useWindowDimensions } from 'react-native';
import { AutocompleteDropdown } from 'react-native-autocomplete-dropdown';
import useFetch from '../../hooks/useFetch';
import { useNavigation } from '@react-navigation/native';

import { MagnifyingGlassIcon } from 'react-native-heroicons/outline';
import { ChevronDownIcon } from 'react-native-heroicons/solid';

const Search = () => {
  const [ searchQuery, setSearchQuery ] = useState('');
  const searchUrl = `https://geocoding-api.open-meteo.com/v1/search?name=${searchQuery}&count=10&lanuage=en&format=json`;
  const searchRef = useRef(null);
  const { width } = useWindowDimensions();
  const navigation = useNavigation();

  const handleSearchQuery = (query) => {
    setSearchQuery(query);
  }

  const handleSelectedItem = (item) => {
    if (!item) return;
    navigation.navigate('CityScreen', {
      id:           item?.id,
      title:        item?.title,
      name:         item?.name,
      admin1:       item?.admin1,
      country_code: item?.country_code,
      latitude:     item?.latitude,
      longitude:    item?.longitude,
      timezone:     item?.timezone,
    })
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
    <View className='flex-row w-screen items-center justify-center'>
      <MagnifyingGlassIcon size={24} color={'#fff'} style={{ flex: 1 }} />
      <AutocompleteDropdown 
        ref={searchRef}
        dataSet={!cities ? [] : cities}
        onChangeText={handleSearchQuery}
        onSelectItem={handleSelectedItem}
        debounce={500}
        useFilter={false}
        claseOnBlue
        closeOnSubmit
        emptyResultText={'Search city or postal code'}
        showClear={false}
        ChevronIconComponent={<ChevronDownIcon size={24} color={'#fff'} />}
        containerStyle={{ 
          width: width*0.6,
        }}
        inputContainerStyle={{ 
          backgroundColor: 'none',
        }}
        textInputProps={{
          placeholder: 'Search city or postal code',
          style: {
            color: '#fff'
          }
        }}
      />
    </View>
  )
}

export default Search