import React, { useState } from 'react';
import { View, useWindowDimensions } from 'react-native';
import Search from '../components/search/Search';
import Lottie from 'lottie-react-native';

import LandingBG from '../assets/misc/landing-background.json';

const HomeScreen = () => {
  const { width, height } = useWindowDimensions();
  
  return (
    <View className='w-screen h-screen'>
      <Lottie 
        source={LandingBG}
        style={{ width: '100%', height: '100%' }}
      />
    </View>
  )
}

export default HomeScreen