import React, { useState, StyleSheet, TouchableOpacity  } from 'react';
import { View, Text } from 'react-native';
import ValpoItem from './components/ValpoItem.js';
import {loggedUser} from './Login.js'
import EditItem from './components/EditItem.js';



function Home() {
  return (
    <View style={{ flex: 1, backgroundColor: '#FFF', alignItems: 'center', justifyContent: 'center' }}>
      <Text>Welcome,</Text>
      <Text style={{ fontSize: 24 }}>{loggedUser}.</Text>
      <EditItem></EditItem>
      <ValpoItem></ValpoItem>
    </View>
  );
};

export default Home;
