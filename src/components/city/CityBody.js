import React, { useRef } from 'react'
import { View, Text } from 'react-native';
import { MotiView } from 'moti';
import { DateTime } from 'ts-luxon';

import CityBodyInfo from './CityBodyInfo';
import WeatherIcon from './WeatherIcon';

import getWeatherContentTable from '../../utils/getWeatherContentTable';

import styles from '../../style/city';
import CityBodyExt from './CityBodyExt';

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
  const hourlyRenderList = hourlyForecast
    .filter((item) => DateTime.fromISO(currentWeather.time) < DateTime.fromISO(item.hour).plus({ hours: 1 }));
  
  return (
    <View className={styles.cityContainer}>
      <View  className={styles.cityBody}>
        <CityBodyInfo
          id={id}  
          name={name}
          admin1={admin1}
          country_code={country_code}
          temperature={temperature}
          label={label}
          theme={theme}
          animDelay={animDelay}
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
          <WeatherIcon icon={hourlyRenderList[0].isDay ? icon.day : icon.night} />
        </MotiView>
      </View>
      <View className='flex-1 flex-col h-screen'>
        <CityBodyExt 
          sunrise={sunrise}
          sunset={sunset}
          currentTime={currentWeather.time}
          dailyUnits={dailyUnits}
          hourlyUnits={hourlyUnits}
          currentWeather={currentWeather}
          dailyForecast={dailyForecast}
          hourlyForecast={hourlyRenderList}
          theme={theme}
        />
      </View>
    </View>
  )
}

export default CityBody;