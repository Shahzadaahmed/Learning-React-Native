// Note: LearningAsyncStorage component...!

import React from 'react';
import {
    StyleSheet,
    View,
    Text,
    TouchableOpacity
} from "react-native";
import AsyncStorage from '@react-native-async-storage/async-storage'

let user = {
    name: "Shahzada Ahmed",
    title: "React Stack Developer",
    company: "QBS Co (SMC Private Limited)",
    age: '24',
    city: 'Karachi'
};

const LearningAsyncStorage = ({ navigation }) => {

    // Note: Function to go info screen...!
    const goToInfoScreen = () => {
        navigation.navigate('InfoScreen');
    }

    // Note: Function to save user info...!
    const saveUserInfo = () => {
        let userInfoInString = JSON.stringify(user);
        // console.log(userInfoInString);
        AsyncStorage.setItem('UserInfo', userInfoInString);
        console.log('Your info has been saved in async storage!');
    }

    return (
        <React.Fragment>
            <View>
                <Text> Welcome to Learning Async Storage! </Text>
                <TouchableOpacity style={styles.saveBtn} onPress={saveUserInfo}>
                    <Text> Save Info </Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.saveBtn} onPress={goToInfoScreen}>
                    <Text> See Information </Text>
                </TouchableOpacity>
            </View>
        </React.Fragment>
    );
}

// Note: Handeling styling here...!
const styles = StyleSheet.create({
    saveBtn: {
        backgroundColor: "lightblue",
        width: '80%',
        padding: 5,
        marginHorizontal: '10%',
        borderRadius: 5,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        margin: 10
    }
});

export default LearningAsyncStorage;