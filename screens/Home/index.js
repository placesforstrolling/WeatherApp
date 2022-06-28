import React, {useState, useEffect} from "react";

import {
    Text, 
    SafeAreaView,
    StyleSheet,
    ScrollView,
    View
} from 'react-native';
import RadialGradient from 'react-native-radial-gradient';
import Geolocation from 'react-native-geolocation-service';

import { requestPermissions } from '../../components/utils/requestPermissions';
import { getCurrentWeather } from '../../api/api'

import Header from "../../components/Header/Header";
import CurrentWeather from "../../components/CurrentWeather/CurrentWeather";
import ByHours from "../../components/ByHours/ByHours";

const HomeScreen = ({navigation}) => {

    const [weather, setWeather] = useState([]);

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
    }, [])

    return (
        <RadialGradient 
            style={{ flex: 1}}
            colors={['#055396', '#070626']}
            stops={[0, 0.1]}
            center={[300, 50]}
            radius={3000}>
            <SafeAreaView style={styles.body}>
                <Header/>
                <CurrentWeather currentWeather={weather}/>
                <ByHours forecastWeather={weather}/>
            </SafeAreaView>
      </RadialGradient>
    );
}

const styles = StyleSheet.create({
    body: {
        paddingBottom: 0,
        flex: 1,
    },
    text: {
        fontFamily: 'Dosis',
        fontWeight: '800',
        fontSize: 30
    }
})

export default HomeScreen;