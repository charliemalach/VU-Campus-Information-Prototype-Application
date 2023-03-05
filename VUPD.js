import React from 'react';
import { View, Text} from 'react-native';
import VUPDItem from './components/VUPDItem';

function VUPD() {
    return (
    <View style={{ flex: 1, backgroundColor: '#FFF', alignItems: 'center', justifyContent: 'center' }}>
      <Text>This button will call VUPD directly.</Text>
      <Text>USE THIS BUTTON FOR EMERGENCIES ONLY! </Text>
      <VUPDItem></VUPDItem>
    </View>
    ); 
}
export default VUPD;