import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import CancelledOrders from '../CancelledOrders';
import CompletedOrders from '../CompletedOrders';
import PendingOrders from '../PendingOrders';
import HomeHeader from '../../components/HomeHeader';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import {colors, fonts} from '../../constants';
const Tab = createMaterialTopTabNavigator();
const Home = () => {
  return (
    <>
      <View style={{paddingHorizontal: 15, backgroundColor: '#ffffff'}}>
        <HomeHeader screenName={'home'} />
      </View>
      <Tab.Navigator
        screenOptions={{
          tabBarStyle: {elevation: 0},
          tabBarActiveTintColor: colors.primaryColor,
          tabBarInactiveTintColor: colors.black,
          tabBarLabelStyle: {
            fontFamily: fonts.medium,
            fontSize: 14,
            textTransform: 'none',
          },
          tabBarIndicatorStyle: {backgroundColor: colors.primaryColor},
        }}>
        <Tab.Screen name="Pending" component={PendingOrders} />
        <Tab.Screen name="Cancelled" component={CancelledOrders} />
        <Tab.Screen name="Completed" component={CompletedOrders} />
      </Tab.Navigator>
    </>
  );
};

export default Home;
