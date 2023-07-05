import React from 'react';
import { View, Text } from 'react-native';

import cityCardStyle from '../../style/citycard';

const CityCardHeader = () => {
  return (
    <View className={cityCardStyle.cardHeader}>
      <View className='bg-red-400 flex-1 flex-col p-4'>
        
      </View>
      <View className='justify-center'>
        <Text>Add</Text>
      </View>
    </View>
  )
}

export default CityCardHeader