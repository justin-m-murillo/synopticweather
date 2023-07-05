import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { ChevronDownIcon, EllipsisHorizontalIcon } from 'react-native-heroicons/solid';

import cityCardStyle from '../../style/citycard';

const CityCardFooter = () => {
  return (
    <View className={cityCardStyle.cardFooter}>
      <TouchableOpacity
        className='w-full items-center justify-center'
      >
        <EllipsisHorizontalIcon size={48} color={'#6b7280'} />
      </TouchableOpacity>
    </View>
  )
}

export default CityCardFooter