// Note: All Routes / Navigations are defined here...!
// Navigation component...!

import 'react-native-gesture-handler';
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
// Note: For Stack Navigation...!
import { createStackNavigator } from "@react-navigation/stack";
// Note: For Bottom Tabs Navigation...!
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
// Note: For Drawer Navigation...!
import { createDrawerNavigator } from "@react-navigation/drawer";
import Home from "./home";
import About from "./about";
import CounterApp from "./counter-app";
import StopWatch from "./stop-watch";
import ToDoListApp from "./todo-app";
import LearningRadioButtonsRN from "./learning-radion-buttons";
import LearningDateRN from "./Learning-date";
import LearningAsyncStorage from "./learning-storage";
import InfoScreen from "./info";
import LearningDropDown from './dropdown';
import CustomDropDown from './customDropDown';
import TimeTestingScreen from './time'

// Note: For Bottom Tabs Navigation...!
// const Tab = createBottomTabNavigator();
// const { Navigator, Screen } = Tab;

// Note: For Drawer Navigation...!
const Drawer = createDrawerNavigator();
const { Navigator, Screen } = Drawer;

const Navigation = () => {
    return (
        <NavigationContainer>
            <Navigator>
                <Screen name="Home" component={Home} />
                <Screen name="About" component={About} />
                <Screen name="CounterApp" component={CounterApp} />
                <Screen name="StopWatch" component={StopWatch} />
                <Screen name="ToDoListApp" component={ToDoListApp} />
                <Screen name="RadioButtonsRN" component={LearningRadioButtonsRN} />
                <Screen name="DateRN" component={LearningDateRN} />
                <Screen name="LearningAsyncStorage" component={LearningAsyncStorage} />
                <Screen name="InfoScreen" component={InfoScreen} />
                <Screen name="dropdown" component={LearningDropDown} />
                <Screen name="customdropdown" component={CustomDropDown} />
                <Screen name="time" component={TimeTestingScreen} />
            </Navigator>
        </NavigationContainer>
    );
}

export default Navigation;