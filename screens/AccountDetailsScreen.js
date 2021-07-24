//import liraries
import React, { Component, useState, useEffect } from 'react';
import { View, Text, KeyboardAvoidingView, StatusBar, StyleSheet , ScrollView} from 'react-native';
import {Button, Input, Image} from 'react-native-elements';
import * as Location from 'expo-location';
import { TextInput } from 'react-native-gesture-handler';
import {Picker} from '@react-native-picker/picker';
import * as ImagePicker from 'expo-image-picker';

// create a component
const AccountDetails = () => {
    const [garageName, setGarageName] = useState("");
    const [ownerName, setOwnerName] = useState("");
    const [email, setEmail] = useState("");
    const [phoneNumber, setPhoneNumber] = useState("");
    const [location, setLocation] = useState(null);
    const [menCount, setMenCount] = useState(null);
    const [address, setAddress] = useState(null);
    const [selectedVehicle, setSelectedVehicle] = useState("Bike");
    const [selectedServices, setSelectedServices] = useState("At Home");
    const [timings, setTimings] = useState("");
    const [image, setImage] = useState(null);
    const [emergencyPhoneNumber, setEmergencyPhoneNumber] = useState(null);

    useEffect(() => {
        (async () => {
          if (Platform.OS !== 'web') {
            const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
            if (status !== 'granted') {
              alert('Sorry, we need camera roll permissions to make this work!');
            }
          }
        })();
      }, []);

    const getLocation = async () => {
      try {
        console.log('button pressed')
        let { status } = await Location.requestPermissionsAsync();
        if (status !== 'granted') {
            setErrorMsg('Permission to access location was denied');
            return;
        }
        let location = await Location.getCurrentPositionAsync({});
        setLocation(location);
      } catch (error) {
        alert("There is an error getting location!")
      }
    };

    const pickImage = async () => {
        let result = await ImagePicker.launchImageLibraryAsync({
          mediaTypes: ImagePicker.MediaTypeOptions.All,
          allowsEditing: true,
          aspect: [4, 3],
          quality: 1,
        });

        console.log(result);

        if (!result.cancelled) {
          setImage(result.uri);
        }
      };

      const handleSubmit = async () => {
          console.log('submit')
      }

    return (
        <ScrollView styles={{ width: 30 }}>
            <KeyboardAvoidingView style={styles.container}>
                <StatusBar style="light" />
                <View style={styles.headingContainer}>
                    <Text style={styles.heading}>Account Details</Text>
                </View>
                <View style={styles.inputContainer}>
                    <Text style={styles.inputHeading}>Garage Name</Text>
                    <Input placeholder="Garage Name" autoFocus type="text" value={garageName} onChangeText={(text) => setGarageName(text)} />
                    <Text style={styles.inputHeading}>Owner Name</Text>
                    <Input placeholder="Garage Owner Name" type="text" value={ownerName} onChangeText={(text) => setOwnerName(text)} />
                    <Text style={styles.inputHeading}>Email</Text>
                    <Input placeholder="Email" type="text" value={email} onChangeText={(text) => setEmail(text)} />
                    <Text style={styles.inputHeading}>Phone Number</Text>
                    <Input placeholder="Phone Number" type="number" value={phoneNumber} onChangeText={(text) => setPhoneNumber(text)} />
                    <Text style={styles.inputHeading}>Address (Full)</Text>
                    <TextInput style={styles.textInput} multiline={true} numberOfLines={4} value={address} onChangeText={(text) => setAddress(text)} />
                    <Text style={styles.inputHeading}>Servicing Vehicle Type</Text>
                    <Picker
                        style={styles.select}
                        selectedValue={selectedVehicle}
                        onValueChange={(itemValue, itemIndex) =>
                            setSelectedVehicle(itemValue)
                        }>
                        <Picker.Item label="Bike" value="Bike" />
                        <Picker.Item label="Car" value="Car" />
                        <Picker.Item label="Light Vehicle" value="Light Vehicle" />
                        <Picker.Item label="High Vehicle" value="High Vehicle" />
                    </Picker>
                    <Text style={styles.inputHeading}>Location</Text>
                    <View styles={{marginBottom:30}} >
                    <Button title="Location" type="outline" onPress={getLocation} />
                    </View>
                    <Text style={styles.inputHeading}>Garage Men Count</Text>
                    <Input placeholder="Men Count" type="number" value={menCount} onChangeText={(text) => setMenCount(text)} />
                    <Text style={styles.inputHeading}>Garage Timings</Text>
                    <Input placeholder="Garage Timings" type="text" value={timings} onChangeText={(text) => setTimings(text)} />
                    <Text style={styles.inputHeading}>Emergency Phone Number</Text>
                    <Input placeholder="Emergency Phone Number" type="number" value={emergencyPhoneNumber} onChangeText={(text) => setEmergencyPhoneNumber(text)} />
                    <Text style={styles.inputHeading}>Garage Photo</Text>
                    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', marginBottom:30 }}>
                    <Button title="Pick an image from camera roll" onPress={pickImage} />
                    {image && <Image source={{ uri: image }} style={{ width: 200, height: 200 }} />}
                    </View>
                    <Text style={styles.inputHeading}>Garage Services</Text>
                    <Picker
                        style={styles.select}
                        selectedValue={selectedServices}
                        onValueChange={(itemValue, itemIndex) =>
                            setSelectedServiceselectedServices(itemValue)
                        }>
                        <Picker.Item label="At Home" value="Home" />
                        <Picker.Item label="At Garage" value="Garage" />
                        <Picker.Item label="Anywhere" value="Anywhere" />
                    </Picker>
                    <Button title="Submit" styles={{marginBottom:50, alignSelf:'stretch', display:'flex'}} onPress={handleSubmit} />
                </View>
            </KeyboardAvoidingView>
        </ScrollView>
    );
};

// define your styles
const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        backgroundColor: '#fff',
        // height:'100%'
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
    },
    textInput:{
        height: 100,
        borderColor: 'white',
        borderBottomColor: 'gray',
        borderWidth: 1,
        width: '95%',
        marginBottom:20
    },
    select:{
        width:'100%',
    }
});

//make this component available to the app
export default AccountDetails;
