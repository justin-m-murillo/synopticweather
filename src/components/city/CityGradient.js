import { useRef } from 'react';
import { View } from 'react-native';
import Animated from 'react-native-reanimated';
import LinearGradient from "react-native-linear-gradient";
import { DateTime } from 'ts-luxon';

const CityGradient = ({ 
  currentTimeRef,
  sunriseTime,
  sunsetTime,
  animHeight,
  children 
}) => {

  // Color arrangement: left to right = top to bottom
  const gradientArray = [
    ['#1190D0', '#0B5983', '#052739'], // before sunrise (0)
    ['#1DA7ED', '#51BCF1', '#C8EAF9'], // after sunrise (1)
    ['#06344B', '#0A4E71', '#0C6997'], // after sunset 
  ]

  const curr = DateTime.fromISO(currentTimeRef);
  const sunr = DateTime.fromISO(sunriseTime);
  const suns = DateTime.fromISO(sunsetTime);

  const gradient = 
    curr < sunr ? 0
    : curr > suns ? 2
    : 1

  return (
    <View>
      <LinearGradient
        colors={gradientArray[gradient]}
        className='rounded-3xl'
      >
        <Animated.View style={{ height: animHeight, backgroundColor: 'gray' }}>
          {children}
        </Animated.View>
      </LinearGradient>
    </View>
  )
}

export default CityGradient;