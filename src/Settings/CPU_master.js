import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

class CPUMaster extends Component {

    render() {
        return (
            <View style={styles.container}>
                <Text>CPU Settings</Text>
                <TouchableOpacity onPress={() => this.props.navigation.navigate("CPUDetail")}>
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


export default CPUMaster;