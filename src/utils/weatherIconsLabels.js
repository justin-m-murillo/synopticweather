import ClearDay from '../assets/weathericons/clear-day.json';
import ClearNight from '../assets/weathericons/clear-night.json';
import PartlyCloudyDay from '../assets/weathericons/partly-cloudy.json';
import PartlyCloudyNight from '../assets/weathericons/partly-cloudy-night.json'
import CloudyWindy from '../assets/weathericons/cloudy-windy.json';
import FoggyDay from '../assets/weathericons/foggy.json';
import WeatherMist from '../assets/weathericons/weather-mist.json';
import ShowersDay from '../assets/weathericons/shower.json';
import ShowersNight from '../assets/weathericons/shower-night.json'
import SnowDay from '../assets/weathericons/snow-day.json';
import SnowNight from '../assets/weathericons/snow-night.json';
import SnowHeavy from '../assets/weathericons/snow-heavy.json';
import StormShower from '../assets/weathericons/storm-shower.json';



const weatherIconsLabels = {
  '0':  { icon: { day: ClearDay, night: ClearNight }, label: 'Clear skies' },//clear
  '1':  { icon: { day: ClearDay, night: ClearNight }, label: 'Mainly clear' },//mainly clear
  '2':  { icon: { day: PartlyCloudyDay, night: PartlyCloudyNight }, label: 'Partly cloudy' },//partly cloudy
  '3':  { icon: { day: CloudyWindy, night: CloudyWindy }, label: 'Overcast' },//cloudy overcast
  '45': { icon: { day: FoggyDay, night: WeatherMist }, label: 'Fog' },// fog
  '48': { icon: { day: WeatherMist, night: WeatherMist }, label: 'Depositing rime fog' },// fog, depositing rime fog
  '51': { icon: { day: ShowersDay, night: ShowersNight }, label: 'Light drizzle' },// drizzle light
  '53': { icon: { day: ShowersDay, night: ShowersNight }, label: 'Moderate drizzle' },// drizzle mod
  '55': { icon: { day: ShowersDay, night: ShowersNight }, label: 'Dense drizzle' },// drizzle dense
  '56': { icon: { day: ShowersDay, night: ShowersNight }, label: 'Light freezing drizzle' },// freezing drizzle light
  '57': { icon: { day: ShowersDay, night: ShowersNight }, label: 'Dense freezing drizzle' },// 56 dense
  '61': { icon: { day: ShowersDay, night: ShowersNight }, label: 'Slight rain' },// rain slight
  '63': { icon: { day: ShowersDay, night: ShowersNight }, label: 'Moderate rain' },// rain mod
  '65': { icon: { day: ShowersDay, night: ShowersNight }, label: 'Heavy rain' },// rain heavy
  '66': { icon: { day: ShowersDay, night: ShowersNight }, label: 'Light freezing rain' },// freezing rain light
  '67': { icon: { day: ShowersDay, night: ShowersNight }, label: 'Heavy freezing rain' },// freezeing rain heavy
  '71': { icon: { day: SnowDay, night: SnowNight }, label: 'Slight snow fall' },// snow slight
  '73': { icon: { day: SnowDay, night: SnowNight }, label: 'Moderate snow fall' },// snow mod
  '75': { icon: { day: SnowHeavy, night: SnowHeavy }, label: 'Heavy snow fall' },// snow heavy
  '77': { icon: { day: SnowDay, night: SnowNight }, label: 'Snow grains' },// snow grains
  '80': { icon: { day: ShowersDay, night: ShowersNight }, label: 'Slight rain showers' },// showers slight
  '81': { icon: { day: ShowersDay, night: ShowersNight }, label: 'Moderate rain showers' },// showers mod
  '82': { icon: { day: StormShower, night: StormShower }, label: 'Violent rain showers' },// showers violent
  '85': { icon: { day: SnowDay, night: SnowNight }, label: 'Slight snow showers' },// snow showers slight
  '86': { icon: { day: SnowDay, night: SnowNight }, label: 'Heavy snow showers' },// 85 heavy
  '95': { icon: { day: StormShower, night: StormShower }, label: 'Thunderstorm' },// thuderstorm
  '96': { icon: { day: StormShower, night: StormShower }, label: 'Thunderstorm with slight hail' },// thunderstorm with hail slight
  '99': { icon: { day: StormShower, night: StormShower }, label: 'Thunderstorm with heavy hail' },// thunderstorm with hail heavy
};

export default weatherIconsLabels;