import React, { Component } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import Styles from '../styles';

class ProfileHome extends Component {

    static navigationOptions = ({ navigation }) => ({
        title: "Profile",
        headerLeft: (
            <TouchableOpacity
                style={Styles.headerButton}
                onPress={() => navigation.openDrawer()}>
                <Icon name="bars" size={20} />
            </TouchableOpacity>
        ),

    })
    render() {
        return (
            <View style={Styles.container}>
                <Text>Profile Screen</Text>
                <Icon name="user-circle" size={48} />
            </View>
        );
    }
}

export default ProfileHome;