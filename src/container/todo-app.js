// ToDoListApp component...!

import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
    View,
    Text,
    TextInput,
    TouchableOpacity,
    Alert
} from "react-native";
import { addToDoItem, deleteToDoItem, editToDoItem, clearAll } from "../store/action/dispatch-functions";
let targetKey;

const ToDoListApp = () => {

    // Handeling states here...!
    const [inputValue, setInputValue] = useState("");
    const [isEditing, setIsEditing] = useState(false);

    // Handeling redux here...!
    const dispatch = useDispatch();
    const todoClone = useSelector(({ todoState }) => { return todoState.todoArr });

    // Function to add item...!
    const addItem = () => {
        if (inputValue != 0) {
            dispatch(addToDoItem(inputValue));
            setInputValue("");
        }

        else {
            Alert.alert("Error! Please fill the required field first!");
            setInputValue("");
        }
    }

    // Function to delete item...!
    const deleteItem = (indexKey) => {
        dispatch(deleteToDoItem(indexKey));
    }

    // Function to edit item...!
    const editItem = (indexKey) => {
        setIsEditing(true);
        setInputValue(todoClone[indexKey]);
        targetKey = indexKey;
    }

    // Function to update item...!
    const updateItem = () => {
        let obj = {
            value: inputValue,
            key: targetKey
        }

        if (inputValue != 0) {
            dispatch(editToDoItem(obj));
            setIsEditing(false);
            setInputValue("");
        }

        else {
            Alert.alert("Error! Please fill the required field first!");
            setInputValue("");
        }
    }

    // Function to cancel updates...!
    const cancel = () => {
        setIsEditing(false);
        setInputValue("");
    }

    // Function to delete all items...!
    const deleteAllItems = () => {
        dispatch(clearAll());
    }

    return (
        <View>
            <Text> Todo List App </Text>
            <TextInput
                placeholder="Write Something"
                value={inputValue}
                onChangeText={(event) => { setInputValue(event) }}
            />
            {
                (isEditing)
                    ?
                    (
                        <View>
                            <TouchableOpacity onPress={updateItem}>
                                <Text> Update Item </Text>
                            </TouchableOpacity>

                            <TouchableOpacity onPress={cancel}>
                                <Text> Cancel </Text>
                            </TouchableOpacity>
                        </View>
                    )
                    :
                    (
                        <View>
                            <TouchableOpacity onPress={addItem}>
                                <Text> Add Item </Text>
                            </TouchableOpacity>

                            <TouchableOpacity onPress={deleteAllItems}>
                                <Text> Delete All Items </Text>
                            </TouchableOpacity>
                        </View>
                    )
            }

            {/* Listing Area */}
            {
                todoClone.map((item, index) => {
                    return (
                        <View key={index}>
                            <Text>
                                {item}

                                <TouchableOpacity onPress={() => { deleteItem(index) }}>
                                    <Text> Delete Item </Text>
                                </TouchableOpacity>

                                <TouchableOpacity onPress={() => { editItem(index) }}>
                                    <Text> Edit Item </Text>
                                </TouchableOpacity>
                            </Text>
                        </View>
                    );
                })
            }
        </View>
    );
}

export default ToDoListApp;