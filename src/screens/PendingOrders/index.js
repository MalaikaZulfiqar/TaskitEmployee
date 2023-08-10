import React, { useState, useEffect } from 'react';
import { FlatList, StyleSheet, Text, View, ScrollView, ActivityIndicator } from 'react-native';
import Container from '../../components/Container';
import ServiceCard from '../../components/serviceCard';
import globalStyles from '../../styles/globalStyles';
import { PandingOrdersData } from '../../constants/DumyServices';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { get_employee_booking } from '../../services/ApiService';
import ServiceDetail from '../AboutServices';

const PendingOrders = ({ navigation }) => {
  const [booking, setBooking] = useState([]);
  const [result, setResult] = useState([]);
  const [loading, setLoading] = useState(true); 

  useEffect(() => {
    const unsubscribe = navigation.addListener('focus', () => {
      fetchBookings();
    });
    return unsubscribe;
  }, [navigation]);

  const fetchBookings = async () => {
    const uid = await AsyncStorage.getItem('userID');
    const response = await get_employee_booking(uid);
    if (response && response.data) {
      const service = response.data;
      const pendingBookings = service.filter(item => item.booking.status === 'pending');
      setResult(pendingBookings);
    }
    setLoading(false);
  };

  const getCompleteBookingTime = (bookingTimeArray) => {
    return bookingTimeArray.map((slot) => `${slot.day}    -     ${slot.time}`).join(', ');
  };

  return (
    <Container customStyle={{ paddingHorizontal: 0 }}>
      <View style={{ backgroundColor: '#ffffff', paddingHorizontal: 15 }}>
        <Text style={[globalStyles.font18M, { marginTop: 20 }]}>Pending Orders</Text>
      </View>
      <View style={{ flex: 1, paddingHorizontal: 15 }}>
        {loading ? (
          <ActivityIndicator style={{flex: 1, justifyContent: 'center',alignItems: 'center'}} size="large" color="#6C63FF" />
        ) : (
          // Show the ScrollView with the data when loading is false
          <ScrollView showsVerticalScrollIndicator={false}>
            <View>
              {result.map((item, index) => (
                <ServiceCard
                  key={index}
                  customerName={item.booking.user.username}
                  customerImg={item.booking.service.thumb}
                  charges={item.booking.service.price}
                  task={item.booking.service.name}
                  id={item.booking.id}
                  bookingTime={getCompleteBookingTime(item.booking.booking_time)}
                  fetchBookings={fetchBookings}
                  onPress={() => navigation.navigate('ServiceDetail', { title: item.booking.service.name, service: item })}
                />
              ))}
            </View>
          </ScrollView>
        )}
      </View>
    </Container>
  );
};

const styles = StyleSheet.create({
  loadingIndicator: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default PendingOrders;
