import { useContext } from 'react';
import { View } from 'react-native';
import LinearGradient from "react-native-linear-gradient";
import { ThemeContext } from '../../context/ThemeContext';

const GradientView = ({ children }) => {
  const { theme } = useContext(ThemeContext);
  // Color arrangement: left to right = top to bottom
  const gradientArray = {
    '0': ['#1190D0', '#0B5983', '#052739'], // before sunrise (0)
    '1': ['#1DA7ED', '#51BCF1', '#C8EAF9'], // after sunrise (1)
    '2': ['#06344B', '#0A4E71', '#0C6997'], // after sunset 
    
    '-1': ['#FFFFFF', '#FFFFFF'], // default
  }

  return (
    <View>
      <LinearGradient
        key={theme.gradient}
        colors={gradientArray[theme.gradient]}
        className='w-screen h-screen'
      >
        {children}
      </LinearGradient>
    </View>
  )
}

export default GradientView;