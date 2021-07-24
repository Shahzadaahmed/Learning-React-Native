// StopWatch component...!

import React, { Component } from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";

class StopWatch extends Component {
    state = {
        hasStarted: false,
        seconds: 0,
        minutes: 0
    }

    // Declaring global variable for handle timer...!
    timeInterval;

    // Function to start the timer...!
    startTimer = () => {
        this.setState({
            hasStarted: true
        });

        this.updateTimer();
    }

    // Function to update the timer...!
    updateTimer = () => {
        this.timeInterval = setInterval(() => {
            let secondsClone = this.state.seconds;
            secondsClone++;

            if (secondsClone < 60) {
                this.setState({
                    seconds: secondsClone
                });
            }

            else {
                let minutesClone = this.state.minutes;
                minutesClone++;

                this.setState({
                    minutes: minutesClone,
                    seconds: 0
                });
            }
        }, 100);
    }

    // Function to pause the timer...!
    pauseTimer = () => {
        clearInterval(this.timeInterval);
        this.setState({
            hasStarted: false
        });
    }

    // Function to stop the watch...!
    stopTimer = () => {
        clearInterval(this.timeInterval);
        this.setState({
            hasStarted: false,
            minutes: 0,
            seconds: 0
        });
    }

    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.header}> Stop Watch in React Native! </Text>

                <View>
                    <Text style={styles.timerBtn}> Mins: {this.state.minutes} </Text>
                    <Text style={styles.timerBtn}> Secs: {this.state.seconds} </Text>
                </View>

                {
                    (this.state.hasStarted)
                        ?
                        (
                            <TouchableOpacity style={styles.appBtn} onPress={this.pauseTimer}>
                                <Text style={styles.btnText}> Pause </Text>
                            </TouchableOpacity>
                        )
                        :
                        (
                            <TouchableOpacity style={styles.appBtn} onPress={this.startTimer}>
                                <Text style={styles.btnText}> Start </Text>
                            </TouchableOpacity>
                        )
                }

                <TouchableOpacity style={styles.appBtn} onPress={this.stopTimer}>
                    <Text style={styles.btnText}> Stop </Text>
                </TouchableOpacity>
            </View>
        );
    }
}


// Handeling styling here...!
const styles = StyleSheet.create({
    container: {
        flex: 1,
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center"
    },

    header: {
        fontSize: 25,
        color: "blue",
        textDecorationLine: "underline",
        fontFamily: "georgia"
    },

    appBtn: {
        backgroundColor: "blue",
        height: 30,
        width: 100,
        marginTop: 10,
        borderWidth: 2,
        borderColor: "silver",
        borderRadius: 5,
        display: "flex",
        justifyContent: "center",
        alignItems: "center"
    },

    btnText: {
        color: "white"
    },

    timerBtn: {
        fontSize: 20,
        fontWeight: "bold"
    }
});

export default StopWatch;