//import liraries
import React, { Component } from 'react';
import { SafeAreaView } from 'react-native';
import { View, Text, StyleSheet } from 'react-native';
import Tabs from './Tabs'

// create a component
const HomeScreen = ({navigation}) => {
    return (
        <Tabs />
    );
};

// define your styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff',
    },
});

//make this component available to the app
export default HomeScreen;
