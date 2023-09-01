import 'react-native-gesture-handler';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createDrawerNavigator} from '@react-navigation/drawer';
import Login from '../screens/Login';
import Home from '../screens/Home';
import Screen3 from '../screens/Screen3';

const Drawer = createDrawerNavigator();

const DrawerNav = () => {
  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="Login">
        <Drawer.Screen name="Login" component={Login} />
        <Drawer.Screen name="Home" component={Home} />
        <Drawer.Screen name="Screen3" component={Screen3} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
};
export default DrawerNav;
