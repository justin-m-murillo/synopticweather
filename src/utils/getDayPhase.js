import { DateTime } from 'ts-luxon';

const getDayPhase = ({ currentTime, sunriseTime, sunsetTime }) => {
  const curr = DateTime.fromISO(currentTime);
  const sunr = DateTime.fromISO(sunriseTime);
  const suns = DateTime.fromISO(sunsetTime);

  console.log('Curr', curr);
  console.log('Sunr', sunr);
  console.log('Suns', suns);

  return curr < sunr ? 0 : curr > suns ? 2 : 1;
}

export default getDayPhase;