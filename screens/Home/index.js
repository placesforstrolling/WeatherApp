import React from "react";

import {
    Text, 
    SafeAreaView,
    StyleSheet,
    ScrollView,
    View
} from 'react-native';
import RadialGradient from 'react-native-radial-gradient';

import Header from "../../components/Header/Header";
import CurrentWeather from "../../components/CurrentWeather/CurrentWeather";
import ByHours from "../../components/ByHours/ByHours";

const HomeScreen = ({navigation}) => {

    return (

        <RadialGradient style={{ flex: 1}}
        colors={['#055396', '#070626']}
        stops={[0, 0.1]}
        center={[300, 50]}
        radius={3000}>
            <SafeAreaView style={styles.body}>
                <Header/>
                <CurrentWeather/>
                <ByHours/>
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