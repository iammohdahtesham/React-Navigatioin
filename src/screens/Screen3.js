/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {Text, TouchableOpacity, View, StyleSheet} from 'react-native';

const Screen3 = ({navigation}) => {
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text style={{fontSize: 30}}> you are in screen 3</Text>
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('Login')}>
        <Text>back to login page</Text>
      </TouchableOpacity>
    </View>
  );
};
const styles = StyleSheet.create({
  button: {
    margin: 20,
    alignItems: 'center',
    backgroundColor: 'red',
    borderRadius: 4,
    padding: 20,
  },
});
export default Screen3;
