// Home Component...!

import React from "react";
import { View, Text, StyleSheet } from "react-native";

const Home = () => {
    return (
        // Main Box...!
        <View style={styles.mainBox}>

            {/* Box # 1 */}
            <View style={styles.box1}>

                <View style={styles.child1}>
                    <Text style={styles.text1}> 1 </Text>
                </View>

                <View style={styles.child2}>
                    <Text style={styles.text2}> 2 </Text>
                </View>

                <View style={styles.child3}>
                    <Text style={styles.text1}> 3 </Text>
                </View>

            </View>

            {/* Box # 2 */}
            <View style={styles.box2}>

                <View style={styles.child4}>
                    <Text style={styles.text2}> 4 </Text>
                </View>

                <View style={styles.child5}>
                    <Text style={styles.text1}> 5 </Text>
                </View>

                <View style={styles.child6}>
                    <Text style={styles.text1}> 6 </Text>
                </View>

            </View>

            {/* Box # 3 */}
            <View style={styles.box3}>

                <View style={styles.child7}>
                    <Text style={styles.text2}> 7 </Text>
                </View>

                <View style={styles.child8}>
                    <Text style={styles.text2}> 8 </Text>
                </View>

                <View style={styles.child9}>
                    <Text style={styles.text1}> 9 </Text>
                </View>

            </View>
        </View>
    );
}

// Handeling styling here...!
const styles = StyleSheet.create({
    mainBox: {
        flex: 1,
        backgroundColor: "yellow"
    },

    box1: {
        flex: 1,
        display: "flex",
        flexDirection: "row"
    },

    box2: {
        flex: 1,
        display: "flex",
        flexDirection: "row"
    },

    box3: {
        flex: 1,
        display: "flex",
        flexDirection: "row"
    },

    child1: {
        backgroundColor: "blue",
        flexGrow: 1,
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
    },

    child2: {
        backgroundColor: "yellow",
        flexGrow: 1,
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center"
    },

    child3: {
        backgroundColor: "red",
        flexGrow: 1,
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center"
    },

    child4: {
        backgroundColor: "white",
        flexGrow: 1,
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center"
    },

    child5: {
        backgroundColor: "black",
        flexGrow: 1,
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center"
    },

    child6: {
        backgroundColor: "green",
        flexGrow: 1,
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center"
    },

    child7: {
        backgroundColor: "gold",
        flexGrow: 1,
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center"
    },

    child8: {
        backgroundColor: "silver",
        flexGrow: 1,
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center"
    },

    child9: {
        backgroundColor: "brown",
        flexGrow: 1,
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center"
    },

    text1: {
        color: "white",
        fontFamily: "georgia",
        fontSize: 25,
        fontWeight: "bold"
    },

    text2: {
        color: "black",
        fontFamily: "georgia",
        fontSize: 25,
        fontWeight: "bold"
    }
});

export default Home;