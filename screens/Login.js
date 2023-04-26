/**

The Login component provides the functionality for logging in or registering
new users. The component uses useState hook for handling form inputs, and uses
useNavigation hook to navigate between screens. The component also has constants
for the API URL and a default image for new users.
@module Login
@requires React
@requires react-native
@requires @react-navigation/native
@requires ./styles
@requires ./Edit
*/

import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Image, Alert, StatusBar } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import styles from './styles';
import { newImage } from './Edit';


/**

The API_URL constant is used to specify the URL of the user database API.
@type {string}
@constant
*/
const API_URL = 'https://c7de-152-228-20-39.ngrok.io'; //change this link for the user db 

/**

The defaultImage constant is used to specify the default image for new users.
@type {string}
@constant
*/
const defaultImage = "https://i.pinimg.com/736x/83/bc/8b/83bc8b88cf6bc4b4e04d153a418cde62.jpg";

let loggedId = 0;
let loggedName = 'name';
let loggedUser = 'username';
let loggedImage = 'test';
let loggedEmail = 'email';
let loggedPassword = 'password';

/**

The Login component provides the functionality for logging in or registering
new users.
@function Login
@returns {JSX.Element} The Login component's UI.
*/
const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [image, setImage] = useState('');
  const [nextId, setNextId] = useState(1);
  const [isLogin, setIsLogin] = useState(true);
  const navigation = useNavigation();
  
  /**
  The handleLogin function sends a GET request to the API to check if the user
  with the entered username and password exists in the database. If the user
  exists, the function stores the user's information in global variables and
  navigates to the home screen. If the user does not exist, an error message is
  displayed.
  @function handleLogin
  @async
  @returns {string} The username of the logged-in user.
  */
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
        loggedId = user.id;
        loggedPassword = user.password;
        // handle successful login, e.g. navigate to home screen
        navigation.navigate('Home', { username: loggedUser });
        
        console.log(loggedUser);
        setName('');
        setUsername('');
        setPassword('');
        setImage(newImage);
        setEmail('');
        setIsLogin(true);
        
        StatusBar.setHidden(true);
        return loggedUser, loggedImage, loggedEmail, loggedName, loggedId, loggedPassword;
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
  
  /**

  This function handles user registration.
  It checks if the user already exists, and either displays an error message or registers a new user.
  @async
  @function
  @returns {Promise<void>} - It returns a promise that resolves with no value.
  */
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
        const newUser = { id: nextId, name, username, password, image: defaultImage, email }; //for some reason messing with the space after email allows post requests ..?
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

  return (
    <View style={styles.logincontainer}>
  
      <Image
        style={styles.tinyLogo}
        source={require('../assets/shield.png')}
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
export {loggedPassword};
export {loggedUser};
export {loggedImage};
export {loggedEmail};
export {loggedId};
export default Login