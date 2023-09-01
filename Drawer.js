import 'react-native-gesture-handler';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createDrawerNavigator} from '@react-navigation/drawer';
import Login from './Login';
import Home from './Home';
import Screen3 from './Screen3';

const Drawer = createDrawerNavigator();

const DrawerNav = () => {
  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="login">
        <Drawer.Screen name="login" component={Login} />
        <Drawer.Screen name="Home" component={Home} />
        <Drawer.Screen name="Screen3" component={Screen3} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
};
export default DrawerNav;
