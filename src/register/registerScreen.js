import React from 'react';
import {
  Text,
  View,
  Image,
  TextInput,
  ImageBackground,
  TouchableOpacity,
} from 'react-native';
import {scale} from '../component/constants/scale';
import RegisterStyle from './registerStyle';
import Icon from 'react-native-vector-icons/FontAwesome';

const RegisterScreen = ({navigation}) => {
  return (
    <View style={RegisterStyle.container}>
      <ImageBackground
        source={require('../../assets/images/background/bg3.png')}
        style={RegisterStyle.background}>
        <View style={RegisterStyle.logoWrapper}>
          <Image
            source={require('../../assets/images/logo/logo2.png')}
            style={RegisterStyle.logo}
          />
        </View>
        <View style={RegisterStyle.form}>
          <View>
            <Text style={RegisterStyle.usernameText}>Username</Text>
            <TextInput style={RegisterStyle.usernameInput}></TextInput>
          </View>
          <View style={RegisterStyle.emailForm}>
            <Text style={RegisterStyle.emailText}>Email</Text>
            <TextInput style={RegisterStyle.emailInput}></TextInput>
          </View>
          <View style={RegisterStyle.passwordForm}>
            <Text style={RegisterStyle.passwordText}>Password</Text>
            <TextInput style={RegisterStyle.passwordInput}></TextInput>
          </View>
          <View style={RegisterStyle.repasswordForm}>
            <Text style={RegisterStyle.repasswordText}>Retype Password</Text>
            <TextInput style={RegisterStyle.repasswordInput}></TextInput>
          </View>
          <View style={RegisterStyle.buttonForm}>
            <TouchableOpacity style={RegisterStyle.button}>
              <Text style={RegisterStyle.buttonText}>REGISTER</Text>
            </TouchableOpacity>
          </View>
          <View style={RegisterStyle.questionForm}>
            <Text style={RegisterStyle.questionText}>
              Already have account?{' '}
            </Text>
            <TouchableOpacity onPress={() => navigation.navigate('Login')}>
              <Text style={RegisterStyle.questionText}>Login</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ImageBackground>
    </View>
  );
};

export default RegisterScreen;
