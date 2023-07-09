import React from 'react';
import { View, Text } from 'react-native';

import styles from '../../../style/city';

const Precipitation = ({  
  precipitationSum,
  precipitationHours,
  dailyUnits,
  theme,
}) => {
  return (
    <>
      <Text className={styles.forecastItemTitle}>
        Precipitation
      </Text>
      <Text
        style={{ color: styles.cityTextColor[theme] }}
        className='text-2xl font-semibold py-1'
      >
        {precipitationSum} {dailyUnits['precipitation_sum']}
      </Text>
      <Text
        style={{ color: styles.cityTextColor[theme] }}
        className='text-base py-1'
      >
        for <Text className='font-semibold'>{precipitationHours} hours</Text> of the day
      </Text>
    </>
  )
}

export default Precipitation