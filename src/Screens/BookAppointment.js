import {View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native';
import React, {useEffect, useState} from 'react';
import Header from '../components/Header';
import {
  Directions,
  FlatList,
  ScrollView,
  TextInput,
} from 'react-native-gesture-handler';
import CommonButton from '../components/CommonButton';
let daysList = [];
const BookAppointment = ({navigation}) => {
  const [selectedSlot, setSelectedSlot] = useState();
  const [selectedGender, setSelectedGender] = useState(0);
  const [selectedDay, setSelectedDay] = useState(-1);
  useEffect(() => {
    for (let i = 1; i <= getDays(new Date().getMonth() + 1); i++) {
      daysList.push({day: i, selected: false});
    }
  }, []);
  const getDays = month => {
    let days = 0;
    if (month == 1) {
      days = 31;
    } else if (month == 2) {
      days = 28;
    } else if (month == 3) {
      days = 31;
    } else if (month == 4) {
      days = 30;
    } else if (month == 5) {
      days = 31;
    } else if (month == 6) {
      days = 30;
    } else if (month == 7) {
      days = 31;
    } else if (month == 8) {
      days = 31;
    } else if (month == 9) {
      days = 30;
    } else if (month == 10) {
      days = 31;
    } else if (month == 11) {
      days = 30;
    } else if (month == 12) {
      days = 31;
    }
    return days;
  };
  return (
    <ScrollView style={styles.container}>
      <View style={styles.container}>
        <Header
          icon={require('../images/left-arrow.png')}
          title={'Book Appointment'}
        />
        <Image
          source={require('../images/doctor3.png')}
          style={styles.doctorImage}
        />
        <Text style={styles.name}>Dr.Samina Chowdhury </Text>
        <Text style={styles.specialist}>Cardiologist</Text>
        <Text style={styles.heading}>Select Date</Text>
        <View style={{marginTop: 20}}>
          <FlatList
            horizontal
            data={daysList}
            keyExtractor={({item, index}) => index}
            renderItem={({item, index}) => {
              return (
                <TouchableOpacity
                  style={{
                    width: 50,
                    height: 60,
                    borderRadius: 10,
                    justifyContent: 'center',
                    alignItems: 'center',
                    backgroundColor: selectedDay == index ? 'blue' : 'white',
                    borderWidth: selectedDay == index ? 0 : 1,
                    marginLeft: 10,
                  }}
                  onPress={() => {
                    if (item.date < new Date().getDate()) {
                    } else {
                      setSelectedDay(index);
                    }
                  }}>
                  <Text style={{color: selectedDay == index ? '#fff' : 'blue'}}>
                    {' '}
                    {item.day}{' '}
                  </Text>
                </TouchableOpacity>
              );
            }}
          />
        </View>
        <Text style={styles.heading}>Available Slots</Text>
        <View>
          <FlatList
            numColumns={2}
            data={[
              '10:00AM-12:00PM',
              '12:00PM-02:00PM',
              '02:00AM-12:00PM',
              '02:00PM-04:00PM',
              '04:00PM-06:00PM',
              '06:00PM-08:00PM',
            ]}
            renderItem={({item, index}) => {
              return (
                <TouchableOpacity
                  style={[
                    styles.timeSlot,
                    {borderColor: selectedSlot == index ? 'blue' : 'black'},
                  ]}
                  onPress={() => {
                    setSelectedSlot(index);
                  }}>
                  <Text
                    style={{color: selectedSlot == index ? 'blue' : 'black'}}>
                    {item}
                  </Text>
                </TouchableOpacity>
              );
            }}
          />
        </View>
        <Text style={styles.heading}>Patient Name</Text>
        <TextInput
          style={[styles.nameInput, {color: '#000'}]}
          placeholder="Enter Name"
        />
        <Text style={styles.heading}>Select Gender</Text>
        <View style={styles.gender}>
          <TouchableOpacity
            style={[
              styles.genderbtn,
              {
                borderWidth: 0.5,
                borderColor: selectedGender == 0 ? 'blue' : 'black',
              },
            ]}
            onPress={() => {
              setSelectedGender(0);
            }}>
            <Image
              source={require('../images/male.png')}
              style={{width: 24, height: 24}}
            />
          </TouchableOpacity>
          <TouchableOpacity
            style={[
              styles.genderbtn,
              {
                borderWidth: 0.5,
                borderColor: selectedGender == 1 ? 'pink' : 'black',
              },
            ]}
            onPress={() => {
              setSelectedGender(1);
            }}>
            <Image
              source={require('../images/female.png')}
              style={{width: 24, height: 24}}
            />
          </TouchableOpacity>
        </View>
        <View style={{marginTop: 20, marginBottom: 20}}>
          <CommonButton
            w={200}
            h={45}
            text={'Book Now'}
            status={true}
            onPress={() => {
              navigation.navigate('Success');
            }}
          />
        </View>
      </View>
    </ScrollView>
  );
};

export default BookAppointment;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  doctorImage: {
    width: 100,
    height: 100,
    marginTop: 50,
    alignSelf: 'center',
  },
  name: {
    color: '#000',
    fontSize: 20,
    fontWeight: '700',
    alignSelf: 'center',
    marginTop: 10,
  },
  specialist: {
    color: '#000',
    fontSize: 16,
    fontWeight: '700',
    alignSelf: 'center',
    marginTop: 10,
    backgroundColor: '#f2f2f2',
    color: 'green',
    borderRadius: 10,
  },
  heading: {
    color: '#000',
    fontSize: 18,
    fontWeight: '700',
    marginTop: 15,
    marginLeft: 15,
  },
  timeSlot: {
    width: '45%',
    height: 40,
    borderRadius: 10,
    borderWidth: 0.5,
    margin: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  nameInput: {
    borderRadius: 10,
    marginTop: 10,
    width: '94%',
    height: 45,
    borderWidth: 0.5,
    alignSelf: 'center',
    paddingLeft: 20,
  },
  gender: {
    marginTop: 20,
    justifyContent: 'space-evenly',
    alignItems: 'center',
    flexDirection: 'row',
  },
  genderbtn: {
    borderRadius: 10,
    width: 60,
    height: 60,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
