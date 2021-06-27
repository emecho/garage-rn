import React, { useEffect } from 'react';
import { Text, View, ScrollView, FlatList, SafeAreaView, StatusBar } from 'react-native';
import ActiveCard from '../components/ActiveCard';

export default function InActiveScreen({ navigation }) {
    const DATA = [
        {
            id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
            title: 'First Item',
        },
        {
            id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
            title: 'Second Item',
        },

    ];
    const renderItem = ({ item }) => <ActiveCard title={item.title} />;
    return (
        <SafeAreaView style={{ flex: 1 }}>
            <FlatList data={DATA} renderItem={renderItem} keyExtractor={item => item.id} />
        </SafeAreaView>
    );
}