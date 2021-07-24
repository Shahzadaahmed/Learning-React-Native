// Note: InfoScreen component...!

import React, { useEffect } from 'react';
import {
    View,
    Text
} from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";

const InfoScreen = () => {

    // Note: Function to get user info...!
    const getUserInfo = async () => {
        try {
            let response = await AsyncStorage.getItem('UserInfo');
            let dataInJSON = JSON.parse(response);
            console.log(dataInJSON);
        }

        catch (error) {
            console.error(`${error}`);
        }
    }

    // Note: When this component rendered successfully then this hook will run...!
    useEffect(() => {
        getUserInfo();
    }, []);

    return (
        <React.Fragment>
            <View>
                <Text> Welcome to user info! </Text>
            </View>
        </React.Fragment>
    );
}

export default InfoScreen;