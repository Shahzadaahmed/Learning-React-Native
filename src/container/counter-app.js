// Note: CounterApp Component...!

import React, { useState } from "react";
import { View, Text, StyleSheet, Alert, TouchableOpacity } from "react-native";

const CounterApp = () => {

    // Handeling states here...!
    const [counter, setCounter] = useState(0);

    // Function to increament counter...!
    const increamentCounter = () => {
        let counterStateClone = counter;

        if (counterStateClone >= 10) {
            Alert.alert("Increament Counter Limit Reached!");
        }

        else {
            counterStateClone++;
            setCounter(counterStateClone);
        }
    }

    // Function to increament counter...!
    const decreamentCounter = () => {
        let counterStateClone = counter;

        if (counterStateClone <= 0) {
            Alert.alert("Decreament Counter Limit Reached!");
        }

        else {
            counterStateClone--;
            setCounter(counterStateClone);
        }
    }

    return (
        <View style={Styles.mainBox}>
            <Text style={Styles.header}> Counter App! </Text>
            <Text style={Styles.counter}> {counter} </Text>
            <View style={Styles.btnContainer}>
                <TouchableOpacity onPress={increamentCounter} style={Styles.increamentBtn}>
                    <Text style={Styles.plus}> + </Text>
                </TouchableOpacity>

                <TouchableOpacity onPress={decreamentCounter} style={Styles.increamentBtn}>
                    <Text style={Styles.plus}> - </Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}

// Handeling styling here...!
const Styles = StyleSheet.create({
    mainBox: {
        flex: 1,
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center"
    },

    header: {
        fontFamily: "georagia",
        fontSize: 30,
        color: "blue",
        textDecorationLine: "underline"
    },

    counter: {
        fontFamily: "georagia",
        fontSize: 30,
        color: "blue"
    },

    btnContainer: {
        display: "flex",
        flexDirection: "row",
        padding: 10
    },

    increamentBtn: {
        backgroundColor: "blue",
        height: 40,
        width: 60,
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 5,
        marginLeft: 10
    },

    plus: {
        color: "white",
        fontWeight: "bold",
        fontSize: 20
    }
});

export default CounterApp;