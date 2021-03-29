import { StatusBar } from 'expo-status-bar';
import React, { Component, useState } from 'react';
import { View, StyleSheet, KeyboardAvoidingView, Platform } from 'react-native';
import {Button, Input, Image, Text} from 'react-native-elements'
import { ActivityIndicator } from 'react-native';
import {auth} from "../firebase"

const RegisterScreen = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const Register = () => {
        auth.createUserWithEmailAndPassword(email, password)
        .then((authuser) => {

        })
    }
    return (
        <KeyboardAvoidingView behavior={Platform.OS === 'ios' && "padding"} style={styles.container}>
            <StatusBar style="light" />
            <Text h4 style={{marginBottom:50}}>
                Create an Emezo account
            </Text>
            <View style={styles.inputContainer}>
                 <Input placeholder="Full Name"  type="text" value={name} onChangeText={(text) => setName(text)} />
                 <Input placeholder="Email" type="email" value={email} onChangeText={(text) => setEmail(text)} />
                 <Input placeholder="Password" secureTextEntry value={password} type="password" onChangeText={(text) => setPassword(text)} onSubmitEditing={Register} />
            </View>
            <Button containerStyle={styles.button} title="Register" onPress={Register} raised />
        </KeyboardAvoidingView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding:10
    },
    button:{
        width:200,
        marginTop:10
    },
    inputContainer:{
        width:300
    }
});

export default RegisterScreen;
