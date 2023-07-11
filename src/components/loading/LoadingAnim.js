import React from 'react';
import { View, useWindowDimensions } from 'react-native';
import Lottie from 'lottie-react-native';
import LoadingIcon from '../../assets/weathericons/loading.json';

const LoadingAnim = () => {
  const { width, height } = useWindowDimensions();

  return (
    <View className='w-auto h-1/2 items-center'>
      <Lottie 
        source={LoadingIcon}
        autoPlay
        loop
        resizeMode='contain'
      />
    </View>
  )
}

export default LoadingAnim;