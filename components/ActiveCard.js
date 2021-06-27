import React, { useEffect } from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { color } from 'react-native-elements/dist/helpers';

export default function ActiveCard({ navigation }) {

    return (
        <View style={styles.container}>
            <View>
                <Text style={styles.IssueText}>My tire got punctured</Text>
            </View>
            <View>
                <Text style={styles.whiteFontColor}>
                    Location: Near Bypass Road
                </Text>
            </View>
            <View>
                <Text style={styles.whiteFontColor}>
                    Phone: 9328736747
                </Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#0e76bd',
        height: 150,
        width: '92%',
        padding: 20,
        marginLeft: '4%',
        marginRight: '4%',
        borderRadius: 10,
        marginTop: 10,
        color: "white",
        margin: "auto",
    },
    IssueText: {
        fontSize: 18,
        color: "white",
        marginBottom: 25
    },
    whiteFontColor: {
        color: "#fff"
    }
});