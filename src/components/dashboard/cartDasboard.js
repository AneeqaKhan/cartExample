
import React, { Component } from 'react';
import axios from 'axios'
import {
    StyleSheet,
    View,
    FlatList,
} from 'react-native';
import { Spinner } from 'native-base';
import { SearchBar } from 'react-native-elements';
import CartItems from './cartItems'

export default class GridExp extends Component {
    static navigationOptions = {
        title: 'Bata Shoes',
    };
    constructor() {
        super();
        this.state = {
            searchText: "",
            dataSource: [],
            filteredData: [],
            isLoading: true
        };
    }
    componentDidMount() {
        axios.get('https://my-json-server.typicode.com/jubs16/Products/Products').then((res) => {
            if (res.status === 200) {
                this.setState({
                    dataSource: res.data, isLoading: false
                });
            }
        })

    }
    search = (searchText) => {
        const { dataSource } = this.state;
        this.setState({ searchText: searchText });
        let filteredData = dataSource.filter(function (item) {
            return item.name.includes(searchText);
        });

        this.setState({ filteredData: filteredData });
    };

    render() {
        const { isLoading, dataSource, filteredData } = this.state;

        return (
            <View style={styles.MainContainer}>

                {
                    !isLoading ? (
                        <View style={{ flex: 1 }}>
                            <SearchBar
                                round={true}
                                lightTheme={true}
                                placeholder="Search..."
                                autoCapitalize='none'
                                autoCorrect={false}
                                onChangeText={this.search}
                                value={this.state.searchText}
                            />
                            <FlatList
                                data={
                                    filteredData && filteredData.length > 0 ? filteredData : dataSource
                                }
                                renderItem={({ item }) => (
                                    <CartItems itemName={item.name} ImageSource={item.imgUrl} />
                                )}
                                numColumns={2}
                                keyExtractor={(item, index) => index.toString()}
                            />
                        </View>

                    ) : <Spinner />
                }
            </View>
        );
    }
}

const styles = StyleSheet.create({
    MainContainer: {
        justifyContent: 'center',
        flex: 1,
        paddingTop: 30,
    },
    imageThumbnail: {
        justifyContent: 'center',
        alignItems: 'center',
        height: 100,
    },
});