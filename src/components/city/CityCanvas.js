import React, { useRef } from 'react';
import { View } from 'react-native';
import Animated, { 
  SlideInRight, 
  SlideOutLeft,
  Easing,
} from 'react-native-reanimated';
import { DateTime } from 'ts-luxon';

import cityStyle from '../../style/city';
import CityBody from './CityBody';
import LoadingAnim from '../loading/LoadingAnim';

import useFetch from '../../hooks/useFetch';
import GradientView from '../gradient/GradientView';

const CityCanvas = ({ 
  selectedCity: {
    id, name, admin1, country_code,
    latitude, longitude, timezone,
  } 
}) => {
  const gradientIndex = useRef('-1');
  const isDark = useRef(false);

  const fetchUrl = `https://api.open-meteo.com/v1/forecast?`+
  `latitude=${latitude}`+
  `&longitude=${longitude}`+
  `8&hourly=temperature_2m,weathercode,pressure_msl`+
  `&daily=weathercode,temperature_2m_max,temperature_2m_min,sunrise,sunset,precipitation_sum`+
  `&current_weather=true`+
  `&timezone=${timezone}`;

  const weatherFetch = useFetch({url: fetchUrl, fireNow: true});
  
  const hourly = weatherFetch?.data?.hourly;
  const daily = weatherFetch?.data?.daily;
  const currentWeather = weatherFetch?.data?.current_weather;

  const dailyForecast = [];
  const hourlyForecast = [];
  if (currentWeather) {
    const curr = DateTime.fromISO(currentWeather.time);
    const sunr = DateTime.fromISO(daily.sunrise[0]);
    const suns = DateTime.fromISO(daily.sunset[0]);

    gradientIndex.current = curr < sunr ? '0' : curr > suns ? '2' : '1';

    isDark.current = 
      DateTime.fromISO(curr) < DateTime.fromISO(daily.sunrise[0]) ||
      DateTime.fromISO(curr) > DateTime.fromISO(daily.sunset[0]);

    for (let i=0; i < daily.time.length; i++) {
      dailyForecast.push({
        day: daily.time[i],
        sunrise: daily.sunrise[i],
        sunset: daily.sunset[i],
        temperature: {
          hi: daily.temperature_2m_max[i],
          lo: daily.temperature_2m_min[i]
        },
      });
    }

    for (let i=0; i < hourly.time.length; i++) {
      hourlyForecast.push({
        hour: hourly.time[i],
        temperature: hourly.temperature_2m[i],
        weathercode: hourly.weathercode[i],
        pressure: hourly.pressure_msl[i]
      })
    }
  }

  return (
    <>
      {!currentWeather ? <LoadingAnim /> :
        <View className={cityStyle.cardCanvas}>
          
          <Animated.View
            key={id}
            entering={SlideInRight.easing(Easing.ease)}
            exiting={SlideOutLeft.easing(Easing.ease)}
          >
            <GradientView gradientIndex={gradientIndex.current}>
              <CityBody 
                name={name} 
                admin1={admin1} 
                country_code={country_code}
                currentWeather={currentWeather}
                sunrise={daily.sunrise}
                sunset={daily.sunset}
                dailyForecast={dailyForecast}
                hourlyForecast={hourlyForecast}
                isDark={isDark}
              />
            </GradientView>
          </Animated.View>
        </View>
      }
    </>
  )
}

export default CityCanvas