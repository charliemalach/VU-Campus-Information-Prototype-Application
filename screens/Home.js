/**

A React component representing the Home screen of the application.
@returns A view containing a welcome message, the logged user's name displayed as a clickable link to the Edit Profile screen, and a component for displaying ValpoItem.
*/

import React from 'react';
import { View, Text } from 'react-native';
import ValpoItem from '../components/ValpoItem.js';
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
