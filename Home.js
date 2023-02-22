import React, { useState, useEffect } from 'react';
import { View, Text } from 'react-native';
import { useRoute } from '@react-navigation/native';
import ValpoItem from './components/ValpoItem.js';

function Home() {
  const route = useRoute();
  const customData = require('./db.json');
  const [username, setUsername] = useState('');

  useEffect(() => {
    const user = customData.users.find(user => user.username === route.params.username.toLowerCase());
    setUsername(user.username);
  }, []);

  return (
    <View style={{ flex: 1, backgroundColor: '#FFF', alignItems: 'center', justifyContent: 'center' }}>
      <Text>Welcome,</Text>
      <Text style={{ fontSize: 24 }}>{username}.</Text>
      <ValpoItem></ValpoItem>
    </View>
  );
}

export default Home;
