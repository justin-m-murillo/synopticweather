import React from 'react';
import { View, Text } from 'react-native';
import { MotiView } from 'moti';
import Search from '../components/search/Search';
import Lottie from 'lottie-react-native';

import LandingBG from '../assets/misc/landing-background.json';
import LandingIcon from '../assets/misc/landing-icon.json'

const HomeScreen = () => {
  return (
    <MotiView 
      className='w-screen h-screen items-center relative'
      from={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <Lottie 
        source={LandingBG}
        style={{ width: '100%', height: '100%' }}
        autoPlay
        loop
      />
      <View className='w-auto h-auto items-center absolute'>
        <MotiView
          from={{ opacity: 0, translateY: -20 }}
          animate={{ opacity: 1, translateY: 0 }}
          transition={{ delay: 200 }}
        >
          <Lottie 
            source={LandingIcon}
            style={{
              width: '75%'
            }}
            autoPlay
            loop
            className='mt-4'
          />
        </MotiView>
        <MotiView 
          className='w-auto h-auto items-center bg-gray-50/[.2] rounded-xl mt-2'
          from={{ opacity: 0, translateX: 20 }}
          animate={{ opacity: 1, translateX: 0 }}
          transition={{ delay: 300 }}
        >
          <Search />
        </MotiView>
        <MotiView 
          className='w-auto h-auto items-center mt-10'
          from={{ opacity: 0, translateX: -20 }}
          animate={{ opacity: 1, translateX: 0 }}
          transition={{ delay: 400 }}
        >
          <Text className='text-lg text-white font-semibold'>Weather reports around the world!</Text>
          <Text className='text-xs text-gray-200'>Powered by Open-Meteo.com</Text>
        </MotiView>
      </View>
    </MotiView>
  )
}

export default HomeScreen