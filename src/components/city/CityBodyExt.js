import React, { useContext } from 'react'
import { View, Text } from 'react-native';
import { MotiView } from 'moti';

import styles from '../../style/city';

import HourlyForecast from './subcomponents/HourlyForecast';
import DailyForecast from './subcomponents/DailyForecast';
import UVIndex from './subcomponents/UVIndex';
import Precipitation from './subcomponents/Precipitation';
import Wind from './subcomponents/Wind';
import Pressure from './subcomponents/Pressure';

import { AnimDelayContext } from '../../context/AnimDelayContext';
import { ThemeContext } from '../../context/ThemeContext';

const CityBodyExt = ({
  id,
  sunrise,
  sunset,
  currentTime,
  dailyUnits,
  hourlyUnits,
  currentWeather,
  dailyForecast,
  hourlyForecast,
}) => {
  const animDelay = useContext(AnimDelayContext);
  const delayInc = 3;
  const theme = useContext(ThemeContext);

  return (
    <View key={id} className='flex-1'>
      <MotiView 
        key={id+'1'}
        className={styles.cityForecastContainer}
        from={{ 
          opacity: 0,
          scale: 0.1
        }}
        animate={{
          opacity: 1,
          scale: 1.0
        }}
        transition={{
          delay: animDelay*delayInc
        }}
      >
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
      </MotiView>
      <MotiView
        key={id+'2'} 
        className={styles.cityForecastContainer}
        from={{ 
          opacity: 0,
          scale: 0.1
        }}
        animate={{
          opacity: 1,
          scale: 1.0
        }}
        transition={{
          delay: animDelay*(delayInc+1)
        }}
      >
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
      </MotiView>
      <MotiView
        key={id+'3'} 
        className='flex-row w-fit h-auto space-x-2'
        from={{ 
          opacity: 0,
          scale: 0.1
        }}
        animate={{
          opacity: 1,
          scale: 1.0
        }}
        transition={{
          delay: animDelay*(delayInc+2)
        }}
      >
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
      </MotiView>
      <MotiView 
        key={id+'4'}
        className='flex-row w-fit h-auto space-x-2'
        from={{
          opacity: 0,
          scale: 0.1
        }}
        animate={{
          opacity: 1,
          scale: 1.0
        }}
        transition={{
          delay: animDelay*(delayInc+3)
        }}
      >
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
      </MotiView>
    </View>
  )
}

export default CityBodyExt