import React from 'react';
import { View, Text } from 'react-native';

import cityStyle from '../../style/city';

const CityCardHeader = () => {
  return (
    <View className={cityStyle.cardHeader}>
      <View className='bg-red-400 flex-1 flex-col p-4'>
        
      </View>
      <View className='justify-center'>
        <Text>Add</Text>
      </View>
    </View>
  )
}

export default CityCardHeader