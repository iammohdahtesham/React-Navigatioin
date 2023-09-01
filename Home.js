import React from 'react';
import {Text, TouchableOpacity, View} from 'react-native';

const Home = ({navigation}) => {
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text style={{fontSize: 30}}>you are in screen 2</Text>
      <TouchableOpacity
        style={{
          alignItems: 'center',
          backgroundColor: 'blue',
          borderRadius: 4,
          padding: 10,
        }}
        onPress={() => navigation.navigate('Screen3')}>
        <Text>Press me for screen three</Text>
      </TouchableOpacity>
    </View>
  );
};
export default Home;
