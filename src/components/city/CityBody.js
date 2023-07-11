import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { MotiView } from 'moti';

import { AnimDelayContext } from '../../context/AnimDelayContext';
import { ThemeContext } from '../../context/ThemeContext';

import CityBodyInfo from './CityBodyInfo';
import CityBodyExt from './CityBodyExt';
import WeatherIcon from './WeatherIcon';

import getWeatherContentTable from '../../utils/getWeatherContentTable';

import styles from '../../style/city';
import { ArrowSmallLeftIcon } from 'react-native-heroicons/solid';

const CityBody = ({
  id,
  name,
  admin1,
  country_code,
  currentWeather,
  sunrise,
  sunset,
  dailyUnits,
  hourlyUnits,
  dailyForecast,
  hourlyForecast,
}) => {
  const { temperature, weathercode } = currentWeather;
  const { icon, label, theme } = getWeatherContentTable[weathercode];
  const animDelay = 100;
  const navigation = useNavigation();

  return (
    <ThemeContext.Provider value={theme}>
      <AnimDelayContext.Provider value={animDelay}>
        <View className={styles.cityContainer}>
          <TouchableOpacity
            onPress={() => {
              navigation.goBack();
            }}
            hitSlop={20}
          >
            <View className='flex-row mb-2'>
              <ArrowSmallLeftIcon size={20} color={styles.cityTextColor[theme]} />
              <Text style={{ color: styles.cityTextColor[theme] }}>Go back</Text>
            </View>
          </TouchableOpacity>
          <View className={styles.cityBody}>
            <CityBodyInfo
              key={id}
              id={id}
              name={name}
              admin1={admin1}
              country_code={country_code}
              temperature={temperature}
              label={label}
            />
            <MotiView
              key={id+'1'}
              className='w-2/5 h-auto'
              from={{
                scale: 0.1,
                opacity: 0,
              }}
              animate={{
                scale: 1,
                opacity: 1,
              }}
              exit={{ opacity: 0 }}
              transition={{
                delay: animDelay*2
              }}
            >
              <WeatherIcon icon={hourlyForecast[0].isDay ? icon.day : icon.night} />
            </MotiView>
          </View>
          <View className='flex-1 flex-col h-screen'>
            <CityBodyExt
              key={id+'2'} 
              id={id}
              sunrise={sunrise}
              sunset={sunset}
              currentTime={currentWeather.time}
              dailyUnits={dailyUnits}
              hourlyUnits={hourlyUnits}
              currentWeather={currentWeather}
              dailyForecast={dailyForecast}
              hourlyForecast={hourlyForecast}
            />
          </View>
        </View>
      </AnimDelayContext.Provider>
    </ThemeContext.Provider>
  )
}

export default CityBody;