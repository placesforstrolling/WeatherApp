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

// import Geo from './RequestLocation';

const CurrentWeather = ({currentWeather}) => {

  const [location, setLocation] = useState('None');
  const [weather, setWeather] = useState([]);
  const [hour, setHour] = useState(new Date().getHours());
  
  useEffect(() => {
   setWeather(currentWeather);
  }, [currentWeather]);
  
  return (

    <View style={styles.weather}>
      {console.log(weather)}
      {(weather.length !== 0) ?  <Image
          source={generateUrl(hour, 
                              weather.forecast.forecastday[0].astro.sunset, 
                              weather.forecast.forecastday[0].astro.sunrise, 
                              weather.current.condition.code)} 
          style={styles.weatherImage}
          resizeMode="contain"/> : null}
       
        <View style={styles.weatherStatisticWrapper}>
          <View style={styles.singleStatistic}>
            <Text style={styles.statisticTitle}>Темп</Text>
            <Text style={styles.statisticValue}>{weather?.current?.temp_c}°C</Text>
          </View>
          <View style={styles.singleStatistic}>
            <Text style={styles.statisticTitle}>Ветер</Text>
            <Text style={styles.statisticValue}>{weather?.current?.wind_kph} км/ч</Text>
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