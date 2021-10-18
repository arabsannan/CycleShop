import React from 'react';
import {FlatList, StyleSheet, Text, View, Image} from 'react-native';
// import CheckoutButton from '../components/CheckoutButton';
import CartItem from '../components/CartItem';
import BottomTab from '../components/BottomTab';
// import {useNavigation} from '@react-navigation/core';

// const navigation = useNavigation();

const handleReturn = () => {
  navigation.goBack();
};

const cycleCards = [
  {
    id: '1',
    name: 'Pinarello Bike',
    subText: 'Mountain Bike',
    price: '1,700.00',
  },
  {
    id: '2',
    name: 'Brompton Bike',
    subText: 'Road Bike',
    price: '1,500.00',
  },
  {
    id: '3',
    name: 'Pinarello Bike',
    subText: 'Urban Bike',
    price: '1,200.00',
  },
];

const styles = StyleSheet.create({
  container: {
    flex: 10,
    // marginHorizontal:20,
  },
  greyText: {
    color: '#BEBEBE',
  },
  backIcon: {
    justifyContent: 'flex-start',
  },
  row: {
    flexDirection: 'row',
    marginHorizontal: 20,
  },
  boldText: {
    fontWeight: 'bold',
    fontSize: 16,
  },
  quantity: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
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
  header: {
    flex: 0.2,
    marginHorizontal: 20,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  headerText: {
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
  },
  button: {
    flex: 0.8,
    justifyContent: 'center',
    marginHorizontal: 20,
    // alignItems:"center"
  },
  cards: {
    flex: 0.6,
  },
  deleteIcon: {
    // padding:3,
    backgroundColor: '#fff',
  },
  figures: {
    flex: 0.6,
    backgroundColor: '#f5f5f5',
    padding: 25,
    borderRadius: 10,
    marginHorizontal: 20,
    justifyContent: 'center',
  },
  figureRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 5,
  },

  dollar: {
    color: '#ff7518',
    fontSize: 12,
  },
  boldText: {
    fontWeight: 'bold',
    fontSize: 16,
  },
  figureTitle: {
    color: '#BEBEBE',
  },
  figureHead2: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  borderHead: {
    borderBottomWidth: 2,
    borderBottomStyle: 'dotted',
    borderBottomColor: '#BEBEBE',
  },
  bottom: {
    paddingBottom: 7,
  },
  bikes: {
    flex: 2.5,
    // flexDirection:"row",
    marginTop: 20,
    marginBottom: 20,
  },
});

const CartList = () => {
  return (
    <View style={styles.container}>
      <View style={styles.bikes}>
        <FlatList
          data={cycleCards}
          renderItem={({item}) => {
            return (
              <CartItem
                name={item.name}
                price={item.price}
                subText={item.subText}
              />
            );
          }}
          keyExtractor={item => {
            item.id;
          }}
        />
      </View>
      <View style={styles.figures}>
        <View style={styles.figureRow}>
          <Text style={styles.figureTitle}>SubTotal</Text>
          <Text style={styles.boldText}>
            <Text style={styles.dollar}>$</Text>3,400.00
          </Text>
        </View>
        <View style={[styles.figureRow, styles.borderHead, styles.bottom]}>
          <Text style={styles.figureTitle}>Shipping Fee</Text>
          <Text style={styles.boldText}>
            <Text style={styles.dollar}>$</Text>100.00
          </Text>
        </View>
        <View style={[styles.figureRow]}>
          <Text style={styles.figureHead2}>Total</Text>
          <Text style={styles.boldText}>
            <Text style={styles.dollar}>$</Text>3,500.00
          </Text>
        </View>
      </View>

      <View style={styles.button}>{/* <CheckoutButton /> */}</View>
      <View>
        <BottomTab />
      </View>
    </View>
  );
};
export default CartList;
