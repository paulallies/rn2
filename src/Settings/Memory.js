import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

class Settings1 extends Component {

    render() {
        return (
            <View style={styles.container}>
                <Text>Settings 1</Text>
                <TouchableOpacity onPress={() => this.props.navigation.openDrawer()}>
                    <Text>Open Drawer</Text>
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