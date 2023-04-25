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
    padding: 2,
    borderBottomWidth: 1,
    borderBottomColor: '#FFC085',
    borderBottomEndRadius: 20,
    color: '#FA8596',
    paddingRight: 40,
  },

  EyeIcon: {
    position: 'absolute',
    right: 10,
    paddingTop: 75,
    justifyContent: 'center',
  },

  forgotText: {
    paddingTop: 20,
    paddingBottom: 30,
    color: '#de7e3a',
  },

  RegisterForm: {
    paddingTop: 25,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
  },
  RegisterText: {
    color: '#de7e3a',
    paddingRight: 3,
  },
  RegisterMember: {color: '#FA8596'},

  loginButtonForm: {
    paddingTop: 5,
  },
  loginButton: {
    alignItems: 'center',
    padding: 16,
    borderRadius: 20,
    backgroundColor: '#ffca57',
  },
  loginButtonText: {
    color: '#FFF',
  },

  socialLoginSection: {
    paddingTop: 50,
    alignItems: 'center',
  },
});
export default LoginStyle;
