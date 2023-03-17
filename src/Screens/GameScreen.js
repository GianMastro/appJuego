import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import NumberContainer from '../Components/NumberContainer'
import Card from '../Components/Card'

const GameScreen = ({userOption}) => {

    const generateRandomBetween = (min, max, exclude) => {
        min = Math.ceil(min);
        max = Math.floor(max);
        const randomNumber = Math.floor(Math.random() * (max - min) + min);
        if (randomNumber === exclude) {
            return generateRandomBetween(min, max, exclude)
        } else {
            return randomNumber;
        }
    };

    const [currentGuess, setCurrentGuess] = React.useState(generateRandomBetween(1, 100, userOption));
    const [rounds, setRounds] = React.useState(0);
    const currentLow = React.useRef(1);
    const currentHigh = React.useRef(100);

    const nextGuessHandler = direction => {
        if ((direction ==='lower' && currentGuess < userOption) || (direction === 'greater' && currentGuess > userOption)) {
            Alert.alert('No mientas!', 'Sabes que eso es incorrecto...', [{text: 'Perdon!', style:'Cancel'}]);
            return;
        }
        if (direction === 'lower') {
            currentHigh.current = currentGuess;
        } else {
            currentLow.current = currentGuess + 1;
        }
        const nextNumber = generateRandomBetween(currentLow.current, currentHigh.current, currentGuess);
        setCurrentGuess(nextNumber);
        setRounds(curRounds => curRounds + 1);
    }

    return (
        <View style={styles.screen}>
            <Text>GameScreen</Text>
            <NumberContainer>{currentGuess}</NumberContainer>
            <Card style={styles.buttonContainer}>
                <Button title='Mayor' onPress={()=>{}}/>
                <Button title='Menor' onPress={()=>{}}/>
            </Card>
        </View>
    )
}

export default GameScreen

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        padding: 10,
        alignItems: 'center'
    },
    buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        marginTop: 20,
        width: 300,
        maxWidth: '80%'
    }
})