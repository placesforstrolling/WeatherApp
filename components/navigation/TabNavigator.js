import React from "react";
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import AntDesign from 'react-native-vector-icons/AntDesign';

import HomeScreen from "../../screens/Home";
import SearchScreen from "../../screens/Search";
import ByDaysScreen from "../../screens/ByDays";
import SettingsScreen from "../../screens/Settings";

const Tab = createBottomTabNavigator();

const TabNavigator = () => {

    // return (
    //     <Tab.TabNavigator>
    //         <Tab.Screen name="Home" component={HomeScreen}/>
    //         <Tab.Screen name="Search" component={SearchScreen}/>
    //         <Tab.Screen name="ByDays" component={ByDaysScreen}/>
    //         <Tab.Screen name="Settings" component={SettingsScreen}/>
    //     </Tab.TabNavigator>
    // )
    return (
        <Tab.Navigator
          initialRouteName="Home"
          screenOptions={{
            tabBarActiveTintColor: '#fff',
            tabBarInactiveTintColor: '#aaaab1',
            headerShown: false,
            tabBarStyle: {
                backgroundColor: '#070626',
                borderWidth: 0,
                borderTopColor: '#070626',
              },
            showLabel: false
          }}
        >
            
          <Tab.Screen
            title=""
            name="Home"
            component={HomeScreen}
            options={{
              tabBarIcon: ({ color, size }) => (
                <AntDesign name="home" color={color} size={32} />
              ),
            }}
            screenOptions={{
                headerShown: false
              }}
          />
          <Tab.Screen
            name="Search"
            component={SearchScreen}
            options={{
              tabBarIcon: ({ color, size }) => (
                <AntDesign name="search1" color={color} size={32} />
              ),
            //   tabBarBadge: 5,
            }}
          />
          <Tab.Screen
            title=""
            name="ByDay"
            component={ByDaysScreen}
            options={{
              tabBarIcon: ({ color, size }) => (
                <AntDesign name="calendar" color={color} size={32} />
              ),
            }}
          />
            <Tab.Screen
            name="Settings"
            component={SettingsScreen}
            options={{
              tabBarIcon: ({ color, size }) => (
                <AntDesign name="setting" color={color} size={32} />
              ),
            }}
          />
        </Tab.Navigator>
      );
}

export default TabNavigator;