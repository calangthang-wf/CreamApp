import React, {startTransition} from 'react';
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  SafeAreaView,
  Image,
  Pressable,
  Alert,
  TextInput,
  ImageBackground,
  TouchableOpacity,
} from 'react-native';
import {scale} from '../component/constants/scale';
import Icon from 'react-native-vector-icons/FontAwesome';
import ForgotStyle from './forgotStyle';

const ForgotPassword = () => {
  return (
    <View style={ForgotStyle.container}>
      <ImageBackground
        source={require('../../assets/images/background/bg3.png')}
        style={ForgotStyle.background}>
        <View style={ForgotStyle.titleForm}>
          <Text style={ForgotStyle.title}>Forgot Password</Text>
        </View>
        <View style={ForgotStyle.mailForm}>
          <Text style={ForgotStyle.mailTitle}>Enter email address</Text>
          <TextInput style={ForgotStyle.mailInput}></TextInput>
        </View>
        <View style={ForgotStyle.buttonForm}>
          <TouchableOpacity style={ForgotStyle.buttonBack}>
            <Text style={ForgotStyle.buttonBackText}>Back to sign in</Text>
          </TouchableOpacity>
          <View style={ForgotStyle.buttonSendForm}></View>
          <TouchableOpacity style={ForgotStyle.buttonSend}>
            <Text style={ForgotStyle.buttonSendText}>Send</Text>
          </TouchableOpacity>
        </View>
        <View style={ForgotStyle.socialForm}>
          <Text style={ForgotStyle.socialTitle}>--- OR ---</Text>
          <View style={ForgotStyle.iconForm}>
            <Icon
              name="google"
              size={24}
              color="black"
              style={ForgotStyle.socialIcon}
            />
            <Icon
              name="facebook"
              size={24}
              color="black"
              style={ForgotStyle.socialIcon}
            />
            <Icon
              name="github"
              size={24}
              color="black"
              style={ForgotStyle.socialIcon}
            />
          </View>
        </View>
        <View style={ForgotStyle.questionForm}>
          <Text style={ForgotStyle.questionTitle}>Don't have account?</Text>
          <View style={ForgotStyle.signUpButtonForm}>
            <TouchableOpacity style={ForgotStyle.signUpButton}>
              <Text style={ForgotStyle.signUpButtonText}>Sign Up</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ImageBackground>
    </View>
  );
};

export default ForgotPassword;
