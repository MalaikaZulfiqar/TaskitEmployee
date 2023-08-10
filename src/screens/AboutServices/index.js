import { StyleSheet, Text, View,ScrollView } from 'react-native'
import React,{useState,useEffect} from 'react';
import Container from '../../components/Container';
import globalStyles from '../../styles/globalStyles';
import ServiceSlider from '../../components/ServiceSlider';
import { colors } from '../../constants';
import CheckBox from '@react-native-community/checkbox';
import AsyncStorage from '@react-native-async-storage/async-storage';
const ServiceDetail = ({ route, navigation }) => {
  const [isLoading, setIsLoading] = useState(false);
  const { title, service } = route.params;
  const [userID, setUserID] = useState();
  const Availability = service.booking.booking_time;
  const [CheckBoxes, setCheckBoxes] = useState(new Array(Availability.length).fill(false));
  const toggleCheckBox = (value, index) => {
    let temp = CheckBoxes;
    temp[index] = value;
    setCheckBoxes([...temp]);
  };

  const concatenateImageUrls = () => {
    return service.booking.service.images.map(value => service.url + value);
  };

  const getId = async () => {
    const result = await AsyncStorage.getItem('userID');
    setUserID(result);
  };

  useEffect(() => {
    getId();
  }, []);

  return (
    <Container customStyle={{ paddingHorizontal: 0, backgroundColor: '#F6F6F6' }}>
      <View style={{ height: 250 }}>
        <ServiceSlider text={title} images={concatenateImageUrls()} />
      </View>
      <View style={{ flex: 1, paddingHorizontal: 15 }}>
      <ScrollView showsVerticalScrollIndicator={false}>
      {/* <Text style={[globalStyles.font16R, { marginTop: 25, marginBottom: 10 }]}>About</Text> */}
      <Text style={[globalStyles.font16R,, { marginTop: 25, marginBottom: 10 }]}>$ {service.booking.service.price}</Text>
          <Text style={[globalStyles.font16R]}>{service.booking.service.name}</Text>
          <Text style={[globalStyles.font14, { color: colors.lightBlack }]}>
          {service.booking.service.description}
          </Text>
          <Text style={[globalStyles.font16R, { marginTop: 25, marginBottom: 10 }]}>Availability</Text>
          {Availability.map((item, index) => (
            <View style={[globalStyles.justifyCenterRow, { justifyContent: 'flex-start' }]} key={index}>
              <CheckBox
                disabled={false}
                value={CheckBoxes[index]}
                onValueChange={newValue => toggleCheckBox(newValue, index)}
              />
              <Text style={globalStyles.font14}>{item.day} {item.time}</Text>
            </View>
          ))}
            
            {/* <View>
              <Text>{service.booking.user.name}</Text>
              <Text>{service.booking.user.email}</Text>
              <Text>{service.booking.user.phone}</Text>
              <Text>{service.booking.user.location}</Text>
            </View> */}
            <Text style={[globalStyles.font16R, { marginTop: 25, marginBottom: 10 }]}>User Details</Text>
          <View style={styles.userCard}>
            <Text style={styles.userLabel}>Name:</Text>
            <Text style={styles.userValue}>{service.booking.user.name}</Text>
          </View>
          <View style={styles.userCard}>
            <Text style={styles.userLabel}>Email:</Text>
            <Text style={styles.userValue}>{service.booking.user.email}</Text>
          </View>
          <View style={styles.userCard}>
            <Text style={styles.userLabel}>Phone:</Text>
            <Text style={styles.userValue}>{service.booking.user.phone}</Text>
          </View>
          <View style={styles.userCard}>
            <Text style={styles.userLabel}>Location:</Text>
            <Text style={styles.userValue}>{service.booking.user.location}</Text>
          </View>
      </ScrollView>
      </View>
    </Container>
  )
}

export default ServiceDetail

const styles = StyleSheet.create({
  userCard: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 8,
  },
  userLabel: {
    flex: 1,
    fontSize: 16,
    fontWeight: 'bold',
    color: '#666',
  },
  userValue: {
    flex: 2,
    fontSize: 16,
    color: '#333',
  },
})