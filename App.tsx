import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Nav from './src/Nav'
import Store from './src/Store'
import { Provider } from 'react-redux';
import Main from './src/Main';
const App = () => {
  return (
    <Provider store={Store}>
      <Main />
    </Provider>

  )
}
export default App