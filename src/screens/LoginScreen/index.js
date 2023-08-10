import { Alert ,ActivityIndicator,ToastAndroid} from 'react-native';
import React, {useState,useEffect} from 'react';
import Container from '../../components/Container';
import {colors, fonts} from '../../constants';
import AuthHeader from '../../components/AuthHeader';
import InputBox from '../../components/InputBox';
import FocusAwareStatusBar from '../../components/FocusAwareStatusBar';
import {ScrollView, View, Text, TouchableOpacity} from 'react-native';
import globalStyles from '../../styles/globalStyles';
import Account from '../../assets/images/svg/account.svg';
import Lock from '../../assets/images/svg/lock.svg';
import Button from '../../components/Button';
import { employee_login } from '../../services/ApiService';
import AsyncStorage from '@react-native-async-storage/async-storage';
const Login = ({navigation}) => {
  const [data, setData] = useState({
    userName: '',
    password: '',
  });
  const [isButtonDisabled, setButtonDisabled] = useState(true);
  const [isLoading, setIsLoading] = useState(false);
  useEffect(() => {
    // Check if either username or password is empty
    const isDisabled = data.userName.trim() === '' || data.password.trim() === '';
    setButtonDisabled(isDisabled);
    
  }, [data]);
  const handleLogin = async () => {
    try {
      setIsLoading(true); // Show the loading indicator on the button
      const response = await employee_login(data.userName, data.password);
      if (response.result === true) {
        console.log(response.message);
        await AsyncStorage.setItem('userID', response.user_id);
        //  const userID=await AsyncStorage.getItem('userID');
        //  console.log("login",userID);
        navigation.navigate('AppStack');
      } else {
        ToastAndroid.showWithGravity(response.message,ToastAndroid.LONG,ToastAndroid.BOTTOM)
        console.log('Login failed:', response.message);
      }
    } catch (error) {
      console.error('Error during login:', error);
    } finally {
      setIsLoading(false); // Hide the loading indicator on the button
    }
  };
  const [isEyePressed, setEyePressed] = useState(false);
  const onEyePress = () => {
    setEyePressed(!isEyePressed);
  };

  return (
    <Container
      customStyle={{backgroundColor: colors.blue, paddingHorizontal: 0}}>
      <FocusAwareStatusBar
        animated={true}
        backgroundColor={colors.blue}
        barStyle={'light-content'}
      />
      <View style={globalStyles.box}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <Text
            style={[globalStyles.font20B, {color: colors.blue, marginTop: 30}]}>
            Lets get something
          </Text>
          <Text
            style={[
              globalStyles.font14,
              {color: colors.lightBlack, marginTop: 10},
            ]}>
            Good to see you back.
          </Text>
          <View style={{marginTop: 30}}>
            <InputBox
              placeholder={'Username'}
              value={data.userName}
              onChangeText={text => {
                setData({...data, userName: text});
              }}
              Icon={Account}
            />
            <InputBox
              placeholder={'Password'}
              value={data.password}
              onChangeText={text => {
                setData({...data, password: text});
              }}
              secureTextEntry={isEyePressed ? false : true}
              Icon={Lock}
              isEye={true}
              onEyePress={onEyePress}
            />
          </View>
          <TouchableOpacity style={{marginTop: -15, marginBottom: 40}}>
            <Text
              style={[
                globalStyles.font14,
                {color: colors.primaryColor, textAlign: 'right'},
              ]}>
              Forget Password?
            </Text>
          </TouchableOpacity>
          <Button 
          btnName={isLoading ? <ActivityIndicator color={colors.white} /> : 'Login'}
          onPress={handleLogin} 
          disabled={isButtonDisabled} // Disable the button when isButtonDisabled is true
          customStyle={isButtonDisabled ? { opacity: 0.8 } : {}} // Reduce opacity when disabled
          
          />
        </ScrollView>
      </View>
    </Container>
  );
};

export default Login;
