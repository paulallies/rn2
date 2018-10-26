import React, { Component } from 'react';
import { View, Text, Button, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import Styles from '../../styles';

class CPUHome extends Component {

    static navigationOptions = ({ navigation }) => ({
        title: "CPU",
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
                <Text>CPU Settings</Text>
                <Icon name="microchip" size={48} />
                <Button
                    onPress={() => this.props.navigation.navigate("Details")}
                    title="Go To Details"
                />
            </View>
        );
    }
}



export default CPUHome;