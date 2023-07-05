import React, { useContext } from 'react'
import { View, Text } from 'react-native';
import { DateTime } from 'ts-luxon';
import { WeatherContext } from '../../context/WeatherContext';

import WeatherIcon from './WeatherIcon';

import weatherIconsLabels from '../../utils/weatherIconsLabels';

import cityCardStyle from '../../style/citycard';

const CityCardBody = ({
  name,
  admin1,
  country_code,
}) => {
  const { currentWeather, sunrise, sunset } = useContext(WeatherContext);
  const { temperature, weathercode, time } = currentWeather;
  const { icon, label } = weatherIconsLabels[weathercode];

  const dark = 
    DateTime.fromISO(time) < DateTime.fromISO(sunrise[0]) || 
    DateTime.fromISO(time) > DateTime.fromISO(sunset[0]);
  
  const theme = dark ? 'night' : 'day';

  return (
    <View className={cityCardStyle.cardBody}>
      <View className={cityCardStyle.cardBodyInfo}>
        <View className='w-full pl-2'>
          <Text className={`text-3xl font-semibold text-${theme}`}>{name}</Text>
          <Text className={`text-xl text-${theme}`}> {admin1}, {country_code}</Text>
        </View>
        <View className='w-full mt-6'>
          <Text className={`text-8xl font-semibold text-${theme}`}>{Math.round(temperature)}°C</Text>
          <Text className={`text-2xl text-${theme} pl-2 leading-6`}>{label}</Text>
        </View>
      </View>
      <View className='w-2/5'>
        <WeatherIcon icon={dark ? icon.night : icon.day} />
      </View>
    </View>
  )
}

export default CityCardBody;