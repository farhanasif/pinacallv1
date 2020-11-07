import * as React from 'react';
import { View, Text, Button, TouchableOpacity } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import { COLORS } from '../assets/utils/colors';
import { Appbar } from 'react-native-paper';
import { LinearGradient } from 'expo-linear-gradient';

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
      
      <View style={{ flex:1,  alignItems: 'center', justifyContent: 'center' }}>
        <Text>Home Screen</Text>
        <Button onPress={() => navigation.navigate('Query')}   title="Learn More"
        color="#841584" />
      </View>
      
    </View>
  );
}