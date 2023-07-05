import { useState } from 'react';
import { View } from 'react-native';
import { SafeAreaProvider } from "react-native-safe-area-context";
import { AutocompleteDropdownContextProvider } from "react-native-autocomplete-dropdown";
import Home from './src/components/Home';

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
