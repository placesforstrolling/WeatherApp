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

const HomeScreen = ({navigation}) => {

    return (

        <RadialGradient style={{ flex: 1}}
        colors={['#0b4c86', '#0a0935']}
        stops={[0, 0.1]}
        center={[300, 50]}
        radius={3000}>
            <SafeAreaView style={styles.body}>
                <Header/>
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