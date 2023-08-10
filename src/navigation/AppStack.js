import {createNativeStackNavigator} from '@react-navigation/native-stack';
import * as React from 'react';
import FocusAwareStatusBar from '../components/FocusAwareStatusBar';
import BottomBar from './BottomNavigation';
import UserProfile from '../screens/UserProfile';
import ServiceDetail from '../screens/AboutServices';
const Stack = createNativeStackNavigator();

const AppStack = () => {
  return (
    <>
      <FocusAwareStatusBar
        animated={true}
        backgroundColor={'#ffffff'}
        barStyle={'dark-content'}
      />
      <Stack.Navigator
        screenOptions={{headerShown: false, animation: 'slide_from_right'}}>
        <Stack.Screen name="HomeStack" component={BottomBar} />
        <Stack.Screen name="UserProfile" component={UserProfile} />
        <Stack.Screen name="ServiceDetail" component={ServiceDetail}/>
      </Stack.Navigator>
    </>
  );
};

export default AppStack;
