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
import generateUrl from '../utils/generateUrl';

const ByHours = ({forecastWeather}) => {
    const [weather, setWeather] = useState([]);

    useEffect(() => {
      setWeather(forecastWeather);
     }, [forecastWeather]);
    
  return (
    <View style={styles.byHours}>
        <Text style={styles.title}>Сегодня</Text>

        <ScrollView showsHorizontalScrollIndicator={false} horizontal={true}>
          {weather.length !== 0 ? weather.forecast.forecastday[0].hour.map((item, i) => (
            <ByHoursItem
              key={i}
              temp={item.temp_c}
              time={item.time.slice(-5)}
              status={generateUrl(item.time.slice(-5), 
                                  weather.forecast.forecastday[0].astro.sunset,
                                  weather.forecast.forecastday[0].astro.sunrise, 
                                  item.condition.code)}
              />
          )) : null}
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
    byHours: {
        backgroundColor: 'rgba(0, 0, 0, 0)',
        marginTop: 15,
    },
});

export default ByHours;