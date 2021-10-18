import React from 'react';
import Login from './screens/Login';
import ShopItem from './screens/ShopItem';
import Cart from './screens/CartList';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

const MainNavigator = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <MainNavigator.Navigator
        screenOptions={{headerShown: false}}
        initialRouteName="Cart">
        <MainNavigator.Screen name="Cart" component={Cart} />
        <MainNavigator.Screen name="ShopItem" component={ShopItem} />
        <MainNavigator.Screen name="Login" component={Login} />
      </MainNavigator.Navigator>
    </NavigationContainer>
  );
};

export default App;
