import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { useRoute } from '@react-navigation/native';
import VUPDItem from './components/VUPDItem';



function VUPD() {
    return (
    <View style={{ flex: 1, backgroundColor: '#FFF', alignItems: 'center', justifyContent: 'center' }}>
      <Text>USE THIS BUTTON FOR EMERGENCIES ONLY!</Text>
      <VUPDItem></VUPDItem>
    </View>
    );

    
}

export default VUPD;