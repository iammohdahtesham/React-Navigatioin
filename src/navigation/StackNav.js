import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Login from '../screens/Login';
import Home from '../screens/Home';
import Screen3 from '../screens/Screen3';

const Stack = createNativeStackNavigator();

const StackNav = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerStyle: {backgroundColor: 'pink'},
        }}>
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Screen3" component={Screen3} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
export default StackNav;
