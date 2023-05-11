import React from 'react';
import {StyleSheet} from 'react-native/';
import {scale} from '../component/constants/scale';

const ForgotStyle = StyleSheet.create({
  container: {
    flex: 1,
  },

  background: {
    flex: 1,
    padding: scale(25),
  },

  titleForm: {
    paddingTop: scale(100),
    alignItems: 'center',
  },
  title: {
    color: '#de7e3a',
    fontSize: scale(18),
  },

  passwordForm: {
    paddingTop: scale(30),
  },
  passwordTitle: {
    color: '#de7e3a',
    fontSize: scale(18),
  },
  passwordInput: {
    borderBottomWidth: scale(1),
    paddingTop: scale(5),
    borderColor: '#de7e3a',
  },

  buttonForm: {
    paddingTop: scale(20),
  },
  buttonBack: {
    alignItems: 'center',
  },
  buttonBackText: {
    color: '#de7e3a',
    fontSize: scale(18),
  },
  buttonSendForm: {
    paddingTop: scale(30),
  },
  buttonSend: {
    alignItems: 'center',
    borderWidth: scale(1),
    borderRadius: scale(20),
    borderColor: '#de7e3a',
    backgroundColor: '#de7e3a',
    padding: scale(10),
  },
  buttonSendText: {
    color: '#fff',
    fontSize: scale(18),
  },

  questionForm: {
    paddingTop: scale(20),
    alignItems: 'center',
  },
  questionTitle: {
    color: '#de7e3a',
    fontSize: scale(18),
  },
  signUpButtonForm: {
    paddingTop: scale(20),
    alignItems: 'center',
  },
  signUpButton: {
    alignItems: 'center',
    borderWidth: scale(1),
    borderRadius: scale(20),
    borderColor: '#de7e3a',
    backgroundColor: '#de7e3a',
    height: scale(50),
    width: scale(120),
    justifyContent: 'center',
  },
  signUpButtonText: {
    color: '#fff',
    fontSize: scale(18),
  },
});
export default ForgotStyle;
