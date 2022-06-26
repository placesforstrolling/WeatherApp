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

import ByHoursItem from '../ByHoursItem/ByHoursItem';

const ByHours = () => {
    const iconPath = '../../assets/img/3dweathericons/';
  return (
    <View style={styles.byHours}>
        <Text style={styles.title}>Сегодня</Text>

        <ScrollView showsHorizontalScrollIndicator={false} horizontal={true}>
            <ByHoursItem 
                temp={32}
                time={'16.00'}
                status={require(iconPath + 'sun/4.png')}
                />
                <ByHoursItem 
                temp={30}
                time={'17.00'}
                status={require(iconPath + 'moon/19.png')}
                />
                <ByHoursItem 
                temp={30}
                time={'17.00'}
                status={require(iconPath + 'sun/8.png')}
                />
                <ByHoursItem 
                temp={30}
                time={'17.00'}
                status={require(iconPath + 'moon/20.png')}
                />
        </ScrollView>
    </View>


  );
}

const styles = StyleSheet.create({
    title: {
        color: '#CECED2',
        fontSize: 16,
        marginLeft: 20,
        marginBottom: 15
    },
    byHours: {
        backgroundColor: 'rgba(0, 0, 0, 0)',
        marginTop: 15,
    },
});

export default ByHours;