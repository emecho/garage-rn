import React, { useEffect } from 'react';
import { Text, View, ScrollView, FlatList, SafeAreaView, StatusBar } from 'react-native';
import ActiveCard from '../components/ActiveCard';

export default function ActiveScreen({ navigation }) {
    const DATA = [
        {
            id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
            title: 'First Item',
        },
        {
            id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
            title: 'Second Item',
        },
        {
            id: '58694a0f-3da1-471f-bd96-145571e29d72',
            title: 'Third Item',
        },
        {
            id: '58694a0f-3da1-471f-bd96-145571e29d72',
            title: 'Third Item',
        },
        {
            id: '58694a0f-3da1-471f-bd96-145571e29d72',
            title: 'Third Item',
        },
        {
            id: '58694a0f-3da1-471f-bd96-145571e29d72',
            title: 'Third Item',
        },
        {
            id: '58694a0f-3da1-471f-bd96-145571e29d72',
            title: 'Third Item',
        },
    ];
    const renderItem = ({ item }) => <ActiveCard title={item.title} />;
    return (
        <SafeAreaView style={{ flex: 1 }}>
            <FlatList data={DATA} renderItem={renderItem} keyExtractor={item => item.id} />
        </SafeAreaView>
    );
}