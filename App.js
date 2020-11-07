import * as React from 'react';
import { View, Text } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { FontAwesome } from '@expo/vector-icons';


import Signin from './src/screens/Signin';
import SignUp from './src/screens/SignUp';
import ForgotPassword from './src/screens/ForgotPassword';
import HomeScreen from './src/screens/HomeScreen';
import QueryScreen from './src/screens/QueryScreen';

const Drawer = createDrawerNavigator();




const Stack = createStackNavigator();


function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Signin" >
        <Stack.Screen name="SignUp" component={SignUp} options={{headerShown: false,}}/>
        <Stack.Screen name="Home" component={HomeScreen} options={{ title: 'Pinacall' }}/>
        <Stack.Screen name="Query" component={QueryScreen} options={{ title: 'General Query' }}/>
        <Stack.Screen name="Signin" component={Signin} options={{headerShown: false,}}/>
        <Stack.Screen name="ForgotPassword" component={ForgotPassword} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;