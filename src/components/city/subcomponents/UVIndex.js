import React, { useRef } from 'react';
import { View, Text } from 'react-native';

import styles from '../../../style/city';

const UVIndex = ({ uvIndex, theme }) => {
  const indexTable = {
    'low': {
      color: 'rgba(63,176,61,.8)',
      label: 'Low',
    },
    'moderate': {
      color: 'rgba(233,241,34,.8)',
      label: 'Moderate',
    },
    'high': {
      color: 'rgba(255,124,0,.8)',
      label: 'High'
    },
    'very-high': {
      color: 'rgba(211,16,16,.8)',
      label: 'Very High'
    },
    'extreme': {
      color: 'rgba(190,31,238,.8)',
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
          backgroundColor: indexTable[index].color
        }}
        className='flex w-28 justify-center items-center rounded-lg pb-0.5'
      >
        <Text 
          className='text-lg text-black/[.8] font-semibold'
        >
          {indexTable[index].label}
        </Text>
      </View>
    </>
  )
}

export default UVIndex