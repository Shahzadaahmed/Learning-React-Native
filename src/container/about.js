// Note: About Component...!

import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";

const About = () => {
    return (
        <View style={styles.mainBox}>
            <Image
                style={styles.imageBox}
                source={require('../Images/Ahmed.png')}
            />
            <Text> Hi, My name is Shahzada Ahmed 🥰 </Text>
        </View>
    );
}

// Handeling styling here...!
const styles = StyleSheet.create({
    mainBox: {
        flex: 1,
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center"
    },

    imageBox: {
        height: 500,
        width: 300
    }
});

export default About;