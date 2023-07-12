import React, { useState, useEffect, useRef } from 'react';
import { View, Text, useWindowDimensions } from 'react-native';
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
    setSearchQuery('');
    navigation.navigate('CityScreen', {
      id:           item?.id,
      title:        item?.title,
      name:         item?.name,
      admin1:       item?.admin1,
      country_code: item?.country_code,
      latitude:     item?.latitude,
      longitude:    item?.longitude,
      timezone:     item?.timezone,
    });
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
    <View className='flex-row w-auto h-auto items-center'>
      {/* <MagnifyingGlassIcon size={24} color={'#fff'} style={{ flex: 1 }} /> */}
      <AutocompleteDropdown 
        ref={searchRef}
        initialValue={''}
        dataSet={!cities ? [] : cities}
        onChangeText={handleSearchQuery}
        onSelectItem={handleSelectedItem}
        debounce={500}
        useFilter={false}
        closeOnSubmit
        EmptyResultComponent={
          <View className='w-fit h-auto items-center'>
            <Text className='text-white p-2'>Enter city or postal code</Text>
          </View>
        }
        showClear={false}
        ChevronIconComponent={<ChevronDownIcon size={24} color={'#fff'} />}
        containerStyle={{ 
          width: width*0.6,
        }}
        inputContainerStyle={{
          width: width*0.6, 
          backgroundColor: 'none',
        }}
        textInputProps={{
          style: {
            color: '#fff'
          }
        }}
        suggestionsListContainerStyle={{
          backgroundColor: '#0A4E71',
        }}
        suggestionsListTextStyle={{
          color: '#fff',
        }}
      />
    </View>
  )
}

export default Search