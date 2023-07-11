import React from 'react'
import { View } from 'react-native';
import CityCanvas from '../components/city/CityCanvas'

const CityScreen = ({ route }) => {
  const { 
    id, title, name, admin1, country_code,
    latitude, longitude, timezone
  } = route.params;

  return (
    <View className='flex-1 grow relative'>
      <CityCanvas
        id={id}
        title={title}
        name={name}
        admin1={admin1}
        country_code={country_code}
        latitude={latitude}
        longitude={longitude}
        timezone={timezone}
      />
    </View>
  )
}

export default CityScreen