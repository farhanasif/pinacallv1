import * as React from 'react';
import { StyleSheet, Text, View,Image, TouchableOpacity, TextInput } from 'react-native';
import { Input, Button } from 'react-native-elements';
import { Dimensions } from 'react-native';
import { Entypo, FontAwesome, MaterialCommunityIcons } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';
import { COLORS } from '../assets/utils/colors';

const screen = Dimensions.get("screen");
const WIDTH = screen.width;

const Signin = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Image
        source={require("../assets/images/pinacall_final_01.png")}
        resizeMode="contain"
        style={styles.image}
      ></Image>
      <View style={{marginHorizontal: 10}}>
        <View style={styles.searchSection}>
            <Entypo style={styles.searchIcon} name="mobile" size={24}/>
            <TextInput
                style={styles.input}
                placeholder="MOBILE"
                underlineColorAndroid={COLORS.pinacall_pink}
            />
        </View>
        <View style={styles.searchSection}>
            <Entypo style={styles.searchIcon} name="keyboard" size={24}/>
            <TextInput
                style={styles.input}
                secureTextEntry={true}
                placeholder="PASSWORD"
                underlineColorAndroid={COLORS.pinacall_pink}
            />
        </View>
        <Button
          title="Sign In"
          icon={
            <FontAwesome
              name="sign-in"
              size={15}
              color="white"
              style={{marginRight: 10}}
            />
          }
          ViewComponent={LinearGradient}
          linearGradientProps={{
            colors: ['#E7412B','#F50B5E','#CF005F', '#9A0F3C'],
            start: { x: 0, y: 0.5 },
            end: { x: 1, y: 0.5 },
          }}
          buttonStyle={{marginTop: 20,}}
          onPress={() => navigation.navigate('Root')}
        />
        <Button
          title="Sign In With Gmail"
          icon={
            <MaterialCommunityIcons
              name="gmail"
              size={15}
              color="white"
              style={{marginRight: 10}}
            />
          }
          ViewComponent={LinearGradient}
          linearGradientProps={{
            colors: ['#E7412B','#F50B5E','#CF005F', '#9A0F3C'],
            start: { x: 0, y: 0.5 },
            end: { x: 1, y: 0.5 },
          }}
          buttonStyle={{marginTop: 10, width: 200}}
        />
        <Button
          title="Create a new account"
          type="clear"
          titleStyle={{ color: COLORS.pinacall_pink }}
          onPress={() => navigation.navigate('SignUp')}
        />
        <Button
          title="Forgot Password"
          type="clear"
          titleStyle={{ color: COLORS.pinacall_pink }}
          onPress={() => navigation.navigate('ForgotPassword')}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.white,
    alignItems: 'center',
    justifyContent: 'center'
  },
  image: {
    width: 260,
    height: 250,
    marginTop: 0,
    alignSelf: "center"
  },
  searchSection: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: COLORS.white,
  },
  searchIcon: {
      padding: 10,
      color: COLORS.pinacall_pink,
  },
  input: {
      flex: 1,
      paddingTop: 10,
      paddingRight: 10,
      paddingBottom: 10,
      paddingLeft: 3,
      backgroundColor: COLORS.white,
      color: COLORS.placeholder,
      fontSize: 15
  },
});

export default Signin;