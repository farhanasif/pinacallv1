import React from 'react';
import { View, StyleSheet, Image } from 'react-native';
import MySVGImage from '../assets/images/undraw_Select_re_3kbd.svg';

import Title from '../components/HomeScreen/Title';
import Button from '../components/HomeScreen/Button';

const MySVGSize = 160;

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
            <Button iconName="phone" buttonTitle="Pin a Call" />
            <Button iconName="shopping-bag" buttonTitle="Window Shopping" />
            <Button iconName="hotel" buttonTitle="Hotel Booking" />
            <Button iconName="user-shield" buttonTitle="Expert Advise" />
          </View>
          <View style={styles.row}>
            <Button iconName="eye" buttonTitle="3rd Eye" />
            <Button iconName="hands-helping" buttonTitle="SOS" />
          </View>
        </View>
      </View>
      <View style={{ position : 'absolute', bottom: 0, right: 0}}>
        <MySVGImage width={MySVGSize} height={MySVGSize}/>
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
  row: { 
    flexDirection: 'row', 
    alignItems: 'flex-start',
    paddingTop: 20,
    paddingHorizontal: 10
  },
});