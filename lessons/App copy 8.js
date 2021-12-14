import React from 'react';
import { StyleSheet, Button, SafeAreaView, StatusBar, View, Platform } from 'react-native';

export default function App() {


  return (
    <View style={{
      backgroundColor: '#fff',
      flex: 1,
      flexDirection: "row", // Horizontal
      justifyContent: "center", // Position in the Horizontal axis
      alignItems: "center", // Position in the Vertical axis
      flexWrap: 'wrap',
      alignContent: 'center'
    }}
    >
      <View style={{
        backgroundColor: 'dodgerblue',
        // flexBasis: 100,
        width: 300,
        flexShrink: 1,
        // flexGrow: 1,
        // flex: 1,
        height: 100
      }}></View>

      <View style={{
        backgroundColor: 'gold',
        width: 100,
        height: 100
      }}></View>

      <View style={{
        backgroundColor: 'tomato',
        width: 100,
        height: 100
      }}></View>
      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,

  },
});
