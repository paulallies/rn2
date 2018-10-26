import React, { Component } from 'react';
import { View, TouchableOpacity, Text, StyleSheet } from 'react-native';
import IOSIcon from 'react-native-vector-icons/Ionicons';
import { createStackNavigator } from 'react-navigation';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    },
    menubutton: {
        paddingLeft: 20
    }
})

class HomeCustomerScreen extends Component {
    static navigationOptions = {
        drawerLabel: "Customers",
        drawerIcon: ({ tintColor }) => <Icon name="home" size={24} />
    }
    render() {
        return (
            <View style={styles.container}>
                <Text>Customers</Text>
                <TouchableOpacity onPress={() => this.props.navigation.navigate("Details")}>
                    <Text>Go To Detail</Text>
                </TouchableOpacity>
            </View>
        );
    }
}

class DetailCustomerScreen extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Text>Customer Details</Text>
            </View>
        );
    }
}



export default createStackNavigator({
    Home: {
        screen: HomeCustomerScreen,
        navigationOptions: ({ navigation }) => ({
            title: 'Customers',
            headerLeft: (
                <TouchableOpacity style={styles.menubutton} onPress={() => navigation.openDrawer()}>
                    <IOSIcon name="ios-menu" size={32} />
                </TouchableOpacity>
            )
        })

    },
    Details: {
        screen: DetailCustomerScreen,
    },
})


