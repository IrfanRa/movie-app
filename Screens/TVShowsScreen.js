import React from "react";
import { View, Text, StyleSheet, ActivityIndicator } from "react-native";
import HomeSlider from "../components/HomeSlider";
import { ImageBackground } from "react-native";
import Title from "../components/Title";
import MyButtonRow from "../components/MyButtonRow";
import useFetchData from '../components/useFetchData';
import CardBox from '../components/CardBox';

const TVShowsScreen = ({navigation}) => {
  const { data, loading, error } = useFetchData('https://otttelemaerica.com/feed/TeleAmerica.json');

  if (loading) return <ActivityIndicator size="large" color="#0000ff" />;
  if (error) return <Text>Error loading data</Text>;

  return (
    <View style={styles.container}>
      <ImageBackground
        source={require("../assets/images/background.png")} // Replace with your background image path
        style={styles.background}
      >
        <HomeSlider navigation={navigation}/>
        <Title />
        <MyButtonRow  navigation={navigation}/>
        <View >
        {data && <CardBox data={data} />}
        </View>
      
        
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-start",
    alignItems: "center",
  },
  player: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  background: {
    flex: 1,
    resizeMode: "cover", // or 'stretch' to stretch the image
  },
});

export default TVShowsScreen;
