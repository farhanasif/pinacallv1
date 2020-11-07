import React from 'react';
import { View, StyleSheet } from 'react-native';
import {
    useTheme,
    Avatar,
    Title,
    Caption,
    Paragraph,
    Drawer,
    Text,
    TouchableRipple,
    Switch
} from 'react-native-paper';
import {
    DrawerContentScrollView,
    DrawerItem
} from '@react-navigation/drawer';

//import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { MaterialCommunityIcons as Icon }  from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';

import{ AuthContext } from './context';

export function DrawerContent(props) {

    const paperTheme = useTheme();

    //const { signOut, toggleTheme } = React.useContext(AuthContext);

    return(
        <LinearGradient colors={['#E7412B','#F50B5E', '#CF005F', '#9A0F3C']} start={[0.0, 0.5]} end={[1.0, 0.5]} style={{flex:1}}>
            
                <DrawerContentScrollView {...props}>
                    <View style={styles.drawerContent}>
                        <View style={styles.userInfoSection}>
                            <View style={{flexDirection:'row',marginTop: 15}}>
                                <Avatar.Image 
                                    source={require('../assets/images/villager-icon.png')}
                                    size={50}
                                />
                                <View style={{marginLeft:15, flexDirection:'column'}}>
                                    <Title style={styles.title}>Farhan Asif</Title>
                                    <Caption style={styles.caption}>user mode</Caption>
                                </View>
                            </View>

                            <View style={styles.row}>
                                <View style={styles.section}>
                                    <Paragraph style={[styles.paragraph, styles.caption]}>80</Paragraph>
                                    <Caption style={styles.caption}>Query</Caption>
                                </View>
                                <View style={styles.section}>
                                    <Paragraph style={[styles.paragraph, styles.caption]}>100</Paragraph>
                                    <Caption style={styles.caption}>Hosted/Served</Caption>
                                </View>
                            </View>
                        </View>

                        <Drawer.Section style={styles.drawerSection}>
                            <DrawerItem 
                                icon={({color, size}) => (
                                    <Icon 
                                    name="home-outline" 
                                    color="#FFF"
                                    size={size}
                                    />
                                )}
                                label="Home"
                                labelStyle={{color: '#FFF', fontWeight: '700'}}
                                onPress={() => {props.navigation.navigate('Home')}}
                            />
                            <DrawerItem 
                                icon={({color, size}) => (
                                    <Icon 
                                    name="account-outline" 
                                    color="#FFF"
                                    size={size}
                                    />
                                )}
                                label="Profile"
                                labelStyle={{color: '#FFF', fontWeight: '700'}}
                                onPress={() => {props.navigation.navigate('Query')}}
                            />
                            <DrawerItem 
                                icon={({color, size}) => (
                                    <Icon 
                                    name="bookmark-outline" 
                                    color="#FFF"
                                    size={size}
                                    />
                                )}
                                label="General Query"
                                labelStyle={{color: '#FFF', fontWeight: '700'}}
                                onPress={() => {props.navigation.navigate('Query')}}
                            />
                            <DrawerItem 
                                icon={({color, size}) => (
                                    <Icon 
                                    name="settings-outline" 
                                    color="#FFF"
                                    size={size}
                                    />
                                )}
                                label="Settings"
                                labelStyle={{color: '#FFF', fontWeight: '700'}}
                                onPress={() => {props.navigation.navigate('Query')}}
                            />
                            <DrawerItem 
                                icon={({color, size}) => (
                                    <Icon 
                                    name="account-check-outline" 
                                    color="#FFF"
                                    size={size}
                                    />
                                )}
                                label="Support"
                                labelStyle={{color: '#FFF', fontWeight: '700'}}
                                onPress={() => {props.navigation.navigate('Query')}}
                            />
                        </Drawer.Section>
                        <Drawer.Section title="Preferences" style={{color: '#FFF'}}>
                            <TouchableRipple onPress={() => {toggleTheme()}}>
                                <View style={styles.preference}>
                                    <Text style={{color: '#FFF', fontWeight: '700'}}>Host mode</Text>
                                    <View pointerEvents="none">
                                        <Switch value={paperTheme.dark}/>
                                    </View>
                                </View>
                            </TouchableRipple>
                        </Drawer.Section>
                    </View>
                </DrawerContentScrollView>
                <Drawer.Section style={styles.bottomDrawerSection}>
                    <DrawerItem 
                        icon={({color, size}) => (
                            <Icon 
                            name="exit-to-app" 
                            color="#FFF"
                            size={size}
                            />
                        )}
                        label="Sign Out"
                        labelStyle={{color: '#FFF', fontWeight: '700'}}
                        onPress={() => console.log('here')}
                    />
                </Drawer.Section>
            </LinearGradient>
        //</View>
    );
}

const styles = StyleSheet.create({
    drawerContent: {
      flex: 1,
    },
    userInfoSection: {
      paddingLeft: 20,
    },
    title: {
      fontSize: 16,
      marginTop: 3,
      fontWeight: 'bold',
      color: '#FFF'
    },
    caption: {
      fontSize: 14,
      lineHeight: 14,
      color: '#FFF'
    },
    row: {
      marginTop: 20,
      flexDirection: 'row',
      alignItems: 'center',
    },
    section: {
      flexDirection: 'row',
      alignItems: 'center',
      marginRight: 15,
    },
    paragraph: {
      fontWeight: 'bold',
      marginRight: 3,
    },
    drawerSection: {
      marginTop: 15,
    },
    bottomDrawerSection: {
        marginBottom: 15,
        borderTopColor: '#f4f4f4',
        borderTopWidth: 1
    },
    preference: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      paddingVertical: 12,
      paddingHorizontal: 16,
    },
  });