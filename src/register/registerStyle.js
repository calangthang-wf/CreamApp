import React from 'react';
import {StyleSheet} from 'react-native/';
import {scale} from '../component/constants/scale';

const RegisterStyle = StyleSheet.create({
  container: {
    flex: 1,
  },

  background: {
    flex: 1,
    padding: scale(25),
  },

  logoWrapper: {
    flex: 1,
    top: scale(-20),
    justifyContent: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    alignItems: 'center',
  },
  logo: {
    height: scale(300),
    width: scale(300),
  },

  form: {
    flex: 2,
    top: scale(-60),
  },

  usernameForm: {},
  usernameText: {
    color: '#de7e3a',
    paddingBottom: scale(3),
  },
  usernameInput: {
    color: '#FA8596',
    borderBottomWidth: scale(1),
    borderBottomColor: '#de7e3a',
    padding: scale(2),
  },

  emailForm: {
    paddingTop: scale(30),
  },
  emailText: {
    color: '#de7e3a',
    paddingBottom: scale(3),
  },
  emailInput: {
    color: '#FA8596',
    borderBottomWidth: scale(1),
    borderBottomColor: '#de7e3a',
    padding: scale(2),
  },

  passwordForm: {
    paddingTop: scale(30),
  },
  passwordText: {
    color: '#de7e3a',
    paddingBottom: scale(3),
  },
  passwordInput: {
    color: '#FA8596',
    borderBottomWidth: scale(1),
    borderBottomColor: '#de7e3a',
    padding: scale(2),
  },

  repasswordForm: {
    paddingTop: scale(30),
  },
  repasswordText: {
    color: '#de7e3a',
    paddingBottom: scale(3),
  },
  repasswordInput: {
    color: '#FA8596',
    borderBottomWidth: scale(1),
    borderBottomColor: '#de7e3a',
    padding: scale(2),
  },

  buttonForm: {
    alignItems: 'center',
    paddingTop: scale(40),
  },
  button: {
    backgroundColor: '#de7e3a',
    padding: scale(16),
    paddingHorizontal: 80,
    borderRadius: 20,
    backgroundColor: '#de7e3a',
  },
  buttonText: {
    color: '#fff',
  },

  questionForm: {
    flexDirection: 'row',
    justifyContent: 'center',
    paddingTop: scale(10),
  },
  questionText: {
    color: '#de7e3a',
  },
  loginNavigation: {
    color: '#FA8596',
  },

  socialForm: {
    paddingTop: 20,
    alignItems: 'center',
  },
  socialText: {
    color: '#de7e3a',
    fontSize: 18,
  },
  socialIconForm: {
    flexDirection: 'row',
    paddingTop: 10,
    alignItems: 'center',
  },
  socialGoogle: {
    paddingRight: 20,
    color: '#FA8596',
  },
  socialFacebook: {
    paddingRight: 20,
    color: 'blue',
  },
});

export default RegisterStyle;
