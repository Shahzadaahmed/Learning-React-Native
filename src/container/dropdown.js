import React, { useRef } from "react";
import { View, Button, Text, StyleSheet, TouchableOpacity, ScrollView } from "react-native";
import RBSheet from "react-native-raw-bottom-sheet";

// Note: Cities list array...!
const citiesList = ['Karachi', "Lahore", "Islamabad", "Hyderabad", "Multan", "Quetta", "Rahim yar Khan", "Faisalabad", "Rawal Pindi", "Sukkhur"];

const CustomDropDown = () => {

    // Note: Refrence for bottom sheet...!
    const refRBSheet = useRef();

    const Cities = () => {
        return (
            <React.Fragment>
                <View>
                    <View style={styles.headerContainer}>
                        <Text style={styles.headerText}>
                            Select City
                        </Text>

                        <TouchableOpacity>
                            <Text
                                style={styles.crossIcon}
                                onPress={() => refRBSheet.current.close()}
                            >
                                x
                            </Text>
                        </TouchableOpacity>
                    </View>

                    <ScrollView showsVerticalScrollIndicator={false} style={{ marginBottom: 10 }}>
                        {
                            citiesList.map((item, index) => {
                                return (
                                    <TouchableOpacity key={index} style={styles.cityTextContainer}>
                                        <Text style={styles.cityText}>
                                            {item}
                                        </Text>
                                    </TouchableOpacity>
                                );
                            })
                        }
                    </ScrollView>
                </View>
            </React.Fragment>
        );
    }

    return (
        <View
            style={{
                flex: 1,
                justifyContent: "center",
                alignItems: "center",
                backgroundColor: "#000"
            }}
        >
            <Button title="OPEN BOTTOM SHEET" onPress={() => refRBSheet.current.open()} />
            
            <RBSheet
                ref={refRBSheet}
                closeOnDragDown={true}
                closeOnPressMask={false}
                animationType="fade"
                customStyles={{
                    wrapper: {
                        backgroundColor: "transparent",
                    },
                    draggableIcon: {
                        backgroundColor: "#000"
                    }
                }}
            >
                <Cities />
            </RBSheet>
        </View>
    );
}

// Note: handeling styling here...!
const styles = StyleSheet.create({
    headerContainer: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        marginHorizontal: 10
    },

    headerText: {
        fontSize: 20,
        fontWeight: "600"
    },

    crossIcon : {
        fontSize: 20,
        fontWeight: "600",
        // backgroundColor : "yellow",
        paddingHorizontal : 5
    },

    cityTextContainer: {
        padding: 5,
        borderBottomColor: "silver",
        borderBottomWidth: 1,
        marginHorizontal: 5,
        marginVertical: 5
    },

    cityText: {
        fontSize: 16,
        fontWeight: "400"
    }
});

export default CustomDropDown;