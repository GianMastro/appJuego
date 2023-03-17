import { StyleSheet, Text, View, useState, TouchableWithoutFeedback, Button } from 'react-native'
import React from 'react'
import Input from '../Components/Input'
import NumberContainer from '../Components/NumberContainer'
import Card from '../Components/Card'
import Colors from '../Constants/Colors'

const StartGameScreen = () => {

    const [enteredValue, setEnteredValue] = React.useState('')
    const [confirmed, setConfirmed] = React.useState(false)
    const [selectedNumber, setSelectedNumber] = React.useState()

    const numberInputHandler = inputText => {
        setEnteredValue(inputText.replace(/[^0-9]/g, ''))
    }

    const resetInputHandler = () => {
        setEnteredValue('');
        setConfirmed(false);
    }

    const confirmedInputHandler = inputText => {
        const chosenNumber = parseInt(enteredValue)
        if (chosenNumber === NaN || chosenNumber <= 0 || chosenNumber > 99){
            return
        }
        setConfirmed(true)
        setSelectedNumber(chosenNumber)
        setEnteredValue('')
    }

    return (
        <TouchableWithoutFeedback onPress={() => {
            Keyboard.dismiss()
        }}>
        <View style={styles.container}>
            <Text style={styles.title}>Comenzar juego</Text>
            <Card style={styles.inputContainer}>
                <Text style={styles.inputDescriptionText}>Elija un número</Text>
                <Input style={styles.input}
                blurOnSubmit
                autoCapitalize='none'
                autoCorrect={false}
                keyboardType='number-pad'
                maxLength={2}
                value={enteredValue}
                onChangeText={numberInputHandler}
                />
            <View style={styles.buttonsContainer}>
                <View style={styles.button}>
                    <Button title='Limpiar' onPress={resetInputHandler} color={Colors.accent}/>
                </View>
                <View style={styles.button}>
                <Button title='Confirmar' onPress={confirmedInputHandler} color={Colors.primary}/>
                </View>
            </View>
            </Card>
            {confirmed &&
                <Card>
                    <Text>Tu seleccion</Text>
                    <NumberContainer>{selectedNumber}</NumberContainer>
                    <Button title='Iniciar juego'/>
                </Card>
            }
        </View>
        </TouchableWithoutFeedback>
    )
}

export default StartGameScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 10,
        alignItems: 'center'
    },
    title: {
        fontSize: 20,
        marginVertical: 10
    },
    inputContainer: {
        width: 300,
        maxWidth: '80%'
    },
    inputDescriptionText: {
        textAlign: 'center'
    },
    input: {
        width: 50,
        textAlign: 'center'
    },
    buttonsContainer: {
        flexDirection: 'row',
        width: '100%',
        justifyContent: 'space-between',
        paddingHorizontal: 15
    }
})