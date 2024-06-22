// SplashScreen.js
import React, { useEffect } from 'react';
import { View, StyleSheet, Image, ActivityIndicator, StatusBar } from 'react-native';

const Splash = ({ navigation }) => {
  useEffect(() => {
    setTimeout(() => {
      navigation.replace('Home'); // Navigate to your desired screen after the splash screen
    }, 5000); // Duration for the splash screen (5 seconds)
  }, []);

  return (
    <View style={styles.container}>
      <StatusBar hidden={false} />
      <Image
        style={styles.backgroundImage}
        source={require('../assets/images/background.png')}
      />
      <ActivityIndicator size="large" color="#ffffff" style={styles.loadingIndicator} />
      <Image source={require('../assets/images/logo.png')} style={styles.logo} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  backgroundImage: {
    ...StyleSheet.absoluteFillObject,
    width: '100%',
    height: '100%',
  },
  loadingIndicator: {
    position: 'absolute',
    top: '50%',
  },
  logo: {
    position: 'absolute',
    top: '60%', // Adjust the position as needed
     // Adjust the size as needed
  },
});

export default Splash;
