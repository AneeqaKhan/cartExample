
import React, { Component } from 'react';
import {
    StyleSheet,
    View,
    Image,
    Text
} from 'react-native';
import { Dimension } from "../../ui-kit"

export default class CartItems extends Component {

    render() {
        const { itemName, ImageSource } = this.props;
        return (
            <View style={styles.itemsContainer}>
                <Text style={{ fontSize: 18 }}>{itemName}</Text>
                <Image source={{ uri: ImageSource }} style={{ height: 250, width: 250, resizeMode: 'center' }} />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    itemsContainer: {
        flex: 1, justifyContent: 'center', alignItems: 'center', flexDirection: 'column', margin: 5, backgroundColor: 'red', height: 300
    },

});