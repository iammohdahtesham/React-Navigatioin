/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {Text, TouchableOpacity, View} from 'react-native';

const Screen3 = ({navigation}) => {
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text>you are in screen 3</Text>
      <TouchableOpacity
        style={{
          alignItems: 'center',
          backgroundColor: 'red',
          borderRadius: 4,
          padding: 10,
        }}
        onPress={() => navigation.navigate('Login')}>
        <Text>back to login page</Text>
      </TouchableOpacity>
    </View>
  );
};
export default Screen3;
