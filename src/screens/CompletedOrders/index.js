import { StyleSheet, Text, View, FlatList, ScrollView,ActivityIndicator} from 'react-native';
import React, { useState, useEffect } from 'react';
import Container from '../../components/Container';
import globalStyles from '../../styles/globalStyles';
//import Card from '../../components/Card';
import ComCard from '../../components/ComCard';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { get_employee_booking } from '../../services/ApiService';
import { CompletedOrdesData } from '../../constants/DumyServices';
import ServiceDetail from '../AboutServices';
const CompletedOrders = ({ navigation }) => {
  const [booking, setBooking] = useState([])
  const [result, setResult] = useState([])
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const unsubscribe = navigation.addListener('focus', () => {

      fetchBookings()
    })
    return unsubscribe;
  }, [navigation])

  const fetchBookings = async () => {

    const uid = await AsyncStorage.getItem('userID')
    console.log("uid", uid)
    const response = await get_employee_booking(uid);
    if (response && response.data) {
      const service = response.data;
      console.log("service", service)
      const pendingBookings = service.filter(item => item.booking.status === 'completed');
      setResult(pendingBookings);
    }
    setLoading(false);
  }
  const getCompleteBookingTime = (bookingTimeArray) => {
    return bookingTimeArray.map((slot) => `${slot.day}    -     ${slot.time}`).join(', ');
  };
  return (
    <Container customStyle={{ paddingHorizontal: 0 }}>
      <View style={{ backgroundColor: '#ffffff', paddingHorizontal: 15 }}>
        <Text style={[globalStyles.font18M, { marginTop: 20 }]}>
          Completed Orders
        </Text>
      </View>
      <View style={{ flex: 1, paddingHorizontal: 15 }}>
        {loading ? (
          <ActivityIndicator style={{flex: 1, justifyContent: 'center',alignItems: 'center'}} size="large" color="#6C63FF" />
        ) : (
          <ScrollView showsVerticalScrollIndicator={false}>
            <View>
              {
                result.map((item, index) =>
                  <ComCard
                    //customerName={item.booking.user.username}
                    customerImg={item.booking.service.thumb}
                    //type={item.type}
                    serviceName={item.booking.service.name}
                    bookingTime={getCompleteBookingTime(item.booking.booking_time)}
                    onPress={() => navigation.navigate('ServiceDetail', { title: item.booking.service.name, service: item })}
                  />
                )
              }
            </View>
          </ScrollView>
        )


        }


      </View>
    </Container>
  );
};

export default CompletedOrders;

const styles = StyleSheet.create({});
