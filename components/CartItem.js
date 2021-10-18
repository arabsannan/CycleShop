import React from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';
import {AntDesign} from 'react-native-vector-icons/AntDesign';

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
    borderRadius: 50,
    borderColor: '#E0E0E0',
    borderWidth: 1,
  },
  col: {
    justifyContent: 'space-between',
  },
  detailsCol: {},
  boldText: {
    fontWeight: 'bold',
    fontSize: 16,
  },
  icon1: {
    marginRight: 5,
  },
  icon2: {
    marginLeft: 5,
  },
  dollar: {
    color: '#ff7518',
  },
  title: {
    fontSize: 18,
  },
  quantity: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  greyText: {
    color: '#BEBEBE',
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
  title: {
    fontSize: 16,
  },
  subText: {
    fontSize: 14,
    color: '#D3D3D3',
  },
  price: {
    fontSize: 16,
    fontWeight: 'bold',
  },
});

const CartItem = ({name, price, subText }) => {
  return (
    <View style={styles.container}>
      <View>
        <Image
          source={require('../assets/img/bike1.jpg')}
          style={styles.image}
        />
      </View>
      <View style={styles.col}>
        <Text style={styles.title}>{name}</Text>
        <Text style={styles.subText}>{subText}</Text>
        <Text style={styles.price}>
          <Text style={styles.dollar}>$</Text>
          {price}
        </Text>
      </View>
      <View style={styles.col}>
        <AntDesign
          name="delete"
          size={15}
          color="#ff7518"
          style={styles.deleteIcon}
        />
        <View style={styles.quantity}>
          <AntDesign
            style={styles.icon1}
            name="minuscircle"
            size={24}
            color="black"
          />
          <Text>1</Text>
          <AntDesign
            style={styles.icon2}
            name="pluscircle"
            size={24}
            color="#ff7518"
          />
        </View>
      </View>
    </View>
  );
};
export default CartItem;
