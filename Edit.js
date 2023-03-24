import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity, Image, Platform } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import { loggedUser } from './Login.js';
import { loggedName } from './Login.js';
import { loggedEmail } from './Login.js';
import { loggedImage } from './Login.js';
import { API_URL } from './Login.js';
import * as FileSystem from 'expo-file-system';

const EditProfileScreen = () => {
  const [profilePicture, setProfilePicture] = useState('');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  useEffect(() => {
    (async () => {
      if (Platform.OS !== 'web') {
        const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
        if (status !== 'granted') {
          alert('Sorry, we need media library permissions to make this work!');
        }
      }
    })();
  }, []);

  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
      base64: true,
    });
    console.log(JSON.stringify(result));
    if (!result.cancelled) {
      const localUri = await saveLocalImage(result.uri);
      setProfilePicture(localUri);
      uploadProfilePicture(loggedUser, result.base64);
    }
  };

  const uploadToStorage = async (username, blob) => {
    const response = await fetch(`${API_URL}/users?username=${username}`, {
      method: 'PATCH',
      body: JSON.stringify({
        image: blob,
      }),
    });
    const result = await response.json();
    return result.url;
  };

  const saveLocalImage = async (uri) => {
    const filename = uri.split('/').pop();
    const directory = FileSystem.documentDirectory + 'images/';
    await FileSystem.makeDirectoryAsync(directory, { intermediates: true });
    const localUri = directory + filename;
    await FileSystem.copyAsync({
      from: uri,
      to: localUri,
    });
    return localUri;
  };

  const uploadProfilePicture = async (username, imageData) => {
    try {
      const blob = await fetch(`data:image/jpeg;base64,${imageData}`).then(res => res.blob());
      const imageUrl = await uploadToStorage(blob);
      const response = await fetch(`${API_URL}/users?username=${username}`, {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          image: imageUrl,
        })
      });
      const result = await response.json();
      console.log(result);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={pickImage}>
        {profilePicture ? (
          <Image source={{ uri: profilePicture }} style={styles.profilePicture} />
        ) : (
          <View style={styles.profilePicturePlaceholder}>
            <Image source={{ uri: loggedImage }} style={styles.profilePicture} />
          </View>
        )}
      </TouchableOpacity>

      <Text style={styles.notinput}>{loggedUser}</Text>

      <TextInput 
      placeholder={loggedName}
      style={styles.input}
      value={name}
      onTextChange={setName}
      />

      <TextInput
        placeholder={loggedEmail}
        style={styles.input}
        value={email}
        onChangeText={setEmail}
      />

      <TouchableOpacity style={styles.button} onPress={() => console.log('Save Profile')}>
        <Text style={styles.buttonText}>Save Profile</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
    backgroundColor: '#fff',
  },
  notinput: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    padding: 10,
    width: '100%',
    marginVertical: 10,
    fontSize: 18,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    padding: 10,
    width: '100%',
    marginVertical: 10,
    fontSize: 18,
  },
  button: {
    backgroundColor: '#613318',
    padding: 10,
    borderRadius: 5,
    marginVertical: 10,
    minWidth: '50%',
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  profilePicture: {
    width: 150,
    height: 150,
    borderRadius: 75,
  },
  profilePicturePlaceholder: {
    width: 150,
    height: 150,
    borderRadius: 75,
    backgroundColor: '#ccc',
    alignItems: 'center',
    justifyContent: 'center',
  },
  profilePicturePlaceholderText: {
    color: '#fff',
    fontSize: 18,
    textAlign: 'center',
  },
});

export default EditProfileScreen;
