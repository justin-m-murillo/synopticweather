import React from 'react';
import { View, Text } from 'react-native';

import styles from '../../../style/city';

const Pressure = ({ 
  pressure, 
  hourlyUnits, 
  theme 
}) => {
  return (
    <>
      <Text className={styles.forecastItemTitle}>
        Pressure
      </Text>
      <View className='flex-1 w-auto h-auto items-center justify-center'>
        <Text
          style={{ color: styles.cityTextColor[theme] }}
          className='text-2xl font-semibold py-1'
        >
          {Math.floor(pressure)} {hourlyUnits['pressure_msl']}
        </Text>
      </View>
    </>
  )
}

export default Pressure