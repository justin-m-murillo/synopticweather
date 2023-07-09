import React, { useRef } from 'react';
import { View, Text } from 'react-native';

import styles from '../../../style/city';

const UVIndex = ({ uvIndex, theme }) => {
  const indexTable = {
    'low': {
      color: '#3FB03D',
      label: 'Low',
    },
    'moderate': {
      color: '#DFDC25',
      label: 'Moderate',
    },
    'high': {
      color: '#FF8400',
      label: 'High'
    },
    'very-high': {
      color: '#D31010',
      label: 'Very High'
    },
    'extreme': {
      color: '#BE1FEE',
      label: 'Extreme'
    },
  }

  const index = uvIndex > 10 
    ? 'extreme' 
    : uvIndex > 7
    ? 'very-high'
    : uvIndex > 5
    ? 'high'
    : uvIndex > 2
    ? 'moderate'
    : 'low';

  return (
    <>
      <Text className={styles.forecastItemTitle}>
        UV Index
      </Text>
      <Text 
        style={{ color: styles.cityTextColor[theme] }}
        className='text-4xl font-semibold py-1'
      >
        {uvIndex.toString().slice(0,3)}
      </Text>
      <View 
        style={{ 
          backgroundColor: indexTable[index].color,
          opacity: 0.9
        }}
        className='flex w-28 justify-center items-center rounded-lg pb-0.5'
      >
        <Text 
          className='text-lg text-black font-semibold'
        >
          {indexTable[index].label}
        </Text>
      </View>
    </>
  )
}

export default UVIndex