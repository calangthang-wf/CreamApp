import React from 'react';
import {
  Text,
  View,
  Image,
  TextInput,
  ImageBackground,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import {scale} from '../component/constants/scale';

const NewfeedScreen = () => {
  return (
    <View style={{flex: 1, backgroundColor: '#fff', paddingTop: scale(20)}}>
      <View style={{}}>
        <View style={{flexDirection: 'row', paddingHorizontal: scale(2)}}>
          <Icon
            name="camera"
            size={scale(28)}
            color="black"
            style={{padding: scale(5)}}
          />
          <View
            style={{
              paddingHorizontal: scale(100),
              flex: 1,
              alignItems: 'center',
              top: scale(-75),
            }}>
            <Image
              source={require('../../assets/images/logo/logo2.png')}
              style={{height: scale(200), width: scale(200)}}
            />
          </View>
          <Icon
            name="send"
            size={scale(28)}
            color="black"
            style={{padding: scale(5)}}
          />
        </View>
        <ScrollView style={{borderWidth: 1, top: -120}}>
          <View style={{}}></View>
        </ScrollView>
      </View>
    </View>
  );
};

export default NewfeedScreen;
