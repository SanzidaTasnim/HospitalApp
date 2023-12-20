/* eslint-disable react/self-closing-comp */
/* eslint-disable react-native/no-inline-styles */
/* eslint-disable eqeqeq */
import {View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native';
import React from 'react';
import Header from '../components/Header';
import {FlatList, ScrollView} from 'react-native-gesture-handler';
import LinearGradient from 'react-native-linear-gradient';
import CommonButton from '../components/CommonButton';

const Home = ({navigation}) => {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.container}>
        <Header title={'DoctorApp'} icon={require('../images/logo.png')} />
        <Image source={require('../images/banner.jpg')} style={styles.banner} />
        <Text style={styles.heading}>Select Category</Text>
        <View style={{marginTop: 20}}>
          <FlatList
            data={[1, 1, 1, 1, 1, 1, 1]}
            horizontal
            showsHorizontalScrollIndicator={false}
            renderItem={({item, index}) => {
              return (
                <TouchableOpacity>
                  <LinearGradient
                    colors={['#4c669f', '#3b5998', '#192f6a']}
                    style={styles.linearGradient}>
                    <Text style={styles.CatName}>
                      {'Category ' + (index + 1)}
                    </Text>
                  </LinearGradient>
                </TouchableOpacity>
              );
            }}
          />
        </View>
        <Text style={styles.heading}>Top Rated Doctors</Text>
        <View style={{marginTop: 20, alignItems: 'center'}}>
          <FlatList
            data={[1, 1, 1, 1, 1, 1]}
            numColumns={2}
            renderItem={({item, index}) => {
              return (
                <View style={styles.doctor}>
                  <Image
                    source={require('../images/doctor3.png')}
                    style={styles.doctorImage}></Image>
                  <Text style={styles.docName}>Doctor {index + 1}</Text>
                  <Text style={styles.docexpertise}>Cardiologist</Text>
                  <Text
                    style={[
                      styles.status,
                      {
                        color: index % 2 == 0 ? 'green' : 'red',
                        opacity: index % 2 == 0 ? 1 : 0.5,
                      },
                    ]}>
                    {index % 2 == 0 ? 'Available' : 'Busy'}
                  </Text>
                  <CommonButton
                    w={150}
                    h={40}
                    text={'Book Appointment'}
                    status={index % 2 == 0 ? true : false}
                    onPress={() => {
                      if (index % 2 == 0) {
                        navigation.navigate('BookAppointment');
                      }
                    }}
                  />
                </View>
              );
            }}
          />
        </View>
      </View>
    </ScrollView>
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
  linearGradient: {
    width: 120,
    height: 80,
    borderRadius: 10,
    marginLeft: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  CatName: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '700',
  },
  doctor: {
    width: '46%',
    backgroundColor: '#fff',
    borderRadius: 10,
    borderWidth: 0.2,
    margin: 10,
  },
  doctorImage: {
    width: 60,
    height: 60,
    borderRadius: 40,
    alignSelf: 'center',
    marginTop: 20,
  },
  docName: {
    fontsize: 16,
    fontWeight: '600',
    alignSelf: 'center',
    marginTop: 10,
    color: '#000',
  },
  docexpertise: {
    color: 'green',
    fontWeight: '600',
    fontSize: 14,
    marginTop: 5,
    alignSelf: 'center',
    backgroundColor: '#f2f2f2',
    padding: 5,
    borderRadius: 5,
  },
  status: {
    fontWeight: '600',
    fontSize: 14,
    marginTop: 5,
    alignSelf: 'center',
  },
});
