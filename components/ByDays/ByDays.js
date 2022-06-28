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

import generateUrl from '../utils/generateUrl';

const ByDays = ({forecastWeather}) => {
    const [weather, setWeather] = useState([]);

    useEffect(() => {
      setWeather(forecastWeather);
     }, [forecastWeather]);
    
  return (
    <View style={styles.byDays}>
        <View style={styles.titleWrapper}>
            <Text style={styles.title}>Прогноз по дням</Text>
            <Icon name="calendar-month-outline" style={styles.titleIcon}/>
        </View>

        <ScrollView showsVerticalScrollIndicator={false}>
            <Text>ByDays</Text>
        </ScrollView>
    </View>


  );
}

const styles = StyleSheet.create({
    title: {
        color: '#CECED2',
        fontSize: 22,
        marginLeft: 20,
        marginBottom: 20
    },
    byDays: {
        backgroundColor: 'rgba(0, 0, 0, 0)',
        marginTop: 15,
    },
});

export default ByDays;