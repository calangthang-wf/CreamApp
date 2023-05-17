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
    <View style={{flex: 1, backgroundColor: '#f2eded', paddingTop: scale(20)}}>
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
        <ScrollView
          horizontal={true}
          style={{top: scale(-125), padding: scale(5)}}>
          <View
            style={{
              flexDirection: 'row',
            }}>
            <View
              style={{
                backgroundColor: '#dbdbdb',
                width: scale(120),
                height: scale(120),
                borderRadius: scale(20),
                justifyContent: 'center',
                alignItems: 'center',
                marginHorizontal: scale(5),
              }}>
              <Icon name="plus" size={scale(24)} color="#de7e3a" style={{}} />
              <Text style={{color: '#0a0a0a', padding: 5, top: scale(10)}}>
                Create Story
              </Text>
            </View>
            <View
              style={{
                backgroundColor: '#dbdbdb',
                width: scale(120),
                height: scale(120),
                borderRadius: scale(20),
                justifyContent: 'center',
                alignItems: 'center',
                marginHorizontal: scale(5),
              }}></View>
            <View
              style={{
                backgroundColor: '#dbdbdb',
                width: scale(120),
                height: scale(120),
                borderRadius: scale(20),
                justifyContent: 'center',
                alignItems: 'center',
                marginHorizontal: scale(5),
              }}></View>
            <View
              style={{
                backgroundColor: '#dbdbdb',
                width: scale(120),
                height: scale(120),
                borderRadius: scale(20),
                justifyContent: 'center',
                alignItems: 'center',
                marginHorizontal: scale(5),
              }}></View>
          </View>
        </ScrollView>
        <ScrollView
          style={{
            marginBottom: scale(30),
            padding: scale(10),
            top: scale(-100),
          }}>
          <View>
            <View
              style={{
                backgroundColor: '#fff',
                padding: scale(20),
                flexDirection: 'row',
                alignItems: 'center',
              }}>
              <Icon name="user-circle" size={scale(30)} color="#0a0000" />
              <Text
                style={{color: 'black', left: scale(10), fontSize: scale(16)}}>
                Nguyễn Trần Anh Khoa
              </Text>
              <View style={{left: scale(150)}}>
                <Icon name="ellipsis-v" size={scale(18)} color="#0a0000" />
              </View>
            </View>
            <View
              style={{
                backgroundColor: '#fff',
                paddingHorizontal: scale(20),
                alignItems: 'center',
              }}>
              <Text style={{color: 'black'}}>
                hello, day la bai viet dau tien tren trang nay. Hello, day la
                bai viet dau tien tren trang nay
              </Text>
              <Image
                source={require('../../assets/images/logo/logo1.png')}
                style={{alignItems: 'center'}}
              />
            </View>
          </View>
        </ScrollView>
        <View
          style={{
            backgroundColor: '#de7e3a',
            height: scale(75),
            top: scale(-240),
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <View
            style={{
              flexDirection: 'row',
              paddingHorizontal: scale(20),
              position: 'absolute',
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
