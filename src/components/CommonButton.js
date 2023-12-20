/* eslint-disable prettier/prettier */
/* eslint-disable react/self-closing-comp */
import {View, Text} from 'react-native';
import React from 'react';
import {TouchableOpacity} from 'react-native-gesture-handler';
import LinearGradient from 'react-native-linear-gradient';

const CommonButton = ({w, h, text , onPress, status}) => {
  return (
    <TouchableOpacity 
    onPress={() => {
      onPress();
    }}
    style={{alignSelf:'center',marginTop:10,marginBottom:10 }}>
      {
        status ? (
          <LinearGradient
            colors={['#4c669f', '#3b5998', '#192f6a']}
            style={{
              width: w,
              height: h,
              justifyContent: 'center',
              alignItems: 'center',
              borderRadius:10,
            }}>
              <Text style={{color: '#fff', fontSize:16}}>{text}</Text>
          </LinearGradient>
        ) : (
          <LinearGradient
            colors={['#8e8e8e', '#f2f2f2']}
            style={{
              width: w,
              height: h,
              justifyContent: 'center',
              alignItems: 'center',
              borderRadius:10,
              opacity: 0.5,
            }}>
              <Text style={{color: '#fff', fontSize:16}}>{text}</Text>
          </LinearGradient>
        ) 
      }
     
    </TouchableOpacity>
  );
};

export default CommonButton;
