import React from 'react';
import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Entypo from 'react-native-vector-icons/Entypo';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
  },

  imageStyles: {
    width: 200,
    height: 200,
    borderRadius: 20,
    transform: [{rotate: '45deg'}],
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

  googleButton: {
    backgroundColor: '#e3e3e3',
    padding: 10,
    flexDirection: 'row',
    paddingHorizontal: 60,
    borderRadius: 10,
    marginTop: 20,
  },

  googleText: {
    fontSize: 17,
    marginLeft: 10,
    color: 'black',
    textAlign: 'center',
    fontWeight: 'bold',
  },

  appleButton: {
    backgroundColor: 'black',
    padding: 10,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 60,
    borderRadius: 10,
    marginTop: 10,
  },

  appletext: {
    color: 'white',
    flexDirection: 'row',
    marginLeft: 10,
    fontSize: 17,
    textAlign: 'center',
    fontWeight: 'bold',
  },

  lowerView: {
    flexDirection: 'row',
    marginTop: 10,
  },

  lowerText: {
    fontSize: 18,
    color: '#808080',
  },

  orangeText: {
    color: '#DD6E0F',
    marginLeft: 5,
    fontSize: 18,
    fontWeight: 'bold',
  },

  googleImg: {
    height: 30,
    width: 30,
    // resizeMode: 'contain',
  },
});

const Login = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Image
        source={require('../assets/img/bike1.jpg')}
        style={styles.imageStyles}
      />
      <Text style={styles.welcomeText}>Welcome to</Text>
      <Text style={styles.bikeText}>Power Bike Shop</Text>

      <View style={styles.buttonView}>
        {/* <AntDesign name="google" color="#fff" size={30} /> */}

        <TouchableOpacity style={styles.googleButton}>
          <AntDesign name="google" color="black" size={24} />
          <Text style={styles.googleText}>Login with Gmail</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.appleButton}>
          <AntDesign name="apple1" color="white" size={24} />
          <Text style={styles.appletext}>Login with Apple</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.lowerView}>
        <Text style={styles.lowerText}>Not a member?</Text>
        <TouchableOpacity>
          <Text style={styles.orangeText}>Sign Up</Text>
        </TouchableOpacity>
      </View>
      <TouchableOpacity onPress={() => navigation.navigate('ShopItem')}>
        <Entypo
          style={{marginTop: 10, marginBottom: 10}}
          name="home"
          color="black"
          size={30}
        />
      </TouchableOpacity>
    </View>
  );
};

export default Login;
