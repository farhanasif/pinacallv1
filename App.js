import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Signin from './src/screens/Signin';
import SignUp from './src/screens/SignUp';
import ForgotPassword from './src/screens/ForgotPassword';

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Signin" screenOptions={{headerShown: false,}}>
        <Stack.Screen name="SignUp" component={SignUp} />
        <Stack.Screen name="Signin" component={Signin} />
        <Stack.Screen name="ForgotPassword" component={ForgotPassword} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;