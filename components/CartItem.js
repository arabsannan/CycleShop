import {CurrentRenderContext} from '@react-navigation/core';
import React from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';

const styles = StyleSheet.create({
  container: {
    flex: 1.2,
    flexDirection: 'row',
    marginVertical: 10,

    marginHorizontal: 20,
    justifyContent: 'space-between',
  },
  deleteIcon: {
    padding: 3,
    backgroundColor: '#fff',
    alignSelf: 'flex-end',
    borderRadius: 10,
    borderColor: '#E0E0E0',
    borderWidth: 1,
  },
  col: {
    justifyContent: 'space-evenly',
  },
  boldText: {
    fontWeight: 'bold',
    fontSize: 16,
  },
  removeIcon: {
    marginRight: 5,
  },
  addIcon: {
    marginLeft: 5,
  },
  amount: {
    color: '#e2884b',
  },
  title: {
    fontSize: 16,
    color: 'black',
  },
  quantity: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  image: {
    height: 80,
    width: 80,
    borderRadius: 10,
    backgroundColor: '#f5f5f5',
  },
  row: {
    flex: 1.5,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  number: {
    color: 'black',
    fontWeight: '400',
    fontSize: 18,
    marginHorizontal: 5,
  },
  subText: {
    fontSize: 14,
    color: '#a5a5a5',
  },
  price: {
    fontSize: 18,
    color: 'black',
    fontWeight: 'bold',
  },
});

const Item = ({name, price, subText, image}) => {
  return (
    <View style={styles.container}>
      <View>
        <Image source={image} style={styles.image} />
      </View>
      <View style={styles.col}>
        <Text style={styles.title}>{name}</Text>
        <Text style={styles.subText}>{subText}</Text>
        <Text>
          <Text style={styles.amount}>$ </Text>
          <Text style={styles.price}>{price}</Text>
        </Text>
      </View>
      <View style={styles.col}>
        <AntDesign
          name="delete"
          size={15}
          color="#e2884b"
          style={styles.deleteIcon}
        />
        <View style={styles.quantity}>
          <AntDesign
            style={styles.removeIcon}
            name="minuscircle"
            size={24}
            color="black"
          />
          <Text style={styles.number}>1</Text>
          <AntDesign
            style={styles.addIcon}
            name="pluscircle"
            size={24}
            color="#e2884b"
          />
        </View>
      </View>
    </View>
  );
};

export default Item;
