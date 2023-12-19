import {View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native';
import React from 'react';
import Header from '../components/Header';
import {FlatList} from 'react-native-gesture-handler';
import LinearGradient from 'react-native-linear-gradient';

const Home = () => {
  return (
    <View style={styles.container}>
      <Header title={'DoctorApp'} icon={require('../images/logo.png')} />
      <Image source={require('../images/banner.jpg')} style={styles.banner} />
      <Text style={styles.heading}>Select Category</Text>
      <View>
        <FlatList
          data={[1, 1, 1, 1, 1, 1, 1]}
          renderItem={({item, index}) => {
            return (
              <TouchableOpacity>
                {/* <LinearGradient
                  colors={['#4c669f', '#3b5998', '#192f6a']}
                  style={styles.linearGradient}>
                    
                </LinearGradient> */}
              </TouchableOpacity>
            );
          }}
        />
      </View>
    </View>
  );
};

export default Home;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  banner: {
    width: '100%',
    height: 200,
    borderRadius: 20,
    alignSelf: 'center',
    marginTop: 10,
  },
  heading: {
    color: '#000',
    fontSize: 18,
    fontWeight: '700',
    marginTop: 15,
    marginLeft: 15,
  },
});
