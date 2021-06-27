import React, { useEffect } from 'react';
import { Text, View } from 'react-native';
import ActiveScreen from './ActiveScreen';
import InActiveScreen from './InActiveScreen';
import CompletedScreen from './CompletedScreen';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { NavigationContainer } from '@react-navigation/native';

const Tab = createMaterialTopTabNavigator();
export default function TicketScreen({ navigation }) {
    return (
        <Tab.Navigator>
            <Tab.Screen name="Active" component={ActiveScreen} />
            <Tab.Screen name="InActive" component={InActiveScreen} />
            <Tab.Screen name="Completed" component={CompletedScreen} />
        </Tab.Navigator>
    );
}