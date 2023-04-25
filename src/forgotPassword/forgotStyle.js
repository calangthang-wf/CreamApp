import React from 'react';
import {StyleSheet} from 'react-native/';
import {scale} from '../component/constants/scale';

const ForgotStyle = StyleSheet.create({
  container: {
    flex: 1,
  },

  background: {
    flex: 1,
    padding: 25,
  },

  titleForm: {
    paddingTop: 60,
    alignItems: 'center',
  },
  title: {
    color: '#de7e3a',
    fontSize: 18,
  },

  mailForm: {
    paddingTop: 60,
  },
  mailTitle: {
    color: '#de7e3a',
    fontSize: 18,
  },
  mailInput: {
    borderBottomWidth: 1,
    paddingTop: 5,
    borderColor: '#de7e3a',
  },

  buttonForm: {
    paddingTop: 20,
  },
  buttonBack: {
    alignItems: 'center',
  },
  buttonBackText: {
    color: '#de7e3a',
    fontSize: 18,
  },
  buttonSendForm: {
    paddingTop: 30,
  },
  buttonSend: {
    alignItems: 'center',
    borderWidth: 1,
    borderRadius: 20,
    borderColor: '#de7e3a',
    backgroundColor: '#de7e3a',
    padding: 10,
  },
  buttonSendText: {
    color: '#fff',
    fontSize: 18,
  },

  socialForm: {
    paddingTop: 50,
    alignItems: 'center',
  },
  socialTitle: {
    color: '#de7e3a',
    fontSize: 18,
  },
  iconForm: {
    flexDirection: 'row',
    paddingTop: 10,
  },
  socialIcon: {
    paddingHorizontal: 10,
  },

  questionForm: {
    paddingTop: 50,
    alignItems: 'center',
  },
  questionTitle: {
    color: '#de7e3a',
    fontSize: 18,
  },
  signUpButtonForm: {
    paddingTop: 20,
    alignItems: 'center',
  },
  signUpButton: {
    alignItems: 'center',
    borderWidth: 1,
    borderRadius: 20,
    borderColor: '#de7e3a',
    backgroundColor: '#de7e3a',
    padding: 10,
  },
  signUpButtonText: {
    color: '#fff',
    fontSize: 18,
  },
});
export default ForgotStyle;
