import * as React from 'react';
import { View, Text, Button, TouchableOpacity } from 'react-native';
import { COLORS } from '../assets/utils/colors';
import { Appbar } from 'react-native-paper';
import { LinearGradient } from 'expo-linear-gradient';
import { Dimensions } from 'react-native';
import { FontAwesome5, MaterialCommunityIcons }  from '@expo/vector-icons';
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;


export default function HomeScreen({navigation}) {
  const _goBack = () => console.log('Went back');

  const _handleSearch = () => console.log('Searching');

  const _handleMore = () => navigation.openDrawer();


  return (
    <View style={{ flex: 1,}}>
      <LinearGradient colors={['#E7412B','#F50B5E', '#CF005F', '#9A0F3C']} start={[0.0, 0.5]} end={[1.0, 0.5]} >
        <Appbar.Header style={{paddingLeft: 15, backgroundColor: 'transparent'}}>
          <Appbar.Content title="Pinacall" subtitle="Pinacall Subtitle" color="#FFF"/>
          <Appbar.Action icon="magnify" onPress={_handleSearch} color="#FFF"/>
          <Appbar.Action icon="dots-horizontal-circle" onPress={_handleMore} color="#FFF"/>
        </Appbar.Header>
      </LinearGradient>
      
      <View>
        <View style={{ alignItems: 'flex-start', paddingLeft: 20, paddingTop: 20 }}>
          <Text style={{ fontSize: 22, fontWeight: '700'}}>Welcome Farhan,</Text>
          <Text style={{ fontWeight: '300', color: '#414141'}}>Choose the type of service you are interested</Text>
        </View>
        <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-around', paddingTop: 30}}>
          <View style={{
            borderColor: COLORS.pinacall_middle,
            borderWidth: 3,
            width: windowWidth/2 - 30,
            borderRadius: 10,
            height: 170,
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: COLORS.pinacall_middle,
            shadowColor: "#000",
            shadowOffset: {
              width: 0,
              height: 5,
            },
            shadowOpacity: 0.34,
            shadowRadius: 6.27,

            elevation: 10,
          }}>
            <MaterialCommunityIcons name="briefcase-search" size={55} color="white" />
            <Text style={{marginTop: 40, fontSize: 16, fontWeight: '700', color: '#FFF'}}>GENERAL QUERY</Text>
          </View>
          <View style={{
            borderColor: COLORS.pinacall_middle,
            borderWidth: 3,
            width: windowWidth/2 - 30,
            borderRadius: 10,
            height: 170,
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: COLORS.pinacall_orange,
            shadowColor: "#000",
            shadowOffset: {
              width: 0,
              height: 5,
            },
            shadowOpacity: 0.34,
            shadowRadius: 6.27,

            elevation: 10,
          }}>
            <FontAwesome5 name="user-cog" size={55} color="white" />
            <Text style={{marginTop: 40, fontSize: 16, fontWeight: '700', color: '#FFF'}}>MY ACCOUNT</Text>
          </View>
        </View>
        <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-around', paddingTop: 30}}>
          <View style={{
            borderColor: COLORS.orange2,
            borderWidth: 3,
            width: windowWidth/2 - 30,
            borderRadius: 10,
            height: 170,
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: COLORS.orange2,
            shadowColor: "#000",
            shadowOffset: {
              width: 0,
              height: 5,
            },
            shadowOpacity: 0.34,
            shadowRadius: 6.27,

            elevation: 10,
          }}>
            <MaterialCommunityIcons name="file-document-outline" size={55} color="white" />
            <Text style={{marginTop: 40, fontSize: 16, fontWeight: '700', color: '#FFF'}}>HISTORY</Text>
          </View>
          <View style={{
            borderColor: COLORS.pinacall_pink,
            borderWidth: 3,
            width: windowWidth/2 - 30,
            borderRadius: 10,
            height: 170,
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: COLORS.pinacall_pink,
            shadowColor: "#000",
            shadowOffset: {
              width: 0,
              height: 5,
            },
            shadowOpacity: 0.34,
            shadowRadius: 6.27,

            elevation: 10,
          }}>
          <FontAwesome5 name="money-check" size={55} color="white" />
            <Text style={{marginTop: 40, fontSize: 16, fontWeight: '700', color: '#FFF'}}>MY BILLING</Text>
          </View>
        </View>
      </View>
      
    </View>
  );
}