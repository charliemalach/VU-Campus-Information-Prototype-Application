import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { useRoute } from '@react-navigation/native';
import MenuItem from './components/MenuItem.js';



function Menu() {
    return (
    <View style={{ flex: 1, backgroundColor: '#FFF', alignItems: 'center', justifyContent: 'center' }}>
      <Text>Here are the Menus from Founders Table.</Text>
      <MenuItem></MenuItem>
    </View>
    );

    
}

export default Menu;