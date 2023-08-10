import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import Icon from 'react-native-vector-icons/SimpleLineIcons';
import Logo from '../assets/images/png/LOGO.png';
import {colors} from '../constants';
import globalStyles from '../styles/globalStyles';
const HomeHeader = ({screenName, title}) => {
  const navigation = useNavigation();
  return (
    <View style={styles.header}>
      <View style={styles.smBox}>
        {screenName === 'home' ? (
          <View style={styles.box}>
            <Image source={Logo} style={styles.logo} />
            <Text style={[globalStyles.font18M, {marginLeft: 10}]}>
              Taskkit<Text style={{color: colors.primaryColor}}>Driver</Text>
            </Text>
          </View>
        ) : (
          <TouchableOpacity
            onPress={() => {
              navigation.goBack();
            }}>
            <Icon name="arrow-left" color={'#000000'} size={20} />
          </TouchableOpacity>
        )}
      </View>
      {title && (
        <View style={[styles.smBox, {flex: 1}]}>
          <Text style={[globalStyles.font16R, {textAlign: 'center'}]}>
            {title}
          </Text>
        </View>
      )}
    </View>
  );
};

export default HomeHeader;

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingTop: 10,
    justifyContent: 'space-between',
    paddingBottom: 10,
  },
  logo: {
    width: 30,
    height: 30,
    resizeMode: 'center',
  },
  box: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  smBox: {},
});
