import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { useRoute } from '@react-navigation/native';
import ValpoItem from './components/ValpoItem.js';
import MenuItem from './components/MenuItem.js';



function Menu() {
    return (
    <View style={{ flex: 1, backgroundColor: '#FFF', alignItems: 'center', justifyContent: 'center' }}>
      <Text>Here are the Menus</Text>
      <MenuItem></MenuItem>
    </View>
    );

    
}

export default Menu;