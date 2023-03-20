import React, { useState, StyleSheet, TouchableOpacity  } from 'react';
import { View, Text } from 'react-native';
import ValpoItem from './components/ValpoItem.js';
import {loggedUser} from './Login.js'
import { useNavigation } from '@react-navigation/native';




function Home() {
  const navigation = useNavigation();
  return (
    <View style={{ flex: 1, backgroundColor: '#FFF', alignItems: 'center', justifyContent: 'center' }}>
      <Text>Welcome,</Text>
      <Text onPress={() => navigation.navigate("Edit")} style={{ fontSize: 24, color: 'blue', textDecorationLine: 'underline' }}>{loggedUser}.</Text>
      <ValpoItem></ValpoItem>
    </View>
  );
};

export default Home;
