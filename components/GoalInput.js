import React, { useState } from 'react';
import { View, TextInput, StyleSheet, Modal } from 'react-native'
import { Button } from 'react-native';
import GoalItem from './GoalItem';

function GoalInput(props) {
    const [enteredGoal, setEnteredGoal] = useState('');
    const GoalSetter = (enteredText) => {
        setEnteredGoal(enteredText)
        console.log("visible = ", props.modalVisible)
    }
    const onAddGoalHandler = () => {
        props.onAddGoal(enteredGoal)
        setEnteredGoal(' ');

    }

    return (

        <Modal visible={props.modalVisible} animationType="slide">
            <View style={styles.textboxContainer}>
                <TextInput placeholder="Enter Goal" onChangeText={GoalSetter} value={enteredGoal}
                    style={styles.textbox} />
                <View style={styles.buttonContainer}>
                <View style={styles.Button}>
                    <Button title="CANCEL" color="red" onPress={props.onCancel} />
                    </View>
                    <View style={styles.Button}>
                    <Button title="ADD GOAL" onPress={onAddGoalHandler} />
                    </View>
                </View>
            </View>
        </Modal>

    )
}

const styles = StyleSheet.create({

    textboxContainer: {
       flex:1,               justifyContent: 'center', alignItems: 'center'
    },
    textbox: {
         borderColor: 'black', borderWidth: 1, padding: 10, marginBottom: 10
    },

    buttonContainer: {
        width:'80%',
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    Button:{
width:'100%'
    }

});

export default GoalInput
