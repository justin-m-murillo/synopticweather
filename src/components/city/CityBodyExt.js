import React from 'react'
import { View, Text, ScrollView } from 'react-native';
//import { ScrollView } from 'react-native-gesture-handler';
import HourlyForecast from './subcomponents/HourlyForecast';

import styles from '../../style/city';
import DailyForecast from './subcomponents/DailyForecast';
import UVIndex from './subcomponents/UVIndex';
import Precipitation from './subcomponents/Precipitation';
import Wind from './subcomponents/Wind';
import Pressure from './subcomponents/Pressure';

const CityBodyExt = ({
  sunrise,
  sunset,
  currentTime,
  dailyUnits,
  hourlyUnits,
  currentWeather,
  dailyForecast,
  hourlyForecast,
  theme
}) => {
  return (
    <View className='flex-1'>
      <View className={styles.cityForecastContainer}>
        <Text 
          style={{ color: styles.cityTextColor[theme] }}
          className={styles.cityBodyExtTitle}
        >
            12-Hour Forecast
        </Text>
        <HourlyForecast
          sunrise={sunrise}
          sunset={sunset}
          currentTime={currentTime}
          hourlyForecast={hourlyForecast}
          hourlyUnits={hourlyUnits}
        />
      </View>
      <View className={styles.cityForecastContainer}>
        <Text 
          style={{ color: styles.cityTextColor[theme] }}
          className={styles.cityBodyExtTitle}
        >
            10-Day Forecast
        </Text>
        <DailyForecast
          currentTime={currentTime}
          dailyForecast={dailyForecast}
          dailyUnits={dailyUnits}
        />
      </View>
      <View className='flex-row w-fit h-auto space-x-2'>
        <View className={styles.cityGridItem}>
          <UVIndex 
            uvIndex={hourlyForecast[0].uvIndex}
            theme={theme}
          />
        </View>
        <View className={styles.cityGridItem}>
          <Precipitation
            precipitationSum={dailyForecast[0].precipitationSum}
            precipitationHours={dailyForecast[0].precipitationHours}
            dailyUnits={dailyUnits}
            theme={theme}
          />
        </View>
      </View>
      <View className='flex-row w-fit h-auto space-x-2'>
        <View className={styles.cityGridItem}>
          <Wind 
            currentWeather={currentWeather}
            dailyUnits={dailyUnits}
            theme={theme}
          />
        </View>
        <View className={styles.cityGridItem}>
          <Pressure
            pressure={hourlyForecast[0].pressure}
            hourlyUnits={hourlyUnits}
            theme={theme}
          />
        </View>
      </View>
    </View>
  )
}

export default CityBodyExt