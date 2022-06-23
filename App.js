import React from 'react';

import {createSwitchNavigator } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { NavigationContainer } from '@react-navigation/native';
import TabNavigator from './components/navigation/TabNavigator';


export default function App() {
  return (
    <NavigationContainer>
      <TabNavigator />
    </NavigationContainer>
  );
}

// import React, {Component, useEffect} from 'react';
// import {createAppContainer, createSwitchNavigator} from 'react-navigation';
// import 'react-native-gesture-handler';
// import {createStackNavigator} from 'react-navigation-stack';
// import {createBottomTabNavigator} from 'react-navigation-tabs';

// import Feather from 'react-native-vector-icons/Feather';

// import Home from './screens/Home';

// const MainStack = createStackNavigator({
//   Home: {
//     screen: Home,
//     navigationOptions: {
//       headerShown: false,
//     },
//   },
// });

// const MainTabs = createBottomTabNavigator(
//   {
//     HomeTab: {
//       screen: MainStack,

//       navigationOptions: {
//         tabBarLabel: 'Главная',
//         tabBarIcon: ({tintColor}) => (
//           <Feather name="home" color={tintColor} size={25} />
//         ),
//       },
//     },
//   },
//   {
//     tabBarOptions: {
//       activeTintColor: '#2979FF',
//       inactiveTintColor: 'black',
//       tabStyle: {
//         borderWidth: 0,
//       },
//       style: {
//         paddingTop: 5,

//         paddingLeft: 5,
//         paddingRight: 5,
//         borderWidth: 0,
//         elevation: 0,
//         borderTopColor: 'white',
//         // shadowColor: '#F9F9F9',
//         // borderTopColor: '#eaeaec',
//         // shadowColor: 'silver',
//         // shadowOffset: {
//         //   width: 0,
//         //   height: 2,
//         // },
//         // shadowOpacity: 0.25,
//         // shadowRadius: 3.84,

//         // elevation: 5,

//         backgroundColor: 'white',
//       },
//     },
//   },
// );

// const AppModalStack = createStackNavigator(
//   {
//     App: MainTabs,
//   },

//   {
//     headerMode: 'flaot',
//     mode: 'modal',
//     transparentCard: true,
//   },
// );

// const App = createSwitchNavigator({
//   Home: {
//     screen: AppModalStack,
//   },
// });

// export default createAppContainer(App);
