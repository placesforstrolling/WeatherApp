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

  const [forecast, setForecast] = useState(true);
  const [date, setDate] = useState('');

  useEffect(() => {
    const date = new Date();
    const months = ['Январь','Февраль','Март','Апрель','Май','Июнь','Июль','Август','Сентябрь','Октябрь','Ноябрь','Декабрь'];
    let month = months[date.getMonth()];
    let day = date.getDate();
    let year = date.getFullYear();
    setDate(`${month} ${day}, ${year}`)
  }, []);
  
  return (

    <View style={styles.header}>
      <Text style={styles.city}>Ташкент</Text>
      <Text style={styles.date}>{date}</Text>
      
      <View style={styles.filtersWrapper}>
          <Pressable 
            style={[styles.forecast, styles.filter, forecast ? styles.filterActive : null]}
            onPress={() => setForecast(true)}
            >
            <Text style={[styles.filterText, forecast ? styles.filterTextActive : null]}>Прогноз</Text>
          </Pressable>
          <Pressable 
            style={[styles.air, styles.filter, !forecast ? styles.filterActive : null]}
            onPress={() => setForecast(false)}
            >
            <Text style={[styles.filterText, !forecast ? styles.filterTextActive : null]}>Воздух</Text>
          </Pressable>
      </View>
    </View>


  );
}

const styles = StyleSheet.create({
  filterTextActive: {
    color: '#fff'
  },
  filterActive: {
    backgroundColor: '#1A85E5'
  },
  filterText: {
    color: '#9f9fb2',
    fontSize: 16
  },
  filter: {
    paddingTop: 8,
    paddingBottom: 8,
    paddingLeft: 25,
    paddingRight: 25,
    borderRadius: 10
  },
  filtersWrapper: {
    flexDirection: 'row',
    backgroundColor: '#161540',
    borderRadius: 10
  },
  date: {
    color: '#9f9fb2',
    fontSize: 16,
    marginBottom: 25
  },
  city: {
    color: '#fff',
    fontWeight: '500',
    fontSize: 26,
    marginBottom: 10
  },
  header: {
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0)',
    marginTop: 30
  },
});

export default Header;