import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

class Settings1 extends Component {

    render() {
        return (
            <View style={styles.container}>
                <Text>Settings 2 Master</Text>
                <TouchableOpacity onPress={() => this.props.navigation.navigate("Settings2Detail")}>
                    <Text>go to details</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => this.props.navigation.openDrawer()}>
                    <Text>open drawer</Text>
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


export default Settings1;