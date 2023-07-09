import 'react-native-reanimated';
import 'react-native-gesture-handler';
import { SafeAreaProvider } from "react-native-safe-area-context";
import { AutocompleteDropdownContextProvider } from "react-native-autocomplete-dropdown";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { NavigationContainer } from "@react-navigation/native";
import HomeScreen from './src/screens/HomeScreen';
import MainStackNavigator from './src/navigators/MainStackNavigator';

function App() {
  return (
    <AutocompleteDropdownContextProvider>
      <SafeAreaProvider>
        <GestureHandlerRootView style={{ flex: 1 }}>
          <NavigationContainer>
            <MainStackNavigator />
          </NavigationContainer>
        </GestureHandlerRootView>
      </SafeAreaProvider>
    </AutocompleteDropdownContextProvider>
  );
}

export default App;
