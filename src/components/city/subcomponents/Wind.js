import React, { useRef } from 'react';
import { View, Text } from 'react-native';

import styles from '../../../style/city';

const Wind = ({ 
  currentWeather,
  dailyUnits,
  theme
}) => {
  const windDirection = currentWeather['winddirection'];
  const windDirString = useRef('');
 
  if (windDirection === 0 || windDirection === 360) {
    windDirString.current = 'N';
  } else if (windDirection < 89) {
    windDirString.current = 'NE';
  } else if (windDirection === 90) {
    windDirString.current = 'E';
  } else if (windDirection < 179) {
    windDirString.current = 'SE';
  } else if (windDirection === 180) {
    windDirString.current = 'S';
  } else if (windDirection < 269) {
    windDirString.current = 'SW';
  } else if (windDirection === 270) {
    windDirString.current = 'W';
  } else {
    windDirString.current = 'NW';
  }

  return (
    <>
      <Text className={styles.forecastItemTitle}>
        Wind
      </Text>
      <View className='flex-1 w-auto h-auto items-center justify-center'>
        <Text
          style={{ color: styles.cityTextColor[theme] }}
          className='text-2xl font-semibold py-1'
        >
          {currentWeather['windspeed']+' '}
          <Text 
            style={{ color: styles.cityTextColor[theme] }}
            className='text-2xl'
          >
            {dailyUnits['windspeed_10m_max']}
          </Text>
        </Text>
        <Text 
          style={{ color: styles.cityTextColor[theme] }}
          className='text-2xl font-semibold py-1'
        >
          {currentWeather['winddirection']}°{windDirString.current}
        </Text>
      </View>
    </>
  )
}

export default Wind