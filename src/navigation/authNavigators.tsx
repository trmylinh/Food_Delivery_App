/* eslint-disable prettier/prettier */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { View, Text } from 'react-native';
import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SignInWelcomeScreen from '../screens/authScreens/SignInWelcomeScreen';
import SignInScreen from '../screens/authScreens/SignInScreen';

const Stack = createNativeStackNavigator();
export default function AuthStack() {
  return (
    <Stack.Navigator>
        <Stack.Screen
            name="SignInWelcomeScreen"
            component={SignInWelcomeScreen}
            options={{
                headerShown: false,
            }}
        />
        <Stack.Screen
            name="SignInScreen"
            component={SignInScreen}
            options={{
                headerShown: false,
            }}
        />
    </Stack.Navigator>
  );
}
