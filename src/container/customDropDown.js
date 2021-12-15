// Note: CustomDropDown component...!

import React, { useEffect, useState } from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from "react-native";
import ModalDropdown from 'react-native-modal-dropdown';

let updateCountriesList = [
    {
        id: 1,
        name: "Pakistan"
    },
    {
        id: 2,
        name: "India"
    },
    {
        id: 3,
        name: "USA"
    },
    {
        id: 4,
        name: "UK"
    },
    {
        id: 5,
        name: "Australia"
    },
    {
        id: 6,
        name: "Switzerland"
    },
    {
        id: 7,
        name: "Afghanistan"
    },
    {
        id: 8,
        name: "Canada"
    },
    {
        id: 9,
        name: "New Zealand"
    },
    {
        id: 10,
        name: "West Indies"
    },
];

const CustomDropDown = () => {

    // Note: Handeling states here...!
    const [selectedCountry, setSelectedCountry] = useState(null);

    // Note: Function to handle dropdown list...!
    const renderDropDownList = (rowData, rowID) => {
        // console.log(rowData, rowID);
        return <Text style={{ color: 'black', fontSize: 16, padding: 5 }}>{rowData.name}</Text>
    }

    const renderButtonText = (rowData) => {
        // console.log(rowData);
        const { name } = rowData;
        // console.log(name);
        return <View><Text>{name}</Text></View>;
    }

    return (
        <React.Fragment>
            {/* Note: Container */}
            <View style={styles.container}>

                {/* Note: Header */}
                <Text>
                    Learning DropDown in React Native!
                </Text>

                {/* Note: Dropdown container */}
                <View>

                    {/* Note: Dropdown Header */}
                    <Text>
                        Select Country
                    </Text>

                    {/* Note: Dropdown */}
                    <ModalDropdown
                        defaultValue="Select Country"
                        options={updateCountriesList}
                        renderRow={(rowData, rowID) => renderDropDownList(rowData, rowID)}
                        renderButtonText={(rowData) => renderButtonText(rowData)}
                        // onSelect={(id, value) => setSelectedCountry(value)}
                        isFullWidth={true}
                        dropdownTextStyle={{ color: "black", fontSize: 15 }}
                        textStyle={{
                            color: 'gray',
                            borderWidth: 1,
                            borderColor: '#299371',
                            width: '100%',
                            borderRadius: 5,
                            padding: 8,
                            backgroundColor: 'whitesmoke',
                            fontSize: 15,
                            marginVertical: 5,
                        }}
                    />
                </View>

                <TouchableOpacity onPress={submitData}>
                    <Text>
                        Submit
                    </Text>
                </TouchableOpacity>
            </View>
        </React.Fragment>
    );
}

// Note: Handeling styling here...!
const styles = StyleSheet.create({
    container: {
        flex: 1,
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        paddingHorizontal: 10
    }
});

export default CustomDropDown;