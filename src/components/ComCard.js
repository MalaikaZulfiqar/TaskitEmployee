import React from 'react';
import {Image, Pressable, StyleSheet, Text, View} from 'react-native';
import {scale} from 'react-native-size-matters';
import {colors, fonts} from '../constants';
import globalStyles from '../styles/globalStyles';
const  ComCard = ({customerImg, type, customerName, serviceName, onPress,bookingTime}) => {
  return (
    <Pressable style={styles.card} onPress={onPress}>
      <Image style={styles.img} source={{uri:customerImg}} />
      <View
        style={{
          flex: 1,
          marginLeft: 10,
          justifyContent: 'space-between',
          height: scale(100),
        }}>
        <View>
          <View style={globalStyles.justifyBtwRow}>
            <Text numberOfLines={1} style={globalStyles.font16R}>
              Task: {serviceName}
            </Text>
          </View>
          <Text
            numberOfLines={1}
            style={[globalStyles.font14, {color: '#757575'}]}>
            From: {customerName}
          </Text>
        </View>
        <View style={styles.bookingTimesContainer}>
            <Text style={styles.bookingTime}>{bookingTime}</Text>
          </View>
        {/* <View style={styles.bottomBox}>
          <View
            style={[
              styles.smBox,
              {backgroundColor: type == 'Cancelled' ? '#FFF8E5' : '#EBF8FE'},
            ]}>
            <Text
              style={[
                globalStyles.font14,
                {
                  marginTop: 3,
                  marginLeft: 5,
                  fontFamily: fonts.bold,
                  color: type == 'Cancelled' ? '#F7893A' : '#419EE0',
                },
              ]}>
              {type}
            </Text>
          </View>
        </View> */}
      </View>
    </Pressable>
  );
};

export default ComCard;

const styles = StyleSheet.create({
  card: {
    padding: 10,
    backgroundColor: colors.white,
    borderRadius: 10,
    flexDirection: 'row',
    marginBottom: 20,
    width: '100%',
  },
  img: {
    height: scale(100),
    width: scale(100),
    resizeMode: 'center',
  },
  smBox: {
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    padding: 10,
    flexDirection: 'row',
    marginRight: 15,
    width: '100%',
  },
  bottomBox: {
    flexDirection: 'row',
    // justifyContent: 'space-around',
    // marginVertical: 10,
  },
  bookingTimesContainer: {
    marginTop: 2,
    marginBottom: 2
  },
  bookingTimeSlot: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 4,
  },
});
