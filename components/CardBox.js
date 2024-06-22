// CardBox.js
import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet, FlatList } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

const CardBox = ({ data }) => {
  const navigation = useNavigation();

  const renderCard = ({ item }) => (
    <TouchableOpacity 
      style={styles.card} 
      onPress={() => navigation.navigate('Player', { videoUrl: item.content.videos[0].url })}
    >
      <View style={styles.thumbnailContainer}>
        <Image source={{ uri: item.thumbnail }} style={styles.thumbnail} />
        <Ionicons name="play-circle" size={50} color="white" style={styles.playIcon} />
      </View>
      <Text style={styles.title}>{item.title}</Text>
      <Text style={styles.description}>{item.shortDescription}</Text>
    </TouchableOpacity>
  );

  return (
    <FlatList
      data={data.liveFeeds}
      renderItem={renderCard}
      keyExtractor={(item) => item.id}
      numColumns={2}
      contentContainerStyle={styles.container}
    />
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
  card: {
    width: 170,
    height: 160,
    margin: 30,
    backgroundColor: '#fff',
    borderRadius: 10,
    overflow: 'hidden',
    elevation: 5,
    marginLeft: 70,
  },
  thumbnailContainer: {
    width: '100%',
    height: 90,
    justifyContent: 'center',
    alignItems: 'center',
  },
  thumbnail: {
    width: '100%',
    height: '100%',
  },
  playIcon: {
    position: 'absolute',
  },
  title: {
    padding: 5,
    fontSize: 14,
    fontWeight: 'bold',
  },
  description: {
    padding: 5,
    fontSize: 12,
    color: '#666',
  },
});

export default CardBox;
