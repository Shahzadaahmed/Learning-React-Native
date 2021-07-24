// Note: LearningRadioButtonsRN component...!

import React, { useState } from 'react';
import {
    View,
    Text
}
    from "react-native";
import
RadioForm,
{
    RadioButton,
    RadioButtonInput,
    RadioButtonLabel
}
    from 'react-native-simple-radio-button';

// Note: Array for radio buttons...!
let genderArray = [
    {
        value: 0,
        label: 'Male'
    },
    {
        value: 1,
        label: 'Female'
    }
]

const LearningRadioButtonsRN = () => {

    // Note: Handeling states here...!
    const [genderState, setGenderState] = useState(0);

    return (
        <React.Fragment>
            <View>
                <Text> Learning Radio Buttons in RN! </Text>
                <RadioForm
                    radio_props={genderArray}
                    initial={-1}
                    onPress={(value) => { setGenderState({ genderState: value }) }}
                    selectedButtonColor={'red'}
                    selectedLabelColor={'yellow'}
                    formHorizontal={true}
                />
            </View>
        </React.Fragment>
    );
}

export default LearningRadioButtonsRN;