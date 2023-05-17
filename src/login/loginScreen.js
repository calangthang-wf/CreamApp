import React, {useEffect, useState} from 'react';
import {
  Text,
  View,
  Image,
  TextInput,
  ImageBackground,
  TouchableOpacity,
  KeyboardAvoidingView,
  Alert,
} from 'react-native';
import LoginStyle from './LoginStyle';
import Icon from 'react-native-vector-icons/FontAwesome';

const LoginScreen = ({navigation}) => {
  const [text, setText] = useState('');
  const [password, setPassword] = useState('');
  const [showNullUsername, setNullUsername] = useState('');
  const [showNullPassword, setNullPassword] = useState('');
  const [hidePassword, setHidePassword] = useState(true);

  const handleTextChange = inputText => {
    setText(inputText);
  };

  const handlePasswordChange = inputPassword => {
    setPassword(inputPassword);
  };

  const handlePassword = () => {
    navigation.navigate('ForgotPassword');
  };

  const usernameLogin = () => {
    setNullUsername('Username is empty!');
  };
  const passwordLogin = () => {
    setNullPassword('Password is empty!');
  };

  const loginOnpress = () => {
    if (text === '') {
      usernameLogin();
    } else if (password === '') {
      passwordLogin();
    } else if (text !== 'admin123') {
      Alert.alert('Username is Incorrect!');
    } else if (password !== '123456') {
      Alert.alert('Password is Incorrect!');
    } else {
      navigation.navigate('Newfeed');
    }
  };

  const registerButton = () => {
    navigation.navigate('Register');
  };

  useEffect(() => {
    console.log('username: ', text);
    console.log('password: ', password);
  });

  const togglePasswordVisibility = () => {
    setHidePassword(!hidePassword);
  };

  return (
    <View style={LoginStyle.container}>
      <ImageBackground
        source={require('../../assets/images/background/bg3.png')}
        style={LoginStyle.BG}>
        <View style={LoginStyle.logoWrapper}>
          <Image
            source={require('../../assets/images/logo/logo1.png')}
            style={LoginStyle.logo}
          />
        </View>
        <View style={LoginStyle.form}>
          <View>
            <View style={LoginStyle.usernameForm}>
              <Text style={LoginStyle.usernameTextStyle}>Username</Text>
              <TextInput
                onChangeText={handleTextChange}
                value={text}
                style={LoginStyle.usernameTextInputStyle}></TextInput>
            </View>
            {showNullUsername && (
              <Text style={LoginStyle.wrongMessenger}>{showNullUsername}</Text>
            )}

            <View style={LoginStyle.passwordForm}>
              <Text style={LoginStyle.passwordTextStyle}>Password</Text>
              <TextInput
                onChangeText={handlePasswordChange}
                value={password}
                secureTextEntry={hidePassword}
                style={LoginStyle.passwordTextInputStyle}></TextInput>
              <TouchableOpacity
                style={LoginStyle.EyeIcon}
                onPress={togglePasswordVisibility}>
                <Icon
                  name="eye"
                  size={24}
                  color="#de7e3a"
                  style={LoginStyle.EyeIcon}
                />
              </TouchableOpacity>
            </View>
            {showNullPassword && (
              <Text style={LoginStyle.wrongMessenger}>{showNullPassword}</Text>
            )}
            <View style={LoginStyle.loginButtonForm}>
              <TouchableOpacity onPress={handlePassword}>
                <Text style={LoginStyle.forgotText}>Forgot Password</Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={loginOnpress}
                style={LoginStyle.loginButton}>
                <Text style={LoginStyle.loginButtonText}>LOGIN</Text>
              </TouchableOpacity>
            </View>
          </View>
          <View style={LoginStyle.RegisterForm}>
            <Text style={LoginStyle.RegisterText}>NOT A MEMBER? </Text>
            <TouchableOpacity onPress={registerButton}>
              <Text style={LoginStyle.RegisterMember}>JOIN A MEMBER</Text>
            </TouchableOpacity>
          </View>
          <View style={LoginStyle.socialLoginSection}>
            <Text>OR</Text>
          </View>
        </View>
      </ImageBackground>
    </View>
  );
};
export default LoginScreen;
