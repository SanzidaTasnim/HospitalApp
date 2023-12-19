/* eslint-disable prettier/prettier */
import {View, Text, StyleSheet, Image} from 'react-native';
import React from 'react';
import { TouchableOpacity } from 'react-native-gesture-handler';

const Header = ({title, icon}) => {
  return (
    <View style={styles.header}>
        <TouchableOpacity style={styles.backbtn}>
            <Image source={icon} style={styles.back} />
        </TouchableOpacity>
      <Text style={[styles.title, {marginLeft: 10}]}>{title}</Text>
    </View>
  );
};
export default Header;

const styles = StyleSheet.create({
  header: {
    height: 68,
    width: '100%',
    flexDirection: 'row',
    backgroundColor: '#fff',
    elevation: 5,
    alignItems: 'center',
    paddingLeft: 20,
  },
  back: {
    width: 30,
    height: 24,
  },
  backbtn: {
    width: 30,
    height: 30,
    borderRadius: 15,
  },
  title: {
    fontSize: 16,
    fontWeight: '600',
    color: '#333',
  }
});
