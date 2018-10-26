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

class ProfileHome extends Component {
    static navigationOptions = ({ navigation }) => ({
        title: 'Profiles',
        headerLeft: (
            <TouchableOpacity style={styles.menubutton} onPress={() => navigation.openDrawer()}>
                <IOSIcon name="ios-menu" size={32} />
            </TouchableOpacity>
        ),
        drawerLabel: "Home",
        drawerIcon: ({ tintColor }) => <Icon name="home" size={24} />
    })
    render() {
        return (
            <View style={styles.container}>
                <Text>Profiles</Text>
                <TouchableOpacity onPress={() => this.props.navigation.navigate("Details")}>
                    <Text>Go To Detail</Text>
                </TouchableOpacity>
            </View>
        );
    }
}

class ProfileDetail extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Text>Profile Details</Text>
            </View>
        );
    }
}

const ProfileStack = createStackNavigator({
    ProfileHome,
    ProfileDetail
})

export default ProfileStack


