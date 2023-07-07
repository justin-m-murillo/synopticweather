import React from 'react'
import { View, Text } from 'react-native';
import HourlyForecast from './subcomponents/HourlyForecast';

const weekdays = {
  '0': 'Mon',
  '1': 'Tue',
  '2': 'Wed',
  '3': 'Thu',
  '4': 'Fri',
  '5': 'Sat',
  '6': 'Sun',
}

const CityBodyExt = ({
  sunrise,
  sunset,
  time,
  hourlyForecast
}) => {

  return (
    <View className='flex-col'>
      <View className='items-center'>
        <Text className='text-normal text-2xl font-semibold my-4'>12-Hour Forecast</Text>
      </View>
      <View className='w-screen'>
        <HourlyForecast
          sunrise={sunrise}
          sunset={sunset}
          time={time}
          hourlyForecast={hourlyForecast}
        />
      </View>
    </View>
  )
}

export default CityBodyExt