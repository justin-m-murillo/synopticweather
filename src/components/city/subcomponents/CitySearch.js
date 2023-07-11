import React, { useState } from 'react'
import { View, Pressable } from 'react-native';
import { MotiView, AnimatePresence } from 'moti';
import Search from '../../search/Search';
import { MagnifyingGlassIcon } from 'react-native-heroicons/outline';

const CitySearch = ({showSearch, setShowSearch}) => {
  //const [ showSearch, setShowSearch ] = useState(false);

  const renderSearch = () => (
    <MotiView
      key={'search'} 
      className='bg-gray-50/[.2] w-auto h-12 rounded-xl'
      from={{    opacity: 0, translateY: -30 }}
      animate={{ opacity: 1, translateY: 0 }}
      exit={{    opacity: 0, translateY: -30 }}
      transition={{ type: 'timing', duration: 300 }}
    >
      <Search />
    </MotiView>
  )

  const renderIcon = () => (
    <MotiView
      key={'icon'} 
      className='bg-gray-50/[.2] w-12 h-12 rounded-full items-center justify-center'
      from={{    opacity: 0, translateY: -30 }}
      animate={{ opacity: 1, translateY: 0 }}
      exit={{    opacity: 0, translateY: -30 }}
      transition={{ type: 'timing', duration: 300 }}
    >
      <Pressable 
        onPress={() => setShowSearch(true)}
        hitSlop={20}
      >
      <MagnifyingGlassIcon 
        size={20} 
        color={'#ffffff'}
        style={{ opacity: 0.6 }}
      />
      </Pressable>
    </MotiView>
  )

  return (
    <View className='w-fit h-auto items-center mb-2'>
      <AnimatePresence exitBeforeEnter>
        {showSearch ? renderSearch() : renderIcon()}
      </AnimatePresence>
      {/* <View className='flex-1 items-end justify-center px-1'>
        <AnimatePresence>
          {showSearch &&
            <MotiView 
              className='bg-gray-50/[.2] rounded-xl'
              from={{    scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{    scale: 0, opacity: 0 }}
              transition={{ type: 'timing', duration: 250 }}
            >
              <Search />
            </MotiView>
          }
        </AnimatePresence>
      </View> */}
      
    </View>
  )
}

export default CitySearch