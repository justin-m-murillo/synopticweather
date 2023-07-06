import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { ChevronDownIcon, EllipsisHorizontalIcon } from 'react-native-heroicons/solid';

import cityCardStyle from '../../style/citycard';

const CityCardFooter = ({ handleExpand }) => {
  return (
    <View className={cityCardStyle.cardFooter}>
      <TouchableOpacity
        className='w-full items-center justify-center'
        onPress={handleExpand}
      >
        <EllipsisHorizontalIcon size={48} color={'#f1f5f9'} />
      </TouchableOpacity>
    </View>
  )
}

export default CityCardFooter