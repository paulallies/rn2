import React from 'react';
import { createBottomTabNavigator, createStackNavigator } from 'react-navigation';
import Icon from 'react-native-vector-icons/FontAwesome5';
import MemoryScreen from './Memory';
import CPUScreen from './CPU';

const SettingsTabs = createBottomTabNavigator({
    CPU: {
        screen: CPUScreen,
        navigationOptions: {
            title: "CPU",
            tabBarIcon: ({ tintColor }) => (
                <Icon
                    name="microchip"
                    size={17}
                    color={tintColor} />
            )
        }
    },
    Memory: {
        screen: MemoryScreen,
        navigationOptions: {
            tabBarLabel: "Memory",
            tabBarIcon: ({ tintColor }) => (
                <Icon
                    name="memory"
                    size={17}
                    color={tintColor} />
            )
        }
    }
});

//Issue: the tab navigator needs to be wrapped inside a stack navigator
export default createStackNavigator({ SettingsTabs }, { headerMode: "none" });