import React, { Component } from 'react';
import { createBottomTabNavigator, createStackNavigator } from 'react-navigation';
import Icon from 'react-native-vector-icons/FontAwesome5';
import MemoryScreen from './Memory';
import CPUScreen from './CPU';

const SettingsTabs = createBottomTabNavigator({
    Memory: {
        screen: MemoryScreen,
        navigationOptions: {
            tabBarLabel: "Memory",
            tabBarIcon: ({ tintColor }) => <Icon name="memory" size={24} color={tintColor} />
        }
    },
    CPU: {
        screen: CPUScreen,
        navigationOptions: {
            tabBarLabel: "CPU",
            tabBarIcon: ({ tintColor }) => <Icon name="microchip" size={24} color={tintColor} />
        }
    },
}, {
        tabBarOptions: {
            activeTintColor: '#222222',
        }
    });





export default createStackNavigator({
    SettingsTabs

}, {
        headerMode: "none"
    })