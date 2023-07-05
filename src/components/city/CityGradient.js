import { useContext } from 'react';
import { WeatherContext } from '../../context/WeatherContext';
import LinearGradient from "react-native-linear-gradient";
import { DateTime } from 'ts-luxon';

const CityGradient = ({ children }) => {

  // Color arrangement: left to right = top to bottom
  const gradientArray = [
    ['#1190D0', '#0B5983', '#052739'], // before sunrise (0)
    ['#1DA7ED', '#51BCF1', '#C8EAF9'], // after sunrise (1)
    ['#0E76AA', '#0B5C84', '#06344B']  // after sunset 
  ]

  const { currentWeather, sunrise, sunset } = useContext(WeatherContext);

  const curr = DateTime.fromISO(currentWeather.time);
  const sunr = DateTime.fromISO(sunrise[0]);
  const suns = DateTime.fromISO(sunset[0]);

  const gradient = 
    curr < sunr ? 0
    : curr > suns ? 2
    : 1

  return (
    <LinearGradient
      colors={gradientArray[gradient]}
      className='rounded-3xl'
    >
      {children}
    </LinearGradient>
  )
}

export default CityGradient;