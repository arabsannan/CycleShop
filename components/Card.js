import React from 'react';
import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#e7e4e4de',
    flex: 0.8,
    borderRadius: 10,
    marginHorizontal: 5,
    marginVertical: 5,
    padding: 12,
  },
  details: {
    marginTop: 5,
    alignItems: 'center',
  },
  name: {
    fontSize: 16,
    color: '#a5a5a5',
  },
  amount: {
    color: '#e2884b',
  },
  image: {
    width: 140,
    height: 140,
    alignSelf: 'center',
  },
  likeBtn: {
    position: 'absolute',
    zIndex: 2,
    backgroundColor: '#fff',
    padding: 5,
    borderRadius: 50,
    top: 8,
    right: 9,
  },
  boldText: {
    fontWeight: 'bold',
    fontSize: 16,
    color: 'black',
  },
});

const BikeCard = ({name, price, image}) => {
  return (
    <View style={styles.container}>
      <View style={styles.likeBtn}>
        <AntDesign name="hearto" size={20} color="#e2884b" />
      </View>
      <Image source={image} style={styles.image} />
      <View style={styles.details}>
        <Text style={styles.name}>{name}</Text>
        <Text style={styles.boldText}>
          <Text style={styles.amount}>$ </Text>
          {price}
        </Text>
      </View>
    </View>
  );
};

export default BikeCard;
