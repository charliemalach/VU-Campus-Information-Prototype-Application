/**

Renders the resources screen containing resource items.
@returns {JSX.Element} The menu screen with resource items.
*/

import React  from 'react';
import { View, Text } from 'react-native';
import ResourceItem from '../components/ResourceItem';

function Resources() {
    return (
    <View style={{ flex: 1, backgroundColor: '#FFF', alignItems: 'center', justifyContent: 'center' }}>
      <Text>Here are some important campus Resources.</Text>
      <ResourceItem></ResourceItem>
    </View>
    );
}

export default Resources;