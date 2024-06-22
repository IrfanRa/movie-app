// CategoriesScreen.js
import React from 'react';
import { View, Text, StyleSheet, ImageBackground } from 'react-native';
import Title from '../components/Title';

const CategoriesScreen = () => {
  return (
    <View style={styles.container}>
    <ImageBackground
      source={require("../assets/images/background.png")} // Replace with your background image path
      style={styles.background}>

       <Title/>
      
    </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  background: {
    flex: 1,
    resizeMode: 'cover', 
    width: '100%'// or 'stretch' to stretch the image
  },
});

export default CategoriesScreen;