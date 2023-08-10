import React, { useState } from 'react';
import {
  Image,
  Pressable,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  ActivityIndicator
} from 'react-native';
import { scale } from 'react-native-size-matters';
import { colors, fonts } from '../constants';
import globalStyles from '../styles/globalStyles';
// import img from '../assets/images/png/cardImg.png';
import { update_status } from '../services/ApiService';
const ServiceCard = ({ customerImg, task, customerName, charges, onPress, fetchBookings, id, bookingTime, bookingDay }) => {
const [isLoading, setIsLoading] = useState(false);

  const updateStatus = async () => {
    setIsLoading(true);

    console.log(id);
    const response = await update_status(id, 'completed');
    if (response.result === true) {
      console.log(response.message);
      fetchBookings();
      setIsLoading(false);
    }
  };

  return (
    <Pressable style={styles.card} onPress={onPress}>
      <View style={styles.box}>
        <Image style={styles.img} source={{ uri: customerImg }} />
        <View
          style={{
            flex: 1,
            marginLeft: 10,
            justifyContent: 'space-between',
            height: scale(100),
          }}>
          <View>
            <View style={globalStyles.justifyBtwRow}>
              <Text numberOfLines={2} style={globalStyles.font16R}>
                Task: {task}
              </Text>
            </View>
            <Text
              numberOfLines={1}
              style={[globalStyles.font14, { color: '#585858' }]}>
              from: {customerName}
            </Text>
          </View>
          <View style={styles.bookingTimesContainer}>
            <Text style={styles.bookingTime}>{bookingTime}</Text>
          </View>
          <View style={styles.box}>
            <View
              style={[
                styles.smBox,
                { backgroundColor: '#EFEEFF', width: '100%' },
              ]}>
              <Text
                numberOfLines={1}
                style={[
                  globalStyles.font14,
                  { fontFamily: fonts.bold, color: '#6C63FF' },
                ]}>
                Budget: {`${charges}`}$
              </Text>
            </View>
          </View>
        </View>
      </View>
      <View style={styles.bottomBox}>
        <TouchableOpacity
          style={[styles.btn, { backgroundColor: '#E8F5EC', width: '45%' }]}
          onPress={updateStatus}
        >
          <Text
            style={[
              globalStyles.font14,
              { fontFamily: fonts.medium, color: '#49D17C' },
            ]}>
            Complete
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.btn, { backgroundColor: '#EBF8FE', width: '45%' }]}
        >
          <Text
            style={[
              globalStyles.font14,
              { fontFamily: fonts.medium, color: '#419EE0' },
            ]}>
            Direction
          </Text>
        </TouchableOpacity>
      </View>
      {isLoading && (
        <View style={styles.loadingIndicator}>
          <ActivityIndicator size="small" color="#6C63FF" />
        </View>
      )}
    </Pressable>
  );
};
export default ServiceCard;

const styles = StyleSheet.create({
  loadingIndicator: {
    ...StyleSheet.absoluteFillObject,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(255, 255, 255, 0.7)',
  },
  card: {
    padding: 10,
    backgroundColor: colors.white,
    borderRadius: 10,
    marginBottom: 15,
    width: '100%',
    alignSelf: 'center',
    //height: '100%',
    marginBottom: 12
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
    marginBottom: 2
  },

  box: {
    flexDirection: 'row',
  },
  bottomBox: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 15,
    // alignItems: 'center',
  },
  bottomsmBox: {
    width: 100,
    alignItems: 'center',
  },
  btn: {
    width: scale(90),
    height: 45,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
  },
  bookingTimesContainer: {
    marginTop: 8,
    marginBottom: 2
  },
  bookingTimeSlot: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 4,
  },
  dayText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333333',
  },
  timeText: {
    fontSize: 16,
    color: '#666666',
  },
});
