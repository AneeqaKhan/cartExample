import React, { Component } from 'react'
import { Text, View } from 'native-base';
import { connect } from "react-redux";

class OfflineBanner extends Component {

    render() {
        const { Common: { isConnected } } = this.props
        if (!isConnected) return (
            < View style={{ alignItems: 'center' }}>
                {
                    <Text>{
                        "No Internet Connection"
                    }</Text>

                }
            </View >
        )
        return <View />;
    }
}



const screen = connect(
    state => ({
        Common: state.Common
    })
)(OfflineBanner);

export { screen as OfflineBanner };