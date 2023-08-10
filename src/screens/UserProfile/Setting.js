import {
  View,
  Text,
  ScrollView,
  Image,
  TouchableOpacity,
  Modal,
  Pressable,
} from 'react-native';
import React, {useState} from 'react';
import Container from '../../components/Container';
import HomeHeader from '../../components/HomeHeader';
import globalStyles from '../../styles/globalStyles';
import user from '../../assets/images/png/user.png';
import Logout from '../../assets/images/svg/logout.svg';
import Notify from '../../assets/images/svg/notify.svg';
import Icon from 'react-native-vector-icons/AntDesign';
import Material from 'react-native-vector-icons/MaterialCommunityIcons';
import {colors} from '../../constants';
import ArrowBox from '../../components/ArrowBox';
import profileStyle from './ProfileStyle';
const Setting = ({navigation}) => {
  const [show, setShow] = useState(false);
  const handleShow = () => {
    setShow(true);
  };
  const handleHide = () => {
    setShow(false);
  };
  return (
    <Container customStyle={{backgroundColor: '#ffffff'}}>
      <HomeHeader title={'Settings'} screenName={'userAccount'} />
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={{marginTop: 30}}>
          <Text style={globalStyles.font16R}>Account</Text>
          <View style={[globalStyles.justifyBtwRow, {marginTop: 20}]}>
            <Image style={{width: 55, height: 55}} source={user} />
            <View
              style={[{flex: 1, marginLeft: 30}, globalStyles.justifyBtwRow]}>
              <View>
                <Text style={globalStyles.font18M}>Vanessa Luo</Text>
                <Text style={[globalStyles.font12, {color: colors.darkGray}]}>
                  vannessaluo@gmail.com
                </Text>
              </View>
              <ArrowBox
                onPress={() => {
                  navigation.navigate('UserProfile');
                }}
              />
            </View>
          </View>
          <Text style={[globalStyles.font16R, {marginTop: 30}]}>Settings</Text>
          <View>
            <View
              style={[
                {
                  marginVertical: 30,
                },
                globalStyles.justifyBtwRow,
              ]}>
              <View style={{flexDirection: 'row'}}>
                <Material name="history" color={'#000000'} size={23} />
                <Text style={[globalStyles.font16R, {marginLeft: 18}]}>
                  Availability
                </Text>
              </View>
              <ArrowBox />
            </View>
            <View
              style={[
                {
                  marginVertical: 10,
                },
                globalStyles.justifyBtwRow,
              ]}
              onPress={handleShow}>
              <View style={{flexDirection: 'row'}}>
                <Logout />
                <Text style={[globalStyles.font16R, {marginLeft: 20}]}>
                  Logout
                </Text>
              </View>
              <ArrowBox onPress={handleShow} />
            </View>
          </View>
        </View>
      </ScrollView>
      <Modal
        transparent={true}
        visible={show}
        onRequestClose={() => {
          setShow(false);
        }}>
        <Pressable style={profileStyle.modalContainer} onPress={handleHide}>
          <View style={profileStyle.wrapper}>
            <TouchableOpacity style={profileStyle.circle} onPress={handleHide}>
              <Icon name="close" size={25} color={colors.primaryColor} />
            </TouchableOpacity>
            <Text
              style={[
                globalStyles.font20M,
                {color: colors.primaryColor, textAlign: 'center'},
              ]}>
              Hold On!
            </Text>
            <Text style={[globalStyles.font16R, {textAlign: 'center'}]}>
              Are you sure you want to logout?
            </Text>
            <View
              style={[
                globalStyles.justifyBtwRow,
                {marginBottom: 10, marginTop: 30},
              ]}>
              <TouchableOpacity style={profileStyle.btn} onPress={handleHide}>
                <Text
                  style={[globalStyles.font16M, {color: colors.primaryColor}]}>
                  Cancel
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={[
                  profileStyle.btn,
                  {backgroundColor: colors.primaryColor},
                ]}
                onPress={() => {
                  navigation.navigate('Login');
                  setShow(false);
                }}>
                <Text style={[globalStyles.font16M, {color: colors.white}]}>
                  Logout
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </Pressable>
      </Modal>
    </Container>
  );
};

export default Setting;
