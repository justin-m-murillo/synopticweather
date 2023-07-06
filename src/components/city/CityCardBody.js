import React, { useRef } from 'react'
import { View, Text } from 'react-native';
import Animated from 'react-native-reanimated';

import WeatherIcon from './WeatherIcon';

import getWeatherContentTable from '../../utils/getWeatherContentTable';

import styles from '../../style/citycard';

const CityCardBody = ({
  name,
  admin1,
  country_code,
  isDark,
  weatherCode,
  temperature,
  animHeight
}) => {
  const { icon, label, theme } = getWeatherContentTable[weatherCode];

  return (
    <View  className={styles.cardBody}>
      <View className={styles.cardBodyInfo}>
        <View
          className='w-full pl-2'
        >
          <Text 
            style={{ color: styles.cardTextColor[theme] }}
            className='text-3xl font-semibold'
          >
            {name}
          </Text>
          <Text
            style={{ color: styles.cardTextColor[theme] }} 
            className={`text-xl pl-1`}
          >  
            {admin1 === 'undefined' ? null : admin1 + ','} {country_code}
          </Text>
        </View>
        <View className={`w-full mt-6 `}>
          <Text 
            style={{ color: styles.cardTextColor[theme] }} 
            className={`text-8xl font-semibold`}
          >
            {Math.round(temperature)}°C
          </Text>
          <Text 
            style={{ color: styles.cardTextColor[theme] }} 
            className={`text-2xl pl-2 leading-6`}
          >
            {label}
          </Text>
        </View>
      </View>
      <View className='w-2/5'>
        <WeatherIcon icon={isDark.current ? icon.night : icon.day} />
      </View>
    </View>
  )
}

export default CityCardBody;