import React from "react";
import { ActivityIndicator, AsyncStorage } from "react-native";
import { Container, Content, Thumbnail } from "native-base";
import { NavigationService } from "../../../services";
import { StorageKeys } from "../../../utils";


class AuthLoading extends React.Component {

    constructor(props) {
        super(props);
        this._bootstrapAsync();
    }

    _bootstrapAsync = async () => {
        const userToken = await AsyncStorage.getItem(StorageKeys.AccessToken);
        NavigationService.navigate(userToken ? "Home" : "Auth");
    };


    render() {
        return (
            // to do colors theme define
            <Container style={{ backgroundColor: "red" }}>
                <Content padder contentContainerStyle={{ height: '100%', flexDirection: "column", alignItems: 'center', justifyContent: "center" }}>
                    <ActivityIndicator />
                    {/* <Thumbnail style={{ alignSelf: 'center' }} source={{}} /> */}
                </Content>
            </Container>
        );
    }
}

export { AuthLoading };
