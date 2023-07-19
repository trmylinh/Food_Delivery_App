/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { StyleSheet, View, StatusBar, Text, TextInput, ScrollView } from 'react-native';
import React, { useRef, useState } from 'react';
import { colors, parameters } from '../../global/styles';
import { Icon, Button, SocialIcon } from 'react-native-elements';
import Header from '../../components/Header';
import * as Animatable from 'react-native-animatable';
export default function SignInScreen() {
    const [passwordFocus, setPasswordFocus] = useState(false);
    const emailInput = useRef<any>(1);
    const passwordInput = useRef<any>(2);
    return (
        <View style={styles.container}>
            <Header title="MY ACCOUNT" type="arrow-left" />
            <ScrollView>
                <View style={{ marginLeft: 20, marginTop: 10 }}>
                    <Text style={styles.title}>Sign In</Text>
                </View>
                <View style={{ alignItems: 'center', marginTop: 10 }}>
                    <Text style={styles.text1}>Please enter the email and password</Text>
                    <Text style={styles.text1}>registered with your account</Text>
                </View>
                <View style={{ marginTop: 20 }}>
                    <View>
                        <TextInput
                            style={styles.textInput1}
                            placeholder="Email"
                            ref={emailInput}
                        />
                    </View>
                    <View style={styles.textInput2}>
                        <Animatable.View>
                            <Icon
                                name="lock"
                                iconStyle={{ color: colors.grey3 }}
                                type="material"
                            />
                        </Animatable.View>
                        <TextInput
                            style={{ width: '80%' }}
                            placeholder="Password"
                            ref={passwordInput}
                            onFocus={() => setPasswordFocus(false)}
                            onBlur={() => setPasswordFocus(true)}
                        />
                        <Animatable.View animation={passwordFocus ? '' : 'fadeInLeft'} duration={400}>
                            <Icon
                                name="visibility-off"
                                iconStyle={{ color: colors.grey3 }}
                                type="material"
                            />
                        </Animatable.View>
                    </View>
                </View>

                <View style={{ margin: 20 }}>
                    <Button
                        title="SIGN IN"
                        buttonStyle={styles.styledButton}
                        titleStyle={styles.buttonTitle}
                    />
                </View>

                <View style={{ alignItems: 'center' }}>
                    <Text style={{ ...styles.text1, textDecorationLine: 'underline' }}>Forgot Password ?</Text>
                </View>

                <View style={{ alignItems: 'center', marginVertical: 30 }}>
                    <Text style={{ fontSize: 20, fontWeight: 'bold', color: '#000' }}>OR</Text>
                </View>

                <View style={{ marginHorizontal: 10}}>
                    <SocialIcon
                        title="Sign in with Facebook"
                        button
                        type="facebook"
                        style={styles.socialIcon}
                        onPress={() => { }}
                    />
                </View>

                <View style={{ marginHorizontal: 10, marginTop: 20 }}>
                    <SocialIcon
                        title="Sign in with Google"
                        button
                        type="google"
                        style={styles.socialIcon}
                        onPress={() => { }}
                    />
                </View>

                <View style={{ marginTop: 20, marginLeft: 20 }}>
                    <Text style={{ ...styles.text1 }}>New on XpressFood ?</Text>
                </View>

                <View style={{ alignItems: 'flex-end', marginHorizontal: 20, marginBottom: 10}}>
                    <Button
                        title="Create an account"
                        buttonStyle={styles.createButton}
                        titleStyle={styles.createButtonTitle}
                    />
                </View>
            </ScrollView>
        </View>
    );
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    title: {
        color: '#ff8c52',
        fontSize: 20,
        fontWeight: 'bold',
    },
    text1: {
        color: colors.grey3,
        fontSize: 15,
    },
    textInput1: {
        borderWidth: 1,
        borderColor: '#86939e',
        marginHorizontal: 20,
        borderRadius: 12,
        marginBottom: 20,
        paddingHorizontal: 15,
    },
    textInput2: {
        borderWidth: 1,
        borderColor: '#86939e',
        marginHorizontal: 20,
        borderRadius: 12,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignContent: 'center',
        alignItems: 'center',
        paddingHorizontal: 10,
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
    socialIcon: {
        borderRadius: 12,
        height: 50,
    },
    createButton: {
        backgroundColor: '#fff',
        alignContent: 'center',
        justifyContent: 'center',
        borderRadius: 12,
        borderWidth: 1,
        borderColor: '#ff8c52',
        height: 50,
        paddingHorizontal: 20,
    },
    createButtonTitle: {
        color: '#ff8c52',
        fontSize: 15,
        fontWeight: 'bold',
        alignItems: 'center',
        justifyContent: 'center',
    },
});
