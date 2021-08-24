import React from 'react';
import { SafeAreaView, StatusBar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native'
import Routes from './src/routes';

export default function App() {
  return (
    <NavigationContainer>
      <SafeAreaView>
          <StatusBar backgroundColor='#000062' barStyle="light-content" />
          <Routes />
      </SafeAreaView>
   </NavigationContainer>
  );
}
