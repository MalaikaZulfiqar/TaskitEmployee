import {StyleSheet, Text, View} from 'react-native';
import React, {useEffect} from 'react';
import Route from './src/navigation/index';
import {NavigationContainer} from '@react-navigation/native';
import RNBootSplash from 'react-native-bootsplash';
import { requestUserPermission,NotificationListner } from './src/utils/pushnotification_helper';
const App = () => {
  useEffect(() => {
    requestUserPermission();
    NotificationListner();
    const hideSplash = async () => {
      await RNBootSplash.hide({fade: true, duration: 500});
    };
    hideSplash();
  }, []);
  return (
    <NavigationContainer>
      <Route />
    </NavigationContainer>
  );
};

export default App;

const styles = StyleSheet.create({});
