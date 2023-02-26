import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Image, Alert, StyleSheet, StatusBar } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const API_URL = 'https://711a-2601-248-c200-3170-e5db-cd70-bcaf-bae9.ngrok.io/users/users'; //change this link for the user db 

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [isLogin, setIsLogin] = useState(true);
  const navigation = useNavigation();

  const handleLogin = async () => {
    try {
      const response = await fetch(`${API_URL}/users?username=${username}&password=${password}`);
      const [user] = await response.json();
      if (user) {
        console.log("User logged in:", user);
        // handle successful login, e.g. navigate to home screen
        navigation.navigate('Home', { username: user.username });
        setUsername('');
        setPassword('');
        setIsLogin(true);
        StatusBar.setHidden(true);
      } else {
        console.error("Invalid credentials");
        // handle failed login, e.g. display error message to user
      }
    } catch (error) {
      console.error(error);
      // handle error, e.g. display error message to user
    }
  };
  
  const handleRegister = async () => {
    try {
      const response = await fetch(`${API_URL}/users?username=${username}`);
      const [user] = await response.json();
      if (user) {
        console.error("User already exists");
        Alert.alert("ERROR: User already exists. You have not registered.");
        // handle failed registration, e.g. display error message to user
      } else {
        const newUser = { username, password };
        const response = await fetch(`${API_URL}/users`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(newUser)
        });
        const data = await response.json();
        console.log("User registered:", data);
        Alert.alert("You have successfully registered");
        // handle successful registration, e.g. display success message to user
      }
    } catch (error) {
      console.error(error);
      // handle error, e.g. display error message to user
    }
  };


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

export default Login