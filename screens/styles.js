import { StyleSheet } from 'react-native';

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
    change: {
      borderWidth: 1,
      borderColor: '#ccc',
      borderRadius: 5,
      padding: 10,
      width: '100%',
      marginVertical: 10,
      fontSize: 18,
    },
    savebutton: {
      backgroundColor: '#613318',
      padding: 10,
      borderRadius: 5,
      marginVertical: 10,
      minWidth: '50%',
    },
    savebuttonText: {
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
    logincontainer: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#ffcc00',
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

  export default styles;

