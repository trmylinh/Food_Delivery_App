/* eslint-disable prettier/prettier */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { View, Text, StyleSheet, Dimensions } from 'react-native';
import React from 'react';
import { colors, parameters } from '../global/styles';
import { Icon } from 'react-native-elements';

export default function Header({ title, type }: any) {
    return (
        <View style={styles.header}>
            <View style={{marginLeft: 20}}>
                <Icon
                    type="material-community"
                    name={type}
                    color={colors.headerText}
                    size={25}
                    onPress={() => { }}
                />

            </View>
            <View>
                <Text style={styles.headerText}>{title}</Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    header: {
        flexDirection: 'row',
        backgroundColor: colors.buttons,
        height: 40,
    },
    headerText: {
        color: colors.headerText,
        fontSize: 20,
        fontWeight: 'bold',
        marginLeft: 20,
    },
});
