/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */
/* eslint-disable prettier/prettier */
import React from 'react';
import {StyleSheet, View, StatusBar} from 'react-native';
import { colors } from './src/global/styles';
import SignInScreen from './src/screens/authScreens/SignInScreen';

function App(): JSX.Element {

  return (
    <View style={styles.container}>
      <StatusBar
        barStyle="light-content"
        backgroundColor={colors.statusbar}
      />
      <SignInScreen />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default App;
