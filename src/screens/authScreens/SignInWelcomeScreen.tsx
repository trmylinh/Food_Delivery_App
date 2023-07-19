/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { StyleSheet, View, StatusBar, Text, TextInput, ScrollView, Image } from 'react-native';
import React from 'react';
import { colors, parameters } from '../../global/styles';
import { Icon, Button, SocialIcon } from 'react-native-elements';
import Swiper from 'react-native-swiper';
export default function SignInWelcomeScreen() {
    return (
        <View style={{ flex: 1 }}>
            <View style={styles.headerView}>
                <Text style={styles.textTitle}>DISCOVER RESTAURANTS</Text>
                <Text style={styles.textTitle}>IN YOUR AREA</Text>
            </View>

            <View style={{ flex: 10, justifyContent: 'center' }}>
                <Swiper autoplay={true}>
                    <View style={styles.slide}>
                        <Image
                            source={require('../../assets/images/food1.jpg')}
                            style={{ height: '100%', width: '100%' }}
                        />
                    </View>

                    <View style={styles.slide}>
                        <Image
                            source={require('../../assets/images/food4.jpg')}
                            style={{ height: '100%', width: '100%' }}
                        />
                    </View>

                    <View style={styles.slide}>
                        <Image
                            source={require('../../assets/images/food10.jpg')}
                            style={{ height: '100%', width: '100%' }}
                        />
                    </View>

                    <View style={styles.slide}>
                        <Image
                            source={require('../../assets/images/food9.jpg')}
                            style={{ height: '100%', width: '100%' }}
                        />
                    </View>
                </Swiper>
            </View>

            <View style={{ flex: 4, marginVertical: 20}}>
                <View style={{ margin: 20 }}>
                    <Button
                        title="SIGN IN"
                        buttonStyle={styles.styledButton}
                        titleStyle={styles.buttonTitle}
                    />
                </View>

                <View style={{marginHorizontal: 20, marginBottom: 10 }}>
                    <Button
                        title="Create an account"
                        buttonStyle={styles.createButton}
                        titleStyle={styles.createButtonTitle}
                    />
                </View>
            </View>
        </View>
    );
}
const styles = StyleSheet.create({
    textTitle: {
        fontSize: 22,
        color: colors.buttons,
        fontWeight: 'bold',
    },
    headerView: {
        flex: 3,
        justifyContent: 'flex-start',
        alignItems: 'center',
        paddingTop: 20,
    },
    slide: {
        flex: 1,
        justifyContent: 'center',
        alignContent: 'center',
    },
    styledButton: {
        backgroundColor: '#ff8c52',
        alignContent: 'center',
        justifyContent: 'center',
        borderRadius: 12,
        borderwidth: 1,
        borderColor: '#ff8c52',
        height: 50,
        paddingHorizontal: 20,
        width: '100%',
    },
    buttonTitle: {
        color: 'white',
        fontSize: 20,
        fontWeight: 'bold',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: -3,
    },
    createButton: {
        backgroundColor: '#fff',
        alignContent: 'center',
        justifyContent: 'center',
        borderRadius: 12,
        borderWidth: 1,
        borderColor: colors.buttons,
        height: 50,
        paddingHorizontal: 20,
    },
    createButtonTitle: {
        color: colors.grey1,
        fontSize: 20,
        fontWeight: 'bold',
        alignItems: 'center',
        justifyContent: 'center',
    },
});
