import React, { useRef } from 'react'
import { View, Text } from 'react-native';
import { DateTime } from 'ts-luxon';

import CityBodyInfo from './CityBodyInfo';
import WeatherIcon from './WeatherIcon';

import getWeatherContentTable from '../../utils/getWeatherContentTable';

import styles from '../../style/city';
import CityBodyExt from './CityBodyExt';

const CityBody = ({
  name,
  admin1,
  country_code,
  currentWeather,
  sunrise,
  sunset,
  dailyForecast,
  hourlyForecast,
  isDark
}) => {
  const { temperature, weathercode } = currentWeather;
  const { icon, label, theme } = getWeatherContentTable[weathercode];

  // const hourNow = DateTime.now().toISO().slice(11, 16);
  //   const dateNow = currentWeather.time.slice(0, 11);
  //   currentTimeRef.current = dateNow + hourNow;

  return (
    <View className={styles.cardContainer}>
      <View  className={styles.cardBody}>
        <CityBodyInfo  
          name={name}
          admin1={admin1}
          country_code={country_code}
          temperature={temperature}
          label={label}
          theme={theme}
        />
        <View className='w-2/5'>
          <WeatherIcon icon={isDark.current ? icon.night : icon.day} />
        </View>
      </View>
      <CityBodyExt 
        sunrise={sunrise}
        sunset={sunset}
        time={currentWeather.time}
        hourlyForecast={hourlyForecast}
      />
    </View>
  )
}

export default CityBody;