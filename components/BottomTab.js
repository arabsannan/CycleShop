import React from 'react';
import {View, StyleSheet, Pressable, TouchableOpacity} from 'react-native';
import Feather from 'react-native-vector-icons/Feather';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
import Entypo from 'react-native-vector-icons/Entypo';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 15,
    alignSelf: 'stretch',
    marginTop: 20,
    backgroundColor: '#e7e4e4de',
  },
  home: {
    position: 'absolute',
    left: 45,
  },
  shoppingBag: {
    right: 45,
  },
  microphone: {
    position: 'absolute',
    bottom: 5,
    left: -15,
    backgroundColor: 'black',
    borderRadius: 50,
    padding: 12,
  },
});
const BottomTab = () => {
  return (
    <View style={styles.container}>
      <TouchableOpacity>
        <MaterialIcons
          style={styles.home}
          name="home"
          size={25}
          color="#e2884b"
        />
      </TouchableOpacity>
      <View style={styles.micContainer}>
        <SimpleLineIcons
          style={styles.microphone}
          name="microphone"
          size={24}
          color="#fff"
        />
      </View>
      <Pressable onPress={() => navigation.navigate('ShopItem')}>
        <Feather
          style={styles.shoppingBag}
          name="shopping-bag"
          size={24}
          color="black"
        />
      </Pressable>
    </View>
  );
};

export default BottomTab;
