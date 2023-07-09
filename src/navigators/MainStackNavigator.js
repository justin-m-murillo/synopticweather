import React from 'react';
import { View } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from '../screens/HomeScreen';
import CityScreen from '../screens/CityScreen';
import Search from '../components/search/Search';

const MainStackNavigator = () => {
  const Stack = createNativeStackNavigator();
  return (
    <View className='w-screen h-screen relative'>
      <Stack.Navigator
      initialRouteName='HomeScreen'
      screenOptions={{
        headerShown: false,
        gestureEnabled: false,
      }}
    >
      <Stack.Screen name='HomeScreen'
        children={(props) => <HomeScreen {...props} />} 
      />
      <Stack.Screen name='CityScreen' 
        children={(props) => <CityScreen {...props} />}
      />
    </Stack.Navigator>
    <View className='absolute top-2 left-0'>
      <Search />
    </View>
  </View>
    
  )
}

export default MainStackNavigator