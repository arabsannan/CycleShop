import React from 'react';
import {StyleSheet, Text, View, FlatList, TouchableOpacity} from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Feather from 'react-native-vector-icons/Feather';
import BikeCard from '../components/Card';
import BottomTab from '../components/BottomTab';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDrection: 'column',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  titleRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  title1: {
    marginRight: 5,
    color: '#bcbcbc',
    fontWeight: '500',
    fontSize: 18,
  },
  title2: {
    color: '#e2884b',
    fontWeight: '700',
    fontSize: 25,
  },
  title3: {
    fontSize: 18,
    color: 'black',
    fontWeight: 'bold',
  },

  categoryBox: {
    paddingVertical: 10,
    paddingHorizontal: 15,
    backgroundColor: '#e7e4e4de',
    marginHorizontal: 10,
    marginVertical: 15,
    borderRadius: 7,
  },
  categoryText: {
    fontSize: 16,
    color: '#a5a5a5',
  },

  boldText: {
    fontWeight: 'bold',
    fontSize: 18,
  },
  bikes: {
    flex: 5,
  },
  bottomNav: {
    flex: 0.8,
  },
});

const cycleCards = [
  {
    id: '1',
    name: 'Pinarello Bike',
    price: '1,700.00',
    image: require('../assets/img/bike2.webp'),
  },
  {
    id: '2',
    name: 'Brompton Bike',
    price: '1,500.00',
    image: require('../assets/img/bike3.webp'),
  },
  {
    id: '3',
    name: 'Schwinn Bike',
    price: '1,200.00',
    image: require('../assets/img/bike5.jpg'),
  },
  {
    id: '4',
    name: 'Norco Bike',
    price: '980.00',
    image: require('../assets/img/bike4.webp'),
  },
];

const categories = [
  {id: '1a', name: 'All'},
  {id: '2', name: 'Roadbike'},
  {id: '3', name: 'Mountain'},
  {id: '4', name: 'Urban'},
];

const Category = ({name}) => {
  return (
    <View style={styles.categoryBox}>
      <Text style={styles.categoryText}>{name}</Text>
    </View>
  );
};

const ShopItem = () => {
  return (
    <View style={styles.container}>
      <View style={{margin: 15}}>
        <View style={styles.header}>
          <MaterialCommunityIcons
            style={{marginRight: 10}}
            name="drag-horizontal-variant"
            size={24}
            color="black"
          />
          <FontAwesome name="bicycle" size={30} color="black" />
          <View
            style={{
              flexDirection: 'row',
            }}>
            <Feather
              style={{marginRight: 10}}
              name="search"
              size={24}
              color="black"
            />
            <Feather name="bell" size={24} color="black" />
          </View>
        </View>
        <View style={styles.titleRow}>
          <Text style={styles.title1}>The World's</Text>
          <Text style={styles.title2}>Best Bike</Text>
        </View>
        <Text style={styles.title3}>Categories</Text>
        <View>
          <FlatList
            data={categories}
            renderItem={({item}) => {
              return <Category name={item.name} />;
            }}
            keyExtractor={item => {
              item.id;
            }}
            horizontal
            showsHorizontalScrollIndicator={false}
          />
        </View>
        <View style={StyleSheet.bikes}>
          <FlatList
            data={cycleCards}
            renderItem={({item}) => {
              return (
                <BikeCard
                  name={item.name}
                  price={item.price}
                  image={item.image}
                />
              );
            }}
            keyExtractor={item => {
              item.id;
            }}
            horizontal={false}
            numColumns={2}
          />
        </View>
      </View>
      <View>
        <BottomTab />
      </View>
    </View>
  );
};

export default ShopItem;
