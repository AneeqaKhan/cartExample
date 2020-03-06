// import React, { Component } from 'react';
// import { Col, Row, Grid } from "react-native-easy-grid";

// import {
//     Image,
//     TouchableOpacity,
//     Text
// } from 'react-native';

// class GridExp extends Component {


//     render() {
//         return (
//             <Grid>
//                 <Col>
//                     <Row style={{ backgroundColor: 'green', margin:9 }}>
//                         <Text>1</Text>
//                     </Row>
//                     <Row style={{ backgroundColor: 'yellow' ,margin:9}}>
//                         <Text>2</Text>
//                     </Row>
//                     <Row style={{ backgroundColor: 'blue',margin:9 }}>
//                         <Text>3</Text>
//                     </Row>
//                     <Row style={{ backgroundColor: 'orange',margin:9 }}>
//                         <Text>4</Text>
//                     </Row>
//                 </Col>
//                 <Col>
//                     <Row style={{ backgroundColor: 'blue',margin:9 }}>
//                         <Text>3</Text>
//                     </Row>
//                     <Row style={{ backgroundColor: 'orange',margin:9 }}>
//                         <Text>4</Text>
//                     </Row>
//                     <Row style={{ backgroundColor: 'green', margin:9 }}>
//                         <Text>1</Text>
//                     </Row>
//                     <Row style={{ backgroundColor: 'yellow' ,margin:9}}>
//                         <Text>2</Text>
//                     </Row>

//                 </Col>


//             </Grid>
//         );
//     }
// }


// export default GridExp;



/*This is an Example of Grid View in React Native*/
import React, { Component } from 'react';
import axios from 'axios'
//import rect in our project
import {
    StyleSheet,
    View,
    FlatList,
    ActivityIndicator,
    Image,
    TouchableOpacity,
    Text
} from 'react-native';
import { Spinner } from 'native-base';
//import all the components we will need

export default class GridExp extends Component {
    constructor() {
        super();
        this.state = {
            dataSource: {},
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
    render() {
        const { isLoading, dataSource } = this.state;

        return (
            <View style={styles.MainContainer}>
                {
                    !isLoading ? (
                        <FlatList
                            data={dataSource}
                            renderItem={({ item }) => (
                                <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', flexDirection: 'column', margin: 5, backgroundColor: 'red', height: 300 }}>
                                    <Text style={{fontSize:18}}>{item.name}</Text>
                                    <Image source={{ uri: item.imgUrl }} style={{ height: 250, width: 250, resizeMode: 'center' }} />
                                </View>
                            )}
                            numColumns={2}
                            keyExtractor={(item, index) => index.toString()}
                        />
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