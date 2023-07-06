import { SafeAreaProvider } from "react-native-safe-area-context";
import { AutocompleteDropdownContextProvider } from "react-native-autocomplete-dropdown";
import Home from './src/screens/Home';

function App() {
  return (
    <AutocompleteDropdownContextProvider>
      <SafeAreaProvider>
        <Home />
      </SafeAreaProvider>
    </AutocompleteDropdownContextProvider>
  );
}

export default App;
