import React, { useState, useEffect } from 'react';
import { View, Text } from 'react-native';
import { useRoute } from '@react-navigation/native';
import ValpoItem from './components/ValpoItem.js';
import {loggedUser} from './Login.js'


function Home() {

  return (
    <View style={{ flex: 1, backgroundColor: '#FFF', alignItems: 'center', justifyContent: 'center' }}>
      <Text>Welcome,</Text>
      <Text style={{ fontSize: 24 }}>{loggedUser}.</Text>
      <ValpoItem></ValpoItem>
    </View>
  );
}

export default Home;
