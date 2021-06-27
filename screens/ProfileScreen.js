import React from 'react';
import { Text, View,  StyleSheet, Image, Pressable} from 'react-native';
import { FontAwesome, MaterialCommunityIcons, MaterialIcons } from '@expo/vector-icons';
import { auth } from '../firebase';

export default function ProfileScreen({navigation}) {
    const handleLogout = async () => {
        try {
            const data = await auth.signOut();
            navigation.navigate("Login")
            navigation.reset({
                index: 0,
                routes: [{ name: 'Login' }],
              });
            console.log(props)
        } catch (e) {
            console.log(e);
        }
    }
    return (
        <View>
            <View style={styles.profileAndUsername}>
                <View>
                 <Image style={styles.img} source={{ uri: 'https://cdn.dribbble.com/users/1577045/screenshots/4914645/dribble_pic.png?compress=1&resize=400x300'}} />
                </View>
                <View style={styles.usernameAndEmail}>
                    <Text style={styles.username}>Giri Aakula</Text>
                    <Text style={styles.email}>@giriaakula</Text>
                </View>
            </View>
            <View style={styles.phoneContainer}>
                <FontAwesome name="phone" size={24} color="#0e76bd" />
                <Text style={styles.rightText}>+91-9133074826</Text>
            </View>
            <View style={styles.phoneContainer}>
            <MaterialCommunityIcons name="email" size={24} color="#0e76bd" />
                <Text style={styles.rightText}>giriakula3@gmail.com</Text>
            </View>

            <View style={styles.heading}>
                <Text style={styles.headingText}>Your Details</Text>
            </View>

            <View style={styles.mainBox}>

            <View style={[styles.phoneContainer, styles.mainContainer]}>
                <MaterialIcons name="account-box" size={24} color="#0e76bd" />
                <Text style={[styles.rightText, styles.mainText]}>Account Details</Text>
            </View>

            <View style={[styles.phoneContainer, styles.mainContainer]}>
                <MaterialCommunityIcons name="frequently-asked-questions" size={24} color="#0e76bd" />
                <Text style={[styles.rightText, styles.mainText]}>FAQ</Text>
            </View>

            <View style={[styles.phoneContainer, styles.mainContainer]}>
                <MaterialIcons name="settings" size={24} color="#0e76bd" />
                <Text style={[styles.rightText, styles.mainText]}>Settings</Text>
            </View>

            <View >
                <Pressable onPress={handleLogout} style={[styles.phoneContainer, styles.mainContainer]}>
                <MaterialIcons name="logout" size={24} color="#0e76bd" />
                <Text style={[styles.rightText, styles.mainText]}>Log out</Text>
                </Pressable>
            </View>

            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    img: {
        width: 90,
        height: 90,
        borderRadius:50
    },
    profileAndUsername:{
        marginTop:50,
        marginLeft:30,
        flexDirection:'row',
        alignItems:'center',
        marginBottom:30
    },
    usernameAndEmail:{
        marginLeft:30,
        color:'#505050'
    },
    username:{
        fontSize:20,
        fontWeight:'bold',
        marginBottom:5,
        color:'#505050',
        letterSpacing:1.1
    },
    email:{
        color:'#505050'
    },
    phoneContainer:{
        flexDirection:'row',
        width:'50%',
        alignItems:'center',
        marginLeft:20,
        marginBottom:10
    },
    rightText:{
        marginLeft:20
    },
    heading:{
        marginTop:40,
        marginLeft:20,
    },
    headingText:{
        fontSize:20,
        fontWeight:'bold',
        color:"#505050"
    },
    mainBox:{
        marginRight:20,
        paddingTop:20
    },
    mainContainer:{
        marginTop:20
    },
    mainText:{
        fontSize:17
    }
  });