import {React} from 'react';
import {StyleSheet} from 'react-native';
import {scale} from '../component/constants/scale';

const LoginStyle = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'gray',
  },

  BG: {
    flex: 1,
    padding: scale(30),
  },

  logoWrapper: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0)',
  },
  logo: {
    width: scale(300),
    height: scale(300),
  },

  form: {
    flex: 2,
  },

  usernameForm: {
    justifyContent: 'center',
  },
  usernameTextStyle: {
    paddingBottom: scale(10),
    color: '#de7e3a',
  },
  usernameTextInputStyle: {
    padding: scale(2),
    borderBottomWidth: 1,
    borderBottomColor: '#FFC085',
    borderBottomEndRadius: 20,
    color: '#FA8596',
  },

  inputText: {color: '#FA8596e'},

  passwordForm: {
    justifyContent: 'center',
    paddingTop: scale(50),
  },
  passwordTextStyle: {
    paddingBottom: scale(10),
    color: '#de7e3a',
  },
  passwordTextInputStyle: {
    padding: scale(2),
    borderBottomWidth: scale(1),
    borderBottomColor: '#FFC085',
    borderBottomEndRadius: scale(20),
    color: '#FA8596',
    paddingRight: scale(40),
  },

  wrongMessenger: {
    paddingBottom: scale(10),
    color: 'red',
  },

  EyeIcon: {
    position: 'absolute',
    right: scale(10),
    justifyContent: 'center',
    position: 'absolute',
    bottom: 2,
  },

  forgotText: {
    paddingTop: scale(20),
    paddingBottom: scale(30),
    color: '#de7e3a',
  },

  RegisterForm: {
    paddingTop: scale(25),
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
  },
  RegisterText: {
    color: '#de7e3a',
    paddingRight: scale(3),
  },
  RegisterMember: {color: '#FA8596'},

  loginButtonForm: {
    paddingTop: scale(5),
  },
  loginButton: {
    alignItems: 'center',
    padding: scale(16),
    borderRadius: scale(20),
    backgroundColor: '#ffca57',
  },
  loginButtonText: {
    color: '#FFF',
  },

  socialLoginSection: {
    paddingTop: scale(50),
    alignItems: 'center',
  },
});
export default LoginStyle;
