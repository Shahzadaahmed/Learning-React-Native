// Note: TimeTestingScreen component...!

import React, { useEffect, useState } from 'react';
import { View, Text, TouchableOpacity } from "react-native";
import DateTimePickerModal from "react-native-modal-datetime-picker";
import ModalDropdown from 'react-native-modal-dropdown';
import Dialog from "react-native-dialog";
import axios from 'axios';

let targetObj = null;

const TimeTestingScreen = () => {

    // Note: Handeling states here...!
    const [timeSlotsArr, setTimeSlotsArr] = useState([]);
    const [timeValue, setTimeValue] = useState(null);
    const [selectedDate, setSelectedDate] = useState("");
    const [isDatePickerVisible, setIsDatePickerVisible] = useState(false);

    // Note: For dialog box states...!
    const [openDialogBox, setOpenDialogBox] = useState(false);

    // Note: Function to handle dropdown for Time slot list...!
    const renderTimesSlotDropDownList = (rowData, rowID) => {
        // console.log(rowData, rowID);
        return <Text>{rowData.Text}</Text>
    }

    // Note: Function to handle dropdown value text for time slot list...!
    const renderTimesSlotButtonText = (rowData) => {
        // console.log(rowData);
        return <View><Text> {rowData.Text} </Text></View>
    }

    // Note: Function to open date picker...!
    const openDatePicker = () => {
        setIsDatePickerVisible(true);
    }

    // Note: Function to close date picker...!
    const closeDatePicker = () => {
        setIsDatePickerVisible(false);
    }

    // Note: Function to close dialog box...!
    const handleCancel = () => {
        setOpenDialogBox(false);
    };

    // Note: Function to handle confirm date...!
    const handleConfirmDate = (date) => {
        // console.log(date); // Note: User selected date recieved...!

        let days = ['sunday', 'monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday'];
        let dayFlag = false;

        // Note: Get user selected day...!
        let userSelectedDate = new Date(date);
        let day = userSelectedDate.getDay();
        // console.log(days[day]);

        if (days[day] === 'friday') {
            dayFlag = false;
            Alert.alert(("Technicians are not available on fridays."));
            closeDatePicker();
        }

        else {
            dayFlag = true;
        }

        if (dayFlag) {
            // Note: Logic to cannot select previous date...!

            // Note: Converting current date in miliseconds...!
            let currentDate = new Date().getTime();
            // console.log('Current date: ', currentDate);

            // Note: Converting user selected date in miliseconds...!
            let userSelectedDate = new Date(date).getTime();
            // console.log('User selected date: ', userSelectedDate);

            if (userSelectedDate < currentDate) {
                Alert.alert(("You can't select current date."));
                closeDatePicker();
            }

            else {
                console.log("A date has been picked: ", date);
                let dateRequiredPattern = date.toLocaleDateString('en-GB'); // Note: For DD/MM/YY Format...!
                dateRequiredPattern = dateRequiredPattern.replace(/\//g, "."); // Note: Replace all / with . in date format...!
                console.log(dateRequiredPattern);

                let requiredObj = {
                    BrandId: "LG",
                    Date: dateRequiredPattern,
                    Location: "12158",
                    Region: "4",
                    SubRegion: "17"
                };
                // console.log('Required obj for times dropdown: ', requiredObj);
                setSelectedDate(date);
                targetObj = requiredObj;
                closeDatePicker();
                setOpenDialogBox(true);
            }
        }
    }

    // Note: Function to testing api...!
    const apiTesting = async (data) => {

        let api = "https://crm.shaker.com.sa/api/inquiry/GetTechniciansTimeSlots";

        try {
            let response = await axios.post(api, data);
            console.log(response);

            if (response.status === 200) {
                let requiredData = response.data;
                setTimeSlotsArr(requiredData);
            }
        }

        catch (error) {
            console.log(error.response);
        }
    }

    const handleAccept = () => {
        console.log(targetObj, 'Required data recieved!');

        if (targetObj != null) {
            apiTesting(targetObj);
            setOpenDialogBox(false);
        }
    }

    return (
        <React.Fragment>
            <View>
                <Dialog.Container visible={openDialogBox}>

                    {/* Note: Dialog Header */}
                    <Dialog.Title>
                        <Text>
                            {`You Selected: ${(selectedDate != "") ? (selectedDate.toLocaleDateString()) : (null)}`}
                        </Text>
                    </Dialog.Title>

                    <Dialog.Description>
                        <Text>
                            Is this correct ?
                        </Text>
                    </Dialog.Description>

                    <Dialog.Description>
                        <Dialog.Button label={("Cancel")} onPress={handleCancel} />
                        <Dialog.Button label={'Accept'} onPress={handleAccept} />
                    </Dialog.Description>
                </Dialog.Container>
                <Text> API Testing RN </Text>

                <View>
                    <TouchableOpacity onPress={openDatePicker}>
                        <Text>
                            Select Date
                        </Text>
                    </TouchableOpacity>

                    <DateTimePickerModal
                        isVisible={isDatePickerVisible}
                        mode="date"
                        onConfirm={handleConfirmDate}
                        onCancel={closeDatePicker}
                        minimumDate={new Date()}
                    />
                </View>

                {/* <ModalDropdown
                    defaultValue={(timeSlotsArr.length > 0) ? ("Select Time") : ("Please Select Date First")}
                    // ref={(ref) => clearTimeSlots = ref}
                    options={(timeSlotsArr.length > 0) ? (timeSlotsArr) : (['Data Not Found'])}
                    renderRow={(rowData, rowID) => renderTimesSlotDropDownList(rowData, rowID)}
                    renderButtonText={(rowData) => renderTimesSlotButtonText(rowData)}
                    onSelect={(id, value) => setTimeValue(value)}
                    isFullWidth={true}
                    dropdownTextStyle={{ color: "black", fontSize: 15 }}
                    textStyle={{
                        color: 'gray',
                        borderWidth: 1,
                        borderColor: '#409c5b',
                        width: '100%',
                        borderRadius: 5,
                        padding: 8,
                        fontSize: 15,
                        marginVertical: 5,
                    }}
                /> */}

                {
                    (timeSlotsArr && timeSlotsArr.length > 0)
                        ?
                        (
                            timeSlotsArr.map((item, index) => {
                                return (
                                    <Text key={index}> {item.Text} </Text>
                                )
                            })
                        )
                        :
                        (<Text> Data Not Found! </Text>)
                }

            </View>
        </React.Fragment>
    );
}

export default TimeTestingScreen;