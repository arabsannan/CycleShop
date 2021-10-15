import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import Login from './components/Login';
import ShopItem from './components/ShopItem';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
const MainNavigator = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <MainNavigator.Navigator
        screenOptions={{headerShown: false}}
        initialRouteName="Login">
        <MainNavigator.Screen name="ShopItem" component={ShopItem} />
        <MainNavigator.Screen name="Login" component={Login} />
      </MainNavigator.Navigator>
    </NavigationContainer>
  );
};

export default App;
