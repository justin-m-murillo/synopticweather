import React, { useRef } from 'react';
import { View, useWindowDimensions } from 'react-native';
import Animated, { 
  SlideInRight, 
  SlideOutLeft, 
  runOnJS, 
  useSharedValue, 
  withSpring 
} from 'react-native-reanimated';
import { DateTime } from 'ts-luxon';

import cityCardStyle from '../../style/citycard';
import CityCardBody from './CityCardBody';
import CityCardFooter from './CityCardFooter';
import CityGradient from './CityGradient';
import LoadingAnim from '../loading/LoadingAnim';

import { WeatherContext } from '../../context/WeatherContext';

import useFetch from '../../hooks/useFetch';

const CityCard = ({ 
  selectedCity: {
    id, name, admin1, country_code,
    latitude, longitude, timezone,
}}) => {

  const currentTimeRef = useRef();
  const isDark = useRef(false);

  const { height } = useWindowDimensions();
  const animHeight = useSharedValue(height/3);
  const isExpanded = useRef(false);

  const handleExpand = () => {
    if (isExpanded.current) return;
    animHeight.value = withSpring(animHeight.value + height/2);
    isExpanded.current = true;
  }

  const fetchUrl = `https://api.open-meteo.com/v1/forecast?`+
  `latitude=${latitude}`+
  `&longitude=${longitude}`+
  `&daily=sunrise,sunset`+
  `&current_weather=true`+
  `&timezone=${timezone}`;

  const weatherFetch = useFetch({url: fetchUrl, fireNow: true});
  
  const sunrise = weatherFetch?.data?.daily?.sunrise;
  const sunset = weatherFetch?.data?.daily?.sunset;
  const currentWeather = weatherFetch?.data?.current_weather;

  if (currentWeather) {
    currentTimeRef.current = currentWeather.time;
    isDark.current = 
      DateTime.fromISO(currentTimeRef.current) < DateTime.fromISO(sunrise[0]) || 
      DateTime.fromISO(currentTimeRef.current) > DateTime.fromISO(sunset[0]);
  }

  return (
    <>
      {!currentWeather ? <LoadingAnim /> :
        <Animated.View 
          key={fetchUrl} 
          className={cityCardStyle.cardContainer}
          entering={SlideInRight
            .springify()
            .mass(0.9)
            .damping(15)
          }
          exiting={SlideOutLeft
            .mass(0.8)
            .withCallback(() => {
              'worklet';
              animHeight.value = height/3
          })}
        >
          <WeatherContext.Provider
            value={
              {
                currentWeather: currentWeather,
                sunrise: sunrise,
                sunset: sunset, 
              }
            }
          >
            <CityGradient 
              currentTimeRef={currentTimeRef.current}
              sunriseTime={sunrise[0]}
              sunsetTime={sunset[0]}
              animHeight={animHeight}
            >
              <CityCardBody 
                name={name} 
                admin1={admin1} 
                country_code={country_code}
                isDark={isDark}
                weatherCode={currentWeather.weathercode}
                temperature={currentWeather.temperature}
              />
              <View className='justify-end'>
                <CityCardFooter handleExpand={handleExpand} />
              </View>
            </CityGradient>
          </WeatherContext.Provider>
        </Animated.View>
      }
    </>
  )
}

export default CityCard