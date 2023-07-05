import React from 'react';
import { View } from 'react-native';
import Lottie from 'lottie-react-native';

const WeatherIcon = ({ icon }) => {
  return (
    <View>
      <Lottie 
        source={icon}
        autoPlay
        loop
        style={{ width: 'auto', height: 'auto' }}
      />
    </View>
  )
}

export default WeatherIcon