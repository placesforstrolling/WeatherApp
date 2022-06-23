import React, { useEffect, useState } from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';

import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  Pressable,
  ScrollView,
  Dimensions,
  SafeAreaView,
} from 'react-native';
import RadialGradient from 'react-native-radial-gradient';


const Header = () => {
  
  return (

    <View style={styles.weather}>
        <Image source={{uri: '../'}}/>
    </View>


  );
}

const styles = StyleSheet.create({
  weather: {
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0)',
    marginTop: 50
  },
});

export default Header;