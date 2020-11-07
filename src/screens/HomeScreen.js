import * as React from 'react';
import { View, Text, Button, TouchableOpacity } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import { COLORS } from '../assets/utils/colors';

export default function HomeScreen({navigation}) {
  
  React.useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <TouchableOpacity
          style={{paddingRight: 20}}
          onPress={() => console.log('here')}
        >
          <FontAwesome name="bars" size={23} color={COLORS.pinacall_pink} />
        </TouchableOpacity>
      ),
      headerLeft: null
    });
  }, [navigation]);

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Home Screen</Text>
      <Button onPress={() => navigation.navigate('Query')}   title="Learn More"
      color="#841584" />
    </View>
  );
}