import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  button,
} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },

  imageStyles: {
    width: 150,
    height: 150,
    borderRadius: 10,
    transform: [{rotate: '-40deg'}],
    marginBottom: 50,
  },
  bikeText: {
    color: 'black',
    fontSize: 30,
    textAlign: 'center',
    fontWeight: '600',
  },

  welcomeText: {
    fontSize: 24,
    textAlign: 'center',
    color: 'rgba(0,0,0,6)',
  },

  buttonView: {
    width: '100%',
    paddingHorizontal: 20,
  },

  googleBut: {
    backgroundColor: '#e3e3e3',
    padding: 10,
    paddingHorizontal: 60,
    borderRadius: 10,
    marginTop: 20,
  },

  buttonText: {
    fontSize: 20,
    textAlign: 'center',
    fontWeight: 'bold',
  },

  appleBut: {
    backgroundColor: 'black',
    padding: 10,
    paddingVertical: 15,
    borderRadius: 10,
    marginTop: 10,
  },

  appletext: {
    color: 'white',
    fontSize: 17,
    textAlign: 'center',
    fontWeight: 'bold',
  },

  lowerView: {
    flexDirection: 'row',
  },

  lowerText: {
    marginTop: 20,
    fontSize: 18,
    color: '#808080',
  },

  orangeText: {
    color: '#DD6E0F',
    marginTop: 20,
    fontSize: 18,
    fontWeight: 'bold',
  },

  googleImg: {
    height: 30,
    width: 30,
    // resizeMode: 'contain',
  },
});

const App = () => {
  return (
    <View style={styles.container}>
      <Image
        source={require('./assets/img/bike1.jpg')}
        style={styles.imageStyles}
      />
      <Text style={styles.welcomeText}>Welcome to</Text>
      <Text style={styles.bikeText}>Power Bike Shop</Text>

      <View style={styles.buttonView}>
        <TouchableOpacity style={styles.googleBut}>
          <Image
            source={require('./assets/img/google.png')}
            style={styles.googleImg}
          />
          <Text style={styles.buttonText}>Login with Gmail</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.appleBut}>
          <Text style={styles.appletext}>Login with Apple</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.lowerView}>
        <Text style={styles.lowerText}>Not a member?</Text>
        <TouchableOpacity>
          <Text style={styles.orangeText}>Sign Up</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default App;
