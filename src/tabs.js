import React, { Component } from 'react'
import { View } from 'react-native';
import { createBottomTabNavigator } from 'react-navigation';
import Icon from 'react-native-vector-icons/FontAwesome5';
import CustomerStack from './customerstack';
import PublicationStack from './publicationstack';



const TabNav = createBottomTabNavigator({
    Customers: {
        screen: CustomerStack,
        navigationOptions: {
            tabBarLabel: "Customers",
            tabBarIcon: ({ tintColor }) => <Icon name="users" size={24} color={tintColor} />
        }
    },
    Publications: {
        screen: PublicationStack,
        routeName: "Publications",
        navigationOptions: {
            tabBarLabel: "Publications",
            tabBarIcon: ({ tintColor }) => <Icon name="book" size={24} color={tintColor} />
        }
    },
    // Star: {
    //     screen: StackNav,
    //     navigationOptions: {
    //         tabBarLabel: "Star",
    //         tabBarIcon: ({ tintColor }) => <Icon name="star" size={24} color={tintColor} />
    //     }
    // },
    // Uploads: {
    //     screen: StackNav,
    //     navigationOptions: {
    //         tabBarLabel: "Uploads",
    //         tabBarIcon: ({ tintColor }) => <Icon name="file" size={24} color={tintColor} />
    //     }
    // },
    // Fun: {
    //     screen: StackNav,
    //     navigationOptions: {
    //         tabBarLabel: "Fun",
    //         tabBarIcon: ({ tintColor }) => <Icon name="rocket" size={24} color={tintColor} />
    //     }
    // }
})

export default TabNav;