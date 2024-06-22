import React from 'react'
import { View, StyleSheet, Text, ImageBackground} from 'react-native'

const MyList = () => {
  return (
    <View style ={styles.container}>
      <ImageBackground
      source={require("../assets/images/background.png")} // Replace with your background image path
      style={styles.background}>
        <Text style={styles.txt}>
        MyList
        </Text>
        </ImageBackground>
    </View>
  )
}

const styles = StyleSheet.create({
    container:{
       flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    background: {
      flex: 1,
      resizeMode: 'cover', 
      width: '100%',
      justifyContent: 'center',
        alignItems: 'center'
      
    },
    txt: {
      fontSize: 40,
      color: 'white'
    }
    
})
export default MyList

