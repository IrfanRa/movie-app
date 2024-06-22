import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const MyButtonRow = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('MyList')}>
        <Ionicons name="list" size={30} color="white" />
        <Text style={styles.buttonText}>My List</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Player', { videoUrl: 'https://nd106.republicaservers.com/hls/c7260_1/index.m3u8' })}>
        <Ionicons name="play" size={30} color="white" />
        <Text style={styles.buttonText}>Play</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('InfoScreen')}>
        <Ionicons name="information-circle" size={30} color="white" />
        <Text style={styles.buttonText}>Info</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: 380,
    height: 50,
    padding: 10,
    borderRadius: 5,
    marginLeft: 60,
  },
  button: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonText: {
    color: 'white',
    marginLeft: 5,
    fontSize: 20,
  },
});

export default MyButtonRow;
