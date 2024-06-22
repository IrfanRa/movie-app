// TopTabBar.js
import React from 'react';
// import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import TVShowsScreen from '../Screens/TVShowsScreen'; 
import MoviesScreen from '../Screens/MovieScreen';
import CategoriesScreen from '../Screens/CategoriesScreen';



const Tab = createMaterialTopTabNavigator();

const TopTabBar = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="TV Shows" component={TVShowsScreen} />
      <Tab.Screen name="Movies" component={MoviesScreen} />
      <Tab.Screen name="Categories" component={CategoriesScreen}  />
    </Tab.Navigator>
  );
};

export default TopTabBar;
