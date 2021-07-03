//import liraries
import React, { Component, useState } from 'react';
import { View, Text, KeyboardAvoidingView, StatusBar, StyleSheet } from 'react-native';
import {Button, Input, Image} from 'react-native-elements';
import * as Location from 'expo-location';

// create a component
const AccountDetails = () => {
    const [garageName, setGarageName] = useState("");
    const [ownerName, setOwnerName] = useState("");
    const [email, setEmail] = useState("");
    const [phoneNumber, setPhoneNumber] = useState("");
    const [location, setLocation] = useState(null);
    const [errorMsg, setErrorMsg] = useState(null);
    const [coordinates, setCoordinates] = useState(null);


    const getLocation = async () => {
        console.log('button pressed')
        let { status } = await Location.requestForegroundPermissionsAsync();
        if (status !== 'granted') {
            setErrorMsg('Permission to access location was denied');
            return;
        }
        let location = await Location.getCurrentPositionAsync({});
        setLocation(location);
        if (errorMsg) {
           console.log(errorMsg, 'error msg')
        } else if (location) {
            console.log(JSON.stringify(location), 'location')
        }
    }
    return (
       <KeyboardAvoidingView style={styles.container}>
            <StatusBar style="light" />
           <View style={styles.headingContainer}>
                <Text style={styles.heading}>Account Details</Text>
           </View>
           <View style={styles.inputContainer}>
            <Text style={styles.inputHeading}>Garage Name</Text>
             <Input placeholder="Garage Name" autoFocus type="text" value={garageName} onChangeText={(text) => setGarageName(text)} />
             <Text style={styles.inputHeading}>Owner Name</Text>
             <Input placeholder="Garage Owner Name" secureTextEntry type="text" value={ownerName} onChangeText={(text) => setOwnerName(text)} />
             <Text style={styles.inputHeading}>Email</Text>
             <Input placeholder="Email" secureTextEntry type="text" value={email} onChangeText={(text) => setEmail(text)} />
             <Text style={styles.inputHeading}>Phone Number</Text>
             <Input placeholder="Phone Number" secureTextEntry type="text" value={phoneNumber} onChangeText={(text) => setPhoneNumber(text)} />
             <Button  title="Location" type="outline" onPress={getLocation} />
        </View>
        </KeyboardAvoidingView>
    );
};

// define your styles
const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        backgroundColor: '#fff',
        height:'100%'
    },
    heading:{
        fontSize:25,
        fontWeight:'bold',
        color:'#0e76bd'
    },
    headingContainer:{
        alignSelf:"flex-start",
        marginTop:20,
        marginLeft:20
    },
    inputContainer:{
        width:"95%",
        justifyContent:'center',
        alignItems:'center',
        marginTop:30
    },
    inputHeading:{
        fontSize:18,
        color:'#00a6dd',
        alignSelf:'flex-start',
        marginBottom:10,
        marginLeft:9,
        fontWeight:'500'
    }
});

//make this component available to the app
export default AccountDetails;
