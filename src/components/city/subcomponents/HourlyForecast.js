import React from 'react';
import { View, Text } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
import { DateTime } from 'ts-luxon';

import getWeatherContentTable from '../../../utils/getWeatherContentTable';
import WeatherIcon from '../WeatherIcon';

import style from '../../../style/city';

const HourlyForecast = ({
  currentTime,
  hourlyForecast,
  hourlyUnits
}) => {
  const renderHourlyItem = ({ item }) => {
    //console.log(hourlyForecast)
    const { icon } = getWeatherContentTable[item.weathercode];
    return (
      <View className={style.forecastContainer}>
        <Text className={style.forecastItemTitle}>
          {item.hour.slice(11) === currentTime.slice(11,16) ? 'Now' : item.hour.slice(11)}
        </Text>
        <View className={style.forecastIconWrapper}>
          <WeatherIcon icon={item.isDay ? icon.day : icon.night} />
        </View>
        <Text className={style.forecastHourlyItemLabel}>
          {Math.round(item.temperature)}{hourlyUnits['temperature_2m']}
        </Text>
      </View>
    )
  }
  
  return (
    <FlatList 
      data={hourlyForecast}
      renderItem={renderHourlyItem}
      horizontal
      showsHorizontalScrollIndicator={false}
    />
  )
}

export default HourlyForecast