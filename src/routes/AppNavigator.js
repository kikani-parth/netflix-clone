import { Text, View } from 'react-native';
import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Splash from '../screens/Splash/Splash';
import HomeScreen from '../screens/Home/HomeScreen';
import MovieDetailsScreen from '../screens/Details/MovieDetailsScreen';

const Stack = createNativeStackNavigator();

const AppNavigator = () => {
  return (
    <Stack.Navigator
      initialRouteName="Splash"
      screenOptions={{ headerShown: false }}
    >
      <Stack.Screen name="Splash" component={Splash} />
      <Stack.Screen name="HomeScreen" component={HomeScreen} />
      <Stack.Screen name="MovieDetailsScreen" component={MovieDetailsScreen} />
    </Stack.Navigator>
  );
};

export default AppNavigator;
