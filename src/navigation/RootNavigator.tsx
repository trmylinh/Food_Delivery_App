/* eslint-disable prettier/prettier */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { View, Text } from 'react-native';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import AuthStack from './authNavigators';

export default function RootNavigator() {
  return (
    <NavigationContainer>
        <AuthStack />
    </NavigationContainer>
  );
}
