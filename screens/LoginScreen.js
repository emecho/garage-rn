import { StatusBar } from 'expo-status-bar';
import React, { Component, useState } from 'react';
import { View, Text, StyleSheet, KeyboardAvoidingView, Platform } from 'react-native';
import {Button, Input, Image} from 'react-native-elements'
import { ActivityIndicator } from 'react-native';

const LoginScreen = ({navigation}) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const Login = () => {

    };

    return (
        <KeyboardAvoidingView behavior={Platform.OS === 'ios' && "padding"} style={styles.container}>
            <StatusBar style="light" />
            <Image
                source={require('../assets/repair-icon.png')}
                style={{ width: 150, height: 150 }}
                PlaceholderContent={<ActivityIndicator />}
            />
        <View style={styles.inputContainer}>
             <Input placeholder="Email" autoFocus type="email" value={email} onChangeText={(text) => setEmail(text)} />
             <Input placeholder="Password" secureTextEntry type="password" value={password} onChangeText={(text) => setPassword(text)} />
        </View>
        <Button containerStyle={styles.button} title="Login" onPress={Login} />
        <Button containerStyle={styles.button} title="Register" type="outline" onPress={() => navigation.navigate("Register")} />
        </KeyboardAvoidingView>
    );
};

const styles = StyleSheet.create({
    container:{
        flex:1,
        alignItems:"center",
        justifyContent:"center",
    },
    button:{
        width:300,
        marginTop:10
    },
    inputContainer:{
        width:300
    }
});

export default LoginScreen;
