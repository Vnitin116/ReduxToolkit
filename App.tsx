import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Nav from './src/Nav'
import Store from './src/Store'
import { Provider } from 'react-redux';
import { NavigationContainer } from '@react-navigation/native';
const App = () => {
  return (
    <Provider store={Store}>
      <NavigationContainer>
        <Nav />
      </NavigationContainer>
    </Provider>
  )
}
export default App;
