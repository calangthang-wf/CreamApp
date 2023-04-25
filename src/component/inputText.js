import React, {useState} from 'react';
import {TextInput, View, TouchableOpacity, Text} from 'react-native';
import {scale} from './constants/scale';
import LoginStyle from '../login/LoginStyle';
import Icon from 'react-native-vector-icons/FontAwesome';

const LoginInput = () => {
  const [text, setText] = useState('');
  const [password, setPassword] = useState('');
  const [condition, setCondition] = useState('');

  const handleTextChange = inputText => {
    setText(inputText);
    console.log(text);
  };

  const handlePasswordChange = inputPassword => {
    setPassword(inputPassword);
    console.log(password);
  };

  const handleCondition = pressButoon => {
    setCondition(pressButoon);
    if ((text == 'admin123', password == '12345')) {
      console.log('Login');
    } else {
      console.log('Username or Password is incorrect!');
    }
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

            <View style={LoginStyle.passwordForm}>
              <Text style={LoginStyle.passwordTextStyle}>Password</Text>
              <TextInput
                onChangeText={handlePasswordChange}
                value={password}
                secureTextEntry={true}
                style={LoginStyle.passwordTextInputStyle}></TextInput>
              <Icon
                name="eye"
                size={24}
                color="#de7e3a"
                style={LoginStyle.EyeIcon}
              />
            </View>
            <View style={LoginStyle.loginButtonForm}>
              <TouchableOpacity>
                <Text style={LoginStyle.forgotText}>Forgot Password</Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={handleCondition}
                style={LoginStyle.loginButton}>
                <Text style={LoginStyle.loginButtonText}>LOGIN</Text>
              </TouchableOpacity>
            </View>
          </View>
          <View style={LoginStyle.RegisterForm}>
            <Text style={LoginStyle.RegisterText}>NOT A MEMBER? </Text>
            <TouchableOpacity>
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

export default LoginInput;
