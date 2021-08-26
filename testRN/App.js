import React from 'react';
import { SafeAreaView, StatusBar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native'
import Routes from './src/routes';

const App = () => (
  <NavigationContainer>
    <SafeAreaView style={{flex: 1}}>
        <StatusBar backgroundColor='#000062' barStyle="light-content" />
        <Routes />
    </SafeAreaView>
  </NavigationContainer>
);

export default App;