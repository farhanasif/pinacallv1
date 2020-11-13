import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import { COLORS } from '../assets/utils/colors';
import { Dimensions } from 'react-native';
import { FontAwesome5, MaterialCommunityIcons }  from '@expo/vector-icons';
import MySVGImage from '../assets/images/undraw_Select_re_3kbd.svg';
const windowWidth = Dimensions.get('window').width;

import Title from '../components/HomeScreen/Title';


export default function HomeScreen({navigation}) {
  return (
    <View style={{flex:1}}>
      <View style={{ flex: 1,}}>
        <View style={styles.header}>
          <Image
            style={{height: 140, width: 140}}
            source={require('../assets/images/pinacall_final_01.png')}
          />
        </View>
        <View>
          <Title headerText="Welcome Farhan," description="Choose the type of service you are interested in"/>
          <Title headerText="DISCOVER PINACALL" description="What you are looking for?"/>
          <View style={styles.row}>
          <View style={{paddingRight: 5}}>
            <View style={styles.box}>
                <FontAwesome5 name="hotel" size={20} color={COLORS.pinacall_pink_right} />
                <Text style={styles.buttonText}>Pin a Call</Text>
              </View>
            </View>
            <View style={{paddingRight: 5}}>
              <View style={styles.box}>
                <FontAwesome5 name="hotel" size={20} color={COLORS.pinacall_pink_right}  />
                <Text style={styles.buttonText}>Window Shopping</Text>
              </View>
            </View>
            <View style={{paddingRight: 5}}>
              <View style={styles.box}>
                <FontAwesome5 name="hotel" size={20} color={COLORS.pinacall_pink_right} />
                <Text style={styles.buttonText}>Hotel Booking</Text>
              </View>
            </View>
            <View style={styles.box}>
              <FontAwesome5 name="hotel" size={20} color={COLORS.pinacall_pink_right} />
              <Text style={styles.buttonText}>Expert Advise</Text>
            </View>
          </View>
          <View style={styles.row}>
            <View style={{paddingRight: 5}}>
              <View style={styles.box}>
                <FontAwesome5 name="hotel" size={20} color={COLORS.pinacall_pink_right}  />
                <Text style={styles.buttonText}>3rd Eye</Text>
              </View>
            </View>
            <View style={{paddingRight: 5}}>
              <View style={styles.box}>
                <FontAwesome5 name="hotel" size={20} color={COLORS.pinacall_pink_right} />
                <Text style={styles.buttonText}>SOS</Text>
              </View>
            </View>
          </View>
        </View>
      </View>
      <View style={{ position : 'absolute', bottom: 0, right: 0}}>
        <MySVGImage width={110} height={110}/>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  header:{
    paddingTop: 40,
    alignItems: 'center',
    justifyContent: 'center'
  },  
  box: {
    borderColor: COLORS.border,
    borderWidth: 1,
    width: windowWidth/4 - 10,
    borderRadius: 10,
    height: 70,
    alignItems: 'center',
    justifyContent: 'center',
  },
  row: { 
    flexDirection: 'row', 
    alignItems: 'flex-start',
    paddingTop: 20,
    paddingHorizontal: 10
  },
  buttonText: {
    marginTop: 4, 
    fontSize: 10, 
    fontWeight: '700', 
    color: '#000'
  }
});