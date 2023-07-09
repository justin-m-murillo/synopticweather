import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { ChevronDownIcon, EllipsisHorizontalIcon } from 'react-native-heroicons/solid';

import cityStyle from '../../style/city';

const CityCardFooter = ({ toggleExpand }) => {
  return (
    <View className={cityStyle.cityFooter}>
      <TouchableOpacity
        className='w-full items-center justify-center'
        onPress={toggleExpand}
      >
        <EllipsisHorizontalIcon size={48} color={'#f1f5f9'} />
      </TouchableOpacity>
    </View>
  )
}

export default CityCardFooter