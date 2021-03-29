//import liraries
import React, { Component } from 'react';
import { SafeAreaView } from 'react-native';
import { View, Text, StyleSheet } from 'react-native';

// create a component
const HomeScreen = () => {
    return (
        <SafeAreaView style={styles.container}>
            <Text>HomeScreen</Text>
        </SafeAreaView>
    );
};

// define your styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#2c3e50',
    },
});

//make this component available to the app
export default HomeScreen;