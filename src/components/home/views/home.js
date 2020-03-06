import React, { Component } from 'react';
import { View, Text } from 'react-native';
// just for inital setup to do design inline seprate
class Home extends Component {

    render() {

        return (
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <Text>{"Welcome to Dash Dash"}</Text>
            </View>
        );
    }
}

export default Home;