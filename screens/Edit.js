/**
 * EditProfileScreen component allows the user to edit their profile information
 * and upload a new profile picture. This component imports several modules
 * and variables from other files to function properly.
 *
 * @module EditProfileScreen
 * @see Login
 * @requires React
 * @requires react-native
 * @requires expo-image-picker
 * @requires expo-file-system
 * @requires ./styles
 */

import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, TouchableOpacity, Image, Platform } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import { loggedUser } from './Login.js';
import { loggedName } from './Login.js';
import { loggedEmail } from './Login.js';
import { loggedImage } from './Login.js';
import { loggedId } from './Login.js';
import { loggedPassword } from './Login.js';
import { API_URL } from './Login.js';
import * as FileSystem from 'expo-file-system';
import styles from './styles';

let newImage = ""; 

/**
 * EditProfileScreen component that displays a form for editing the user's profile
 * information and uploading a new profile picture.
 *
 * @function
 * @name EditProfileScreen
 * @returns {JSX.Element} EditProfileScreen component
 */

const EditProfileScreen = () => {
  const [image, setImage] = useState('');
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

    /**
   * Asynchronous function that launches the device's image library and allows the user to select a new profile picture.
   *
   * @async
   * @function
   * @name pickImage
   * @returns {string} The local URI of the newly selected image
   */

  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });
    console.log(JSON.stringify(result));
    if (!result.canceled) {
      const localUri = await saveLocalImage(result.assets[0].uri);
      setImage(localUri);
      uploadProfilePicture(localUri);
      newImage = localUri;
    }
    return newImage;
  };

  /**
   * Asynchronous function that saves a selected image to the device's file system.
   *
   * @async
   * @function
   * @name saveLocalImage
   * @param {string} uri - The URI of the selected image
   * @returns {string} The local URI of the saved image
   */
  
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

  /**
  Asynchronous function to upload selected image to server and update user's profile picture
  *
  @async
  @param {string} imageUri - local uri of the selected image
  */

  const uploadProfilePicture = async ( imageUri ) => {
    const updateUser = { id: loggedId, name: loggedName, username: loggedUser, password: loggedPassword, image: imageUri, email: loggedEmail };
    try {
      const formData = new FormData();
      formData.append('image', {
        uri: imageUri,
        name: 'image.jpg',
        type: 'image/jpeg',
      });
      const response = await fetch(`${API_URL}/users/${loggedId}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(updateUser)
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
        {image ? (
          <Image source={{ uri: image }} style={styles.profilePicture} />
        ) : (
          <View style={styles.profilePicturePlaceholder}>
            <Image source={{ uri: loggedImage }} style={styles.profilePicture} />
          </View>
        )}
      </TouchableOpacity>

      <Text style={styles.notinput}>{loggedUser}</Text>

      <TextInput 
      placeholder={loggedName}
      style={styles.change}
      value={name}
      onTextChange={setName}
      />

      <TextInput
        placeholder={loggedEmail}
        style={styles.change}
        value={email}
        onChangeText={setEmail}
      />

      <TouchableOpacity style={styles.savebutton} onPress={() => console.log('Save Profile')}>
        <Text style={styles.savebuttonText}>Save Profile</Text>
      </TouchableOpacity>
    </View>
  );
};

export {newImage};
export default EditProfileScreen;
