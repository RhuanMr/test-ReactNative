import React from 'react';
import { SafeAreaView, StatusBar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native'
import Routes from './src/routes';
import LocationProvider from './src/contexts/location';

const App = () => (
  <NavigationContainer>
    <LocationProvider>
      <SafeAreaView style={{flex: 1}}>
        <StatusBar backgroundColor='#000062' barStyle="light-content" />
        <Routes />
      </SafeAreaView>
    </LocationProvider>
  </NavigationContainer>
);

export default App;