import React, { useState } from 'react';
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

  return (


    <RadialGradient style={{ flex: 1}}
      colors={['#0b4c86', '#0a0935']}
      stops={[0, 0.1]}
      center={[300, 50]}
      radius={3000}>
      {/* <View style={styles.header}>
        <TouchableOpacity style={styles.iconWrapper}>
          <Text>
            <Icon name="apps" style={styles.headerIcon} />
          </Text>
        </TouchableOpacity>
        <View>
          <View style={styles.location}>
            <Text>
              <Icon name="location-on" style={styles.locationIcon} />
            </Text>
            <Text style={styles.locationText}>Ohio, US</Text>
          </View>

        </View>

        <TouchableOpacity style={styles.iconWrapper}>
          <Text style={styles.headerIcon}>
            <Icon name="search" style={styles.headerIcon} />
          </Text>
        </TouchableOpacity>
      </View> */}

    </RadialGradient>

  );
}

const styles = StyleSheet.create({
  locationText: {
    fontWeight: '800',
    marginLeft: 5
  },
  locationIcon: {
    color: '#85d7cf',
    fontSize: 18,
  },
  location: {
    flexDirection: 'row',
    alignItems: 'center',

  },
  headerIcon: {
    color: '#595c63',
    fontSize: 26,
  },
  iconWrapper: {
    width: 40,
    height: 40,
    borderRadius: 12,
    backgroundColor: '#ebeef3',
    justifyContent: 'center',
    alignItems: 'center'
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 20,
    paddingTop: 10,
    paddingBottom: 5
  },
});

export default Header;