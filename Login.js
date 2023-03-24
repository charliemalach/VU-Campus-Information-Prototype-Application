import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Image, Alert, StyleSheet, StatusBar } from 'react-native';
import { useNavigation } from '@react-navigation/native';


const API_URL = 'https://d773-152-228-20-39.ngrok.io'; //change this link for the user db 
const defaultImage = "https://cdn.greatnews.life/wp-content/uploads/images/vu-logo.jpg";

let loggedName = 'name';
let loggedUser = 'username';
let loggedImage = defaultImage;
let loggedEmail = 'email';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [image, setImage] = useState('');
  const [nextId, setNextId] = useState(1);
  const [isLogin, setIsLogin] = useState(true);
  const navigation = useNavigation();
  
  const handleLogin = async () => {
    try {
      const response = await fetch(`${API_URL}/users?username=${username}&password=${password}`, {method: "GET"});
      const [user] = await response.json();
      if (user) {
        console.log("User logged in:", user);
        loggedName = user.name;
        loggedUser = user.username;
        loggedImage = user.image;
        loggedEmail = user.email;
        // handle successful login, e.g. navigate to home screen
        navigation.navigate('Home', { username: loggedUser });
        
        console.log(loggedUser);
        setName('');
        setUsername('');
        setPassword('');
        setImage('');
        setEmail('');
        setIsLogin(true);
        
        StatusBar.setHidden(true);
        return loggedUser, loggedImage, loggedEmail, loggedName;
      } else {
        console.error("Invalid credentials");
        // handle failed login, e.g. display error message to user
      }
    } catch (error) {
      console.error(error);
      // handle error, e.g. display error message to user
    }
    return loggedUser;
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
        setImage(defaultImage)
        const newUser = { id: nextId, name, username, password, image, email }; //for some reason messing with the space after email allows post requests ..?
        const response = await fetch(`${API_URL}/users`, {
          method: 'POST',
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(newUser)
        });
        const data = await response.text();
        console.log("User registered:", data);
        setNextId(nextId + 1); // increment the nextId for the next user
        setImage(defaultImage)
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

      { !isLogin &&
        <TextInput
          style={styles.input}
          placeholder="Name"
          value={name}
          secureTextEntry={false}
          onChangeText={setName}
        />
      }

      { !isLogin &&
        <TextInput
          style={styles.input}
          placeholder="Email"
          value={email}
          secureTextEntry={false}
          onChangeText={setEmail}
        />
      }

      <TextInput
        style={styles.input}
        placeholder="Username"
        value={username}
        secureTextEntry={false}
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

export {API_URL};
export {loggedName};
export {loggedUser};
export {loggedImage};
export {loggedEmail};
export default Login