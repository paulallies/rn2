import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5'

class Profile extends Component {
    static navigationOptions = {
        drawerLabel: 'Profile',
        drawerIcon: ({ tintColor }) => <Icon name="user-circle" size={17} />,
    };
    render() {
        return (
            <View style={styles.container}>
                <Text>Profile Screen</Text>
                <TouchableOpacity onPress={() => this.props.navigation.openDrawer()}>
                    <Text>press to open drawer</Text>
                </TouchableOpacity>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    }
})

export default Profile;