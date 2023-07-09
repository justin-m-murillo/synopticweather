import React, { useRef, useState } from 'react';
import { View } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { MotiView, AnimatePresence } from 'moti';
import { DateTime } from 'ts-luxon';

import cityStyle from '../../style/city';
import CityBody from './CityBody';
import LoadingAnim from '../loading/LoadingAnim';

import useFetch from '../../hooks/useFetch';
import GradientView from '../gradient/GradientView';

const CityCanvas = ({
  id, name, admin1, country_code,
  latitude, longitude, timezone
}) => {
  const gradientIndex = useRef('-1');
  const isDark = useRef(false);
  const isLoading = useRef(true);

  const fetchUrl = `https://api.open-meteo.com/v1/forecast?`+
  `latitude=${latitude}`+
  `&longitude=${longitude}`+
  `8&hourly=temperature_2m,weathercode,pressure_msl,uv_index,is_day`+
  `&daily=weathercode,temperature_2m_max,temperature_2m_min,sunrise,sunset,`+
  `uv_index_max,precipitation_sum,precipitation_hours,windspeed_10m_max`+
  `&current_weather=true`+
  `&timezone=${timezone}`+
  `&forecast_days=14`;

  const weatherFetch = useFetch({url: fetchUrl, fireNow: true});
  
  const hourly = weatherFetch?.data?.hourly;
  const daily = weatherFetch?.data?.daily;
  const currentWeather = weatherFetch?.data?.current_weather;

  const dailyUnits = weatherFetch?.data?.daily_units;
  const hourlyUnits = weatherFetch?.data?.hourly_units;
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
        weathercode: daily.weathercode[i],
        precipitationSum: daily.precipitation_sum[i],
        precipitationHours: daily.precipitation_hours[i],
        uvIndex: daily.uv_index_max[i]
      });
    }
    for (let i=0; i < hourly.time.length; i++) {
      hourlyForecast.push({
        hour: hourly.time[i],
        isDay: hourly.is_day[i],
        temperature: hourly.temperature_2m[i],
        weathercode: hourly.weathercode[i],
        pressure: hourly.pressure_msl[i],
        uvIndex: hourly.uv_index[i]
      })
    }

    isLoading.current = false;
  }

  return (
    <>
      {!isLoading.current &&
        <AnimatePresence>
          <MotiView
            key={isLoading.current} 
            className={cityStyle.cityCanvas}
            from={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <GradientView id={id} gradientIndex={gradientIndex.current}>
              <ScrollView
                contentContainerStyle={{ flexGrow: 1 }}
                className='flex-1 w-auto h-auto flex-col'
              >
                <CityBody 
                  id={id}
                  name={name} 
                  admin1={admin1} 
                  country_code={country_code}
                  currentWeather={currentWeather}
                  sunrise={daily.sunrise}
                  sunset={daily.sunset}
                  dailyUnits={dailyUnits}
                  hourlyUnits={hourlyUnits}
                  dailyForecast={dailyForecast}
                  hourlyForecast={hourlyForecast}
                  isDark={isDark}
                />
              </ScrollView>
            </GradientView>
          </MotiView>
        </AnimatePresence>
      }
    </>
  )
}

export default CityCanvas