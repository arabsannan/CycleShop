import React from 'react';
import {FlatList, StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import Item from '../components/CartItem';
import AntDesign from 'react-native-vector-icons/AntDesign';
import BottomTab from '../components/BottomTab';

const cycleCards = [
  {
    id: '1',
    name: 'Pinarello Bike',
    subText: 'Mountain Bike',
    price: '1,700.00',
    image: require('../assets/img/bike2.webp'),
  },
  {
    id: '2',
    name: 'Brompton Bike',
    subText: 'Road Bike',
    price: '1,500.00',
    image: require('../assets/img/bike3.webp'),
  },
  {
    id: '3',
    name: 'Pinarello Bike',
    subText: 'Urban Bike',
    price: '1,200.00',
    image: require('../assets/img/bike5.jpg'),
  },
];

const styles = StyleSheet.create({
  container: {
    flex: 10,
  },
  backIcon: {
    justifyContent: 'flex-start',
  },
  boldText: {
    fontWeight: 'bold',
    fontSize: 16,
  },
  header: {
    flex: 0.2,
    marginHorizontal: 20,
    marginVertical: 15,
    flexDirection: 'row',
    justifyContent: 'center',
  },
  headerText: {
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
  },
  buttonView: {
    backgroundColor: '#e2884b',
    padding: 20,
    marginHorizontal: 35,
    marginVertical: 20,
    borderRadius: 15,
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  figures: {
    flex: 0.6,
    backgroundColor: '#e7e4e4de',
    padding: 25,
    borderRadius: 20,
    marginHorizontal: 15,
    justifyContent: 'center',
  },
  figureRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 5,
  },
  dollar: {
    color: '#e2884b',
    fontSize: 15,
  },
  boldText: {
    color: 'black',
    fontWeight: 'bold',
    fontSize: 18,
  },
  figureTitle: {
    fontSize: 16,
    color: '#a5a5a5',
  },
  figureHead2: {
    color: 'black',
    fontSize: 18,
    fontWeight: 'bold',
  },
  borderHead: {
    borderBottomWidth: 2,
    borderStyle: 'dashed',
    borderBottomColor: '#bebebe',
  },
  bottom: {
    paddingBottom: 10,
  },
  bikes: {
    flex: 2.5,
    marginTop: 20,
    marginBottom: 20,
  },
  headerText: {
    color: 'black',
    fontSize: 18,
    fontWeight: 'bold',
  },
  headerSubText: {
    color: '#a5a5a5',
    fontSize: 17,
  },
  backArrow: {
    position: 'absolute',
    top: 5,
    left: 0,
  },
});

const Cart = () => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <AntDesign
          style={styles.backArrow}
          name="arrowleft"
          size={24}
          color="black"
        />
        <View>
          <Text style={styles.headerText}>Cart list</Text>
          <Text style={styles.headerSubText}>(3 items)</Text>
        </View>
      </View>

      <View style={styles.bikes}>
        <FlatList
          data={cycleCards}
          renderItem={({item}) => {
            return (
              <Item
                name={item.name}
                price={item.price}
                subText={item.subText}
                image={item.image}
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
            <Text style={styles.dollar}>$ </Text>3,400.00
          </Text>
        </View>
        <View style={[styles.figureRow, styles.borderHead, styles.bottom]}>
          <Text style={styles.figureTitle}>Shipping Fee</Text>
          <Text style={styles.boldText}>
            <Text style={styles.dollar}>$ </Text>100.00
          </Text>
        </View>
        <View style={[styles.figureRow]}>
          <Text style={styles.figureHead2}>Total</Text>
          <Text style={styles.boldText}>
            <Text style={styles.dollar}>$ </Text>3,500.00
          </Text>
        </View>
      </View>
      <View style={styles.buttonView}>
        <TouchableOpacity>
          <Text style={styles.buttonText}>Proceed to Checkout</Text>
        </TouchableOpacity>
      </View>
      <View>
        <BottomTab />
      </View>
    </View>
  );
};
export default Cart;
