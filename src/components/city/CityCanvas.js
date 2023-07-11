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

  const fetchUrl = `https://api.open-meteo.com/v1/forecast?`+
  `latitude=${latitude}`+
  `&longitude=${longitude}`+
  `8&hourly=temperature_2m,weathercode,pressure_msl,uv_index,is_day`+
  `&daily=weathercode,temperature_2m_max,temperature_2m_min,sunrise,sunset,`+
  `uv_index_max,precipitation_sum,precipitation_hours,windspeed_10m_max`+
  `&current_weather=true`+
  `&timezone=${timezone}`+
  `&forecast_days=14`;

  const { data, isLoading } = useFetch({url: fetchUrl, fireNow: true});
  
  // const isLoading = weatherFetch.isLoading;
  const hourly = data?.hourly;
  const daily = data?.daily;
  const currentWeather = data?.current_weather;

  const dailyUnits = data?.daily_units;
  const hourlyUnits = data?.hourly_units;
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

    for (let i=0; i < 10; i++) {
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
    for (let i=0; hourlyForecast.length < 12; i++) {
      if (curr > DateTime.fromISO(hourly.time[i]))
        continue;
      hourlyForecast.push({
        hour: hourly.time[i],
        isDay: hourly.is_day[i],
        temperature: hourly.temperature_2m[i],
        weathercode: hourly.weathercode[i],
        pressure: hourly.pressure_msl[i],
        uvIndex: hourly.uv_index[i]
      });
    }
  }

  return (
    <>
    {isLoading || !currentWeather ? <LoadingAnim /> :
      <AnimatePresence exitBeforeEnter>
        <MotiView
          key={id} 
          className={cityStyle.cityCanvas}
          from={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <GradientView key={id} id={id} gradientIndex={gradientIndex.current}>
            <ScrollView
              key={id}
              contentContainerStyle={{ flexGrow: 1 }}
              className='flex-1 w-auto h-auto flex-col'
            >
              <CityBody
                key={id} 
                id={id}
                name={name} 
                admin1={admin1} 
                country_code={country_code}
                currentWeather={currentWeather}
                sunrise={daily?.sunrise}
                sunset={daily?.sunset}
                dailyUnits={dailyUnits}
                hourlyUnits={hourlyUnits}
                dailyForecast={dailyForecast}
                hourlyForecast={hourlyForecast}
                isDark={isDark}
              />
            </ScrollView>
          </GradientView>
        </MotiView>
      </AnimatePresence>}
    </>
  )
}

export default CityCanvas