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
import Icon from 'react-native-vector-icons/FontAwesome5';
import {scale} from '../component/constants/scale';

const NewfeedScreen = () => {
  return (
    <View style={{flex: 1, backgroundColor: '#fff', paddingTop: scale(20)}}>
      <View style={{}}>
        <View style={{flexDirection: 'row', paddingHorizontal: scale(20)}}>
          <Icon
            name="camera"
            size={scale(24)}
            color="#de7e3a"
            style={{padding: scale(5)}}
          />
          <View
            style={{
              paddingHorizontal: scale(100),
              flex: 1,
              alignItems: 'center',
              top: scale(-80),
            }}>
            <Image
              source={require('../../assets/images/logo/logo2.png')}
              style={{height: scale(200), width: scale(200)}}
            />
          </View>
          <Icon
            name="comment"
            size={scale(24)}
            color="#de7e3a"
            style={{padding: scale(5)}}
          />
        </View>
        <ScrollView style={{marginBottom: 30}}>
          <View style={{}}>
            <Text style={{color: 'black'}}></Text>
          </View>
        </ScrollView>
        <View
          style={{
            backgroundColor: '#de7e3a',
            height: scale(75),
            bottom: scale(-500),
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <View
            style={{
              flexDirection: 'row',
              paddingHorizontal: scale(20),
              justifyContent: 'space-between',
              alignItems: 'center',
              width: '100%',
            }}>
            <Icon name="home" size={scale(24)} color="#fff" />
            <Icon name="search" size={scale(24)} color="#fff" />
            <Icon name="plus-square" size={scale(32)} color="#fff" />
            <Icon name="bell" size={scale(24)} color="#fff" />
            <Icon name="user-circle" size={scale(24)} color="#fff" />
          </View>
        </View>
      </View>
    </View>
  );
};

export default NewfeedScreen;
