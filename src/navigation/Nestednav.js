import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Profile1 from '../screens/profile1';
import Profile2 from '../screens/profile2';
import Home from '../screens/Home';
import Login from '../screens/Login';
import Screen3 from '../screens/Screen3';

const Drawer = createDrawerNavigator();
const Tab = createBottomTabNavigator();

const TabNav = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Profile1" component={Profile1} />
      <Tab.Screen name="Profile2" component={Profile2} />
    </Tab.Navigator>
  );
};
const NestedNav = () => {
  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="Login">
        <Drawer.Screen name="Login" component={Login} />
        <Drawer.Screen name="TabNav" component={TabNav} />
        <Drawer.Screen name="Home" component={Home} />
        <Drawer.Screen name="Screen3" component={Screen3} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
};
export default NestedNav;
