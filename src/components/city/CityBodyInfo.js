import React, { useContext } from 'react'
import { View, Text } from 'react-native';
import { MotiView } from 'moti';

import styles from '../../style/city';
import { AnimDelayContext } from '../../context/AnimDelayContext';
import { ThemeContext } from '../../context/ThemeContext';

const CityBodyInfo = ({
  id,
  name,
  admin1,
  country_code,
  temperature,
  label,
}) => {
  const animDelay = useContext(AnimDelayContext);
  const theme = useContext(ThemeContext);
  return (
    <View className={styles.cityBodyInfo}>
      <MotiView
        key={id}
        className='flex-1 w-full h-auto'
        from={{
          scale: 0.1,
          opacity: 0,
        }}
        animate={{
          scale: 1,
          opacity: 1,
        }}
      >
        <Text 
          style={{ color: styles.cityTextColor[theme] }}
          className='text-2xl sm:text-3xl font-semibold'
        >
          {name}
        </Text>
        <Text
          style={{ color: styles.cityTextColor[theme] }} 
          className={`text-lg sm:text-xl`}
        >  
          {admin1 === 'undefined' ? null : admin1 + ', '}{country_code}
        </Text>
      </MotiView>
      <MotiView
        key={id+'1'} 
        className={`flex-1 w-auto h-auto py-4`}
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
          delay: animDelay
        }}
      >
        <Text 
          style={{ color: styles.cityTextColor[theme] }} 
          className={`text-7xl sm:text-8xl font-semibold`}
        >
          {Math.round(temperature)}°C
        </Text>
        <Text 
          style={{ color: styles.cityTextColor[theme] }} 
          className={`text-lg sm:text-2xl leading-6`}
        >
          {label}
        </Text>
      </MotiView>
    </View>
  )
}

export default CityBodyInfo