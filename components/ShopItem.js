import React from 'react';
import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Feather from 'react-native-vector-icons/Feather';

const ShopItem = () => {
  return (
    <View style={{flex: 1, flexDrection: 'column'}}>
      <View
        style={{
          flex: 1,
          marginTop: 20,
          marginHorizontal: 20,
          flexDirection: 'row',
          justifyContent: 'space-between',
        }}>
        <MaterialCommunityIcons
          style={{marginRight: 10,}}
          name="drag-horizontal-variant"
          size={24} color="black"
        />
        <FontAwesome name="bicycle" size={30} color="black"/>
        <View
          style={{
            flexDirection: 'row',
          }}>
          <Feather style={{marginRight: 10}} name="search" size={24} color="black" />
          <Feather name="bell" size={24} color="black"/>
        </View>
      </View>
      <View
        style={{
          flex: 1,
          marginTop: 0,
          marginHorizontal: 20,
          flexDirection: 'row',
        }}>
        <Text style={{marginRight: 5, color: '#bcbcbc', fontWeight: '500'}}>
          The World's
        </Text>
        {/* <Text style={{color: '#fa7e39', fontWeight: '700', fontSize: '32px'}}>
          Best Bike
        </Text> */}
      </View>
    </View>
  );
};

export default ShopItem;
