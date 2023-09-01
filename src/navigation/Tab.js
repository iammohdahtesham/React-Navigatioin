import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Login from '../screens/Login';
import Home from '../screens/Home';
import Screen3 from '../screens/Screen3';

const Tab = createBottomTabNavigator();
const TabNav = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Login" component={Login} />
        <Tab.Screen name="Home" component={Home} />
        <Tab.Screen name="Screen3" component={Screen3} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default TabNav;
