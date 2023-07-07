import { SafeAreaProvider } from "react-native-safe-area-context";
import { AutocompleteDropdownContextProvider } from "react-native-autocomplete-dropdown";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import Home from './src/screens/Home';

function App() {
  return (
    <AutocompleteDropdownContextProvider>
      <SafeAreaProvider>
        <GestureHandlerRootView style={{ flex: 1 }}>
          <Home />
        </GestureHandlerRootView>
      </SafeAreaProvider>
    </AutocompleteDropdownContextProvider>
  );
}

export default App;
