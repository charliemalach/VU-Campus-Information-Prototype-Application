import React, { useState } from 'react';
import { View, Text, TextInput, Image, TouchableOpacity, StyleSheet, Alert, StatusBar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { useNavigation } from '@react-navigation/native';


export default function App() {
  const Stack = createStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Blank" component={BlankScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [isLogin, setIsLogin] = useState(true);

  const customData = require('./db.json');
  const navigation = useNavigation();


  const handleLogin = async () => {
    const user = customData.users.find(user => user.username === username.toLowerCase() && user.password === password);
    if (user) {
      console.log("User logged in:", user);
      // handle successful login, e.g. navigate to home screen
      navigation.navigate('Blank');
      setUsername('');
      setPassword('');
      setIsLogin(true);
      StatusBar.setHidden(true);
    } else {
      console.error("Invalid credentials");
      // handle failed login, e.g. display error message to user
    }
  };

  const handleRegister = async () => {
    const user = customData.users.find(user => user.username === username);
    if (user) {
      console.error("User already exists");
      Alert.alert("ERROR: User already exists. You have not registered.");
      // handle failed registration, e.g. display error message to user
    } else {
      const newUser = { username, password };
      customData.users.push(newUser);
      console.log("User registered:", newUser);
      Alert.alert("You have successfully registered");
      // handle successful registration, e.g. display success message to user
    }
  };

  return (
    <View style={styles.container}>
    
      <Image
        style={styles.tinyLogo}
        source={require('./assets/shield.png')}
      />

      <Text style={styles.title}>{isLogin ? 'Login' : 'Register'}</Text>

      <TextInput
        style={styles.input}
        placeholder="Username"
        value={username}
        onChangeText={setUsername}
      />

      <TextInput
        style={styles.input}
        placeholder="Password"
        value={password}
        secureTextEntry={true}
        onChangeText={setPassword}
      />

      <TouchableOpacity style={styles.button} onPress={isLogin ? handleLogin : handleRegister}>
        <Text style={styles.buttonText}>{isLogin ? 'Login' : 'Register'}</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => setIsLogin(!isLogin)}>
        <Text style={styles.switchText}>
          {isLogin ? 'New user? Register here' : 'Already have an account? Login here'}
        </Text>
      </TouchableOpacity>
    </View>
  );
}

function BlankScreen() {
  return (
    <View style={{ flex: 1, backgroundColor: '#FFF', alignItems: 'center', justifyContent: 'center' }}>
      <Text style={{ fontSize: 24 }}>You have successfully logged in!</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#ffcc00',
  },
  title: {
    fontSize: 24,
    marginBottom: 24,
  },
  input: {
    width: '80%',
    padding: 12,
    marginBottom: 16,
    backgroundColor: '#eee',
    borderRadius: 4,
  },
  button: {
    width: '80%',
    padding: 12,
    backgroundColor: '#613318',
    borderRadius: 4,
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
  },
  switchText: {
    marginTop: 24,
    color: '#4287f5',
  },
  tinyLogo: {
    width: 100,
    height: 100,
    resizeMode: 'contain',
  },
});