import React from 'react'
import { View, Text } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
import getWeatherContentTable from '../../../utils/getWeatherContentTable'

import style from '../../../style/city';
import WeatherIcon from '../WeatherIcon';
import { DateTime } from 'ts-luxon';

const weekdays = {
  '0': 'Mon',
  '1': 'Tue',
  '2': 'Wed',
  '3': 'Thu',
  '4': 'Fri',
  '5': 'Sat',
  '6': 'Sun',
}

const DailyForecast = ({ currentTime, dailyForecast, dailyUnits }) => {
  const dailyRenderList = dailyForecast.slice(0, 10);
  const today = DateTime.fromISO(currentTime);

  const renderDailyItem = ({ item }) => {
    const { icon } = getWeatherContentTable[item.weathercode];
    const date = DateTime.fromISO(item.day);
    const day = date.weekday-1

    return (
      <View className={style.forecastContainer}>
        <Text className={style.forecastItemTitle}>
          {
            today.toISO().slice(0,10) === date.toISO().slice(0,10) 
            ? 'Today' 
            : weekdays[day]
          }
        </Text>
        <View className={style.forecastIconWrapper}>
          <WeatherIcon icon={icon.day} />
        </View>
        <View className='flex-row space-x-0.5'>
          <View className='items-end'>
            <Text className={style.forecastDailyItemLabel}>Hi:</Text>
          </View>
          <View className='items-start'>
            <Text className={style.forecastDailyItemLabel}>
              {Math.round(item.temperature.hi)}{dailyUnits['temperature_2m_max']}
            </Text>
          </View>
        </View>
        <View className='flex-row space-x-0.5'>
          <View className='items-end'>
            <Text className={style.forecastDailyItemLabel}>Lo:</Text>
          </View>
          <View className='items-start'>
            <Text className={style.forecastDailyItemLabel}>
              {Math.round(item.temperature.lo)}{dailyUnits['temperature_2m_min']}
            </Text>
          </View>
        </View>
      </View>
    );
  }

  return (
    <FlatList 
      data={dailyRenderList}
      renderItem={renderDailyItem}
      horizontal
      showsHorizontalScrollIndicator={false}
    />
  )
}

export default DailyForecast