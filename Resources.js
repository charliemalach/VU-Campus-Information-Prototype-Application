import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { useRoute } from '@react-navigation/native';
import ValpoItem from './components/ValpoItem.js';
import ResourceItem from './components/ResourceItem';



function Resources() {
    return (
    <View style={{ flex: 1, backgroundColor: '#FFF', alignItems: 'center', justifyContent: 'center' }}>
      <Text>Here are the Resources</Text>
      <ResourceItem></ResourceItem>
    </View>
    );

    
}

export default Resources;