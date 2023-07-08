import React from 'react';
import { View, Text } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
import { DateTime } from 'ts-luxon';

import getWeatherContentTable from '../../../utils/getWeatherContentTable';
import WeatherIcon from '../WeatherIcon';

const HourlyForecast = ({
  sunrise,
  sunset,
  time,
  hourlyForecast
}) => {

  const hourlyRenderList = hourlyForecast
    .filter((item) => DateTime.fromISO(time) < DateTime.fromISO(item.hour));

  const renderHourlyItem = ({ item }) => {
    const { icon } = getWeatherContentTable[item.weathercode];
    const sunr = sunrise.find(elem => elem.slice(0, 10) === item.hour.slice(0, 10));
    const suns = sunset.find(elem => elem.slice(0, 10) === item.hour.slice(0, 10));
    
    const thisHour = DateTime.fromISO(item.hour);
    const sunrHour = DateTime.fromISO(sunr);
    const sunsHour = DateTime.fromISO(suns);

    const isDark = thisHour < sunrHour || thisHour > sunsHour;
    
    return (
      <View className='flex flex-col w-20 h-auto items-center px-2'>
        <Text className='text-xl text-normal'>{item.hour.slice(11)}</Text>
        <View className='w-16 h-auto py-2'>
          <WeatherIcon icon={isDark ? icon.night : icon.day } />
        </View>
        <Text className='text-2xl text-normal'>{Math.round(item.temperature)}°C</Text>
      </View>
    )
  }
  
  return (
    <FlatList 
      data={hourlyRenderList.slice(0, 12)}
      renderItem={renderHourlyItem}
      horizontal
      showsHorizontalScrollIndicator={false}
    />
  )
}

export default HourlyForecast