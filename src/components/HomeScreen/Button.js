import React, { Component } from "react";
import { StyleSheet, View, Text, Dimensions } from "react-native";
import { FontAwesome5 }  from '@expo/vector-icons';
import { COLORS } from '../../assets/utils/colors';

const windowWidth = Dimensions.get('window').width;

function Button(props) {
    const { iconName, buttonTitle } = props;
  return (
    <View style={styles.container}>
        <View style={styles.box}>
        <FontAwesome5 name={iconName} size={20} color={COLORS.pinacall_pink_right} />
        <Text style={styles.buttonText}>{buttonTitle}</Text>
        </View>
    </View>
  );
}

const styles = StyleSheet.create({
    container: {
        paddingRight: 5
    },
    box: {
        borderColor: COLORS.border,
        borderWidth: 1,
        width: windowWidth/4 - 10,
        borderRadius: 10,
        height: 68,
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
        marginTop: 7, 
        fontSize: 10, 
        fontWeight: 'bold', 
        color: COLORS.border,
    }
});

export default Button;