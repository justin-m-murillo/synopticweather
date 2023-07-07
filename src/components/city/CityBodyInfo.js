import React from 'react'
import { View, Text } from 'react-native';

import styles from '../../style/city';

const CityBodyInfo = ({
  name,
  admin1,
  country_code,
  temperature,
  label,
  theme
}) => {
  return (
    <View className={styles.cardBodyInfo}>
          <View
            className='w-full'
          >
            <Text 
              style={{ color: styles.cardTextColor[theme] }}
              className='text-3xl font-semibold'
            >
              {name}
            </Text>
            <Text
              style={{ color: styles.cardTextColor[theme] }} 
              className={`text-xl`}
            >  
              {admin1 === 'undefined' ? null : admin1 + ','} {country_code}
            </Text>
          </View>
          <View className={`w-full`}>
            <Text 
              style={{ color: styles.cardTextColor[theme] }} 
              className={`text-8xl font-semibold`}
            >
              {Math.round(temperature)}°C
            </Text>
            <Text 
              style={{ color: styles.cardTextColor[theme] }} 
              className={`text-2xl leading-6`}
            >
              {label}
            </Text>
          </View>
        </View>
  )
}

export default CityBodyInfo