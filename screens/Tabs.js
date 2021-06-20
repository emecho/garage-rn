import * as React from 'react';
import { Text, View } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import TicketScreen from './TicketScreen'
import PaymentScreen from './PaymentScreen'
import ProfileScreen from './ProfileScreen'

const Tab = createBottomTabNavigator();

export default function Tabs({ navigation }) {

    return (
        <Tab.Navigator
            screenOptions={({ route }) => ({
                tabBarIcon: ({ focused, color, size }) => {
                    let iconName;

                    if (route.name === 'Tickets') {
                        iconName = focused ? 'ticket-confirmation' : 'ticket-confirmation-outline';
                    } else if (route.name === 'Payments') {
                        return <MaterialIcons name="payment" size={size} color={color} />
                    } else if (route.name === 'Profile') {
                        iconName = "face-profile";
                    }

                    // You can return any component that you like here!
                    return <MaterialCommunityIcons name={iconName} size={size} color={color} />;
                },
            })}
            tabBarOptions={{
                activeTintColor: '#0e76bd',
                inactiveTintColor: 'gray',
            }}
        >
            <Tab.Screen name="Tickets" component={TicketScreen} />
            <Tab.Screen name="Payments" component={PaymentScreen} />
            <Tab.Screen name="Profile" component={ProfileScreen} />
        </Tab.Navigator>
    );
}