import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';


import Login from './Login';
import EditProfileScreen from './Edit';
import Home from './Home';
import Menu from './Menu';
import Resources from './Resources';
import VUPD from './VUPD';
import Counseling from './components/Counseling';
import HealthCenter from './components/HealthCenter';
import StudentSenate from './components/StudentSenate';


const Stack = createStackNavigator();
function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Edit" component={EditProfileScreen} />
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Menu" component={Menu} />
        <Stack.Screen name="Resources" component={Resources} />
        <Stack.Screen name="VUPD" component={VUPD} />
        <Stack.Screen name="Counseling" component={Counseling} />
        <Stack.Screen name="HealthCenter" component={HealthCenter} />
        <Stack.Screen name="StudentSenate" component={StudentSenate} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
