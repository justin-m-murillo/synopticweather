import { MotiView } from 'moti';
import LinearGradient from "react-native-linear-gradient";
import { ThemeContext } from '../../context/ThemeContext';

const GradientView = ({ id, gradientIndex, children }) => {
  // Color arrangement: left to right = top to bottom
  const gradientArray = {
    '0': ['#1190D0', '#0B5983', '#052739'], // before sunrise (0)
    '1': ['#1DA7ED', '#51BCF1', '#51BCF1', '#51BCF1', '#C8EAF9'], // after sunrise (1)
    '2': ['#06344B', '#0A4E71', '#0C6997'], // after sunset 
    
    '-1': ['#FFFFFF', '#FFFFFF'], // default
  }

  return (
    <MotiView
      key={id}
      from={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <LinearGradient
        colors={gradientArray[gradientIndex]}
        className='w-screen h-screen'
      >
        {children}
      </LinearGradient>
    </MotiView>
  )
}

export default GradientView;