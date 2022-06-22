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

const Home = ({navigation}) => {

    return (
        <RadialGradient style={{ flex: 1}}
        colors={['#647DEE', '#7F53AC']}
        stops={[0, 0.74]}
        center={[100, 10]}
        radius={315}>
            <SafeAreaView style={styles.body}>
                <Header/>
            </SafeAreaView>
        </RadialGradient>
       
    );
}

const styles = StyleSheet.create({
    body: {
        backgroundColor: '#fff',
        paddingBottom: 0,
        flex: 1,
    },
    text: {
        fontFamily: 'Dosis',
        fontWeight: '800',
        fontSize: 30
    }
})

export default Home;