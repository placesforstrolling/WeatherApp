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
import Geolocation from 'react-native-geolocation-service';

import { requestPermissions } from './requestPermissions';
import { getCurrentWeather } from '../../api/api';
import generateUrl from '../generateUrl';

// import Geo from './RequestLocation';

const CurrentWeather = () => {

  const [location, setLocation] = useState('None');
  const [weather, setWeather] = useState([]);
  const [hour, setHour] = useState(new Date().getHours())
  useEffect(() => {
    requestPermissions();
    Geolocation.getCurrentPosition(
      (position) => {
        console.log(position);
        getCurrentWeather(position.coords.latitude, position.coords.longitude, setWeather);
        console.log(weather);
      },
      (error) => {
        // See error code charts below.
        console.log(error.code, error.message);
      },
      { enableHighAccuracy: true, timeout: 15000, maximumAge: 10000 }
  );
  }, []);
  
  return (

    <View style={styles.weather}>
      {weather.length !== 0 ?  <Image
          source={generateUrl(hour, weather.forecast.forecastday[0].astro.sunset, weather.current.condition.code)} 
          style={styles.weatherImage}
          resizeMode="contain"/> : null}
       
        <View style={styles.weatherStatisticWrapper}>
          <View style={styles.singleStatistic}>
            <Text style={styles.statisticTitle}>Темп</Text>
            <Text style={styles.statisticValue}>{weather?.current?.temp_c}</Text>
          </View>
          <View style={styles.singleStatistic}>
            <Text style={styles.statisticTitle}>Ветер</Text>
            <Text style={styles.statisticValue}>{weather?.current?.wind_kph}км/ч</Text>
          </View>
          <View style={styles.singleStatistic}>
            <Text style={styles.statisticTitle}>Влажность</Text>
            <Text style={styles.statisticValue}>{weather?.current?.humidity}%</Text>
          </View>
        </View>
    </View>


  );
}

const styles = StyleSheet.create({
  statisticValue: {
    color: '#fff',
    fontWeight: '500',
    fontSize: 18
  },
  statisticTitle: {
    fontSize: 14,
    color: '#9f9fb2'
  },
  singleStatistic: {
    alignItems: 'center'
  },
  weatherStatisticWrapper: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '100%',
    marginTop: 15
  },
    weatherImage: {
        height: 270
    },
    weather: {
        alignItems: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0)',
        marginTop: 30
    },
});

export default CurrentWeather;