import React, {useState, useEffect} from 'react';
import {
  Text,
  View,
  TextInput,
  ImageBackground,
  TouchableOpacity,
} from 'react-native';
import ForgotStyle from './forgotStyle';

const ForgotPassword = ({navigation}) => {
  const backToLogin = () => {
    navigation.navigate('Login');
  };
  const goToRegister = () => {
    navigation.navigate('Register');
  };

  return (
    <View style={ForgotStyle.container}>
      <ImageBackground
        source={require('../../assets/images/background/bg3.png')}
        style={ForgotStyle.background}>
        <View style={ForgotStyle.titleForm}>
          <Text style={ForgotStyle.title}>Forgot Password</Text>
        </View>
        <View style={ForgotStyle.passwordForm}>
          <Text style={ForgotStyle.passwordTitle}>Old Password</Text>
          <TextInput style={ForgotStyle.passwordInput}></TextInput>
        </View>
        <View style={ForgotStyle.passwordForm}>
          <Text style={ForgotStyle.passwordTitle}>New Password</Text>
          <TextInput style={ForgotStyle.passwordInput}></TextInput>
        </View>
        <View style={ForgotStyle.passwordForm}>
          <Text style={ForgotStyle.passwordTitle}>New Password</Text>
          <TextInput style={ForgotStyle.passwordInput}></TextInput>
        </View>

        <View style={ForgotStyle.buttonForm}>
          <TouchableOpacity
            style={ForgotStyle.buttonBack}
            onPress={backToLogin}>
            <Text style={ForgotStyle.buttonBackText}>Back to Login</Text>
          </TouchableOpacity>
          <View style={ForgotStyle.buttonSendForm}></View>
          <TouchableOpacity style={ForgotStyle.buttonSend}>
            <Text style={ForgotStyle.buttonSendText}>Confirm</Text>
          </TouchableOpacity>
        </View>

        <View style={ForgotStyle.questionForm}>
          <Text style={ForgotStyle.questionTitle}>Don't have account?</Text>
          <View style={ForgotStyle.signUpButtonForm}>
            <TouchableOpacity
              style={ForgotStyle.signUpButton}
              onPress={goToRegister}>
              <Text style={ForgotStyle.signUpButtonText}>Sign Up</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ImageBackground>
    </View>
  );
};

export default ForgotPassword;
