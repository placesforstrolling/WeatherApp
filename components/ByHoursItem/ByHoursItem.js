import React, { useEffect, useState } from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';

import {
  StyleSheet,
  View,
  Image,
  Text,
  TouchableOpacity,
  Pressable,
  ScrollView,
  Dimensions,
  SafeAreaView,
} from 'react-native';
import RadialGradient from 'react-native-radial-gradient';


const ByHoursItem = ({time, temp, status}) => {

    const current = parseInt(time) - parseInt(new Date().getHours()) < 1 && parseInt(time) - parseInt(new Date().getHours()) > -1;

  return (

    <View style={[styles.item, current ? {backgroundColor: '#1A85E5'} : null]}>
        <Image 
            source={status} 
            style={styles.image}
            resizeMode="contain"/>
        <View>
            <Text style={styles.time}>{time}</Text>
            <Text style={styles.temp}>{temp}°C</Text>
        </View>
    </View>


  );
}

const styles = StyleSheet.create({
    temp: {
        color: '#fff',
        fontSize: 17
    },  
    time: {
        color: '#fff',
        fontSize: 16
    },
    image: {
        height: 65,
        width: 65,
        marginRight: 10
    },
    item: {
        backgroundColor: '#10102A',
        marginLeft: 20,
        flexDirection: 'row',
        paddingTop: 10,
        paddingBottom: 10,
        paddingLeft: 20,
        paddingRight: 20,
        borderRadius: 10
    },
});

export default ByHoursItem;