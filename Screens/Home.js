// HomeScreen.js
import React from 'react';
import { View, StyleSheet,} from 'react-native';
import Header from '../components/Header';
import TopTabBar from '../components/TopTabBar';



const HomeScreen = ({ navigation }) => {
  

  return (
    
      <View style={styles.overlay}>
        <Header navigation={navigation} />
        <TopTabBar />
      
      </View>

  );
};

const styles = StyleSheet.create({
  background: {
    flex: 1,
    resizeMode: 'cover', // or 'stretch' to stretch the image
  },
  overlay: {
    flex: 1,
    backgroundColor: '#026bd7', // Optional: Add overlay color with opacity
  },
  container: {
    flex: 1,
  },
});

export default HomeScreen;
