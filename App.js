import { StyleSheet, Text, View } from 'react-native';
import Header from './src/Components/Header';
import StartGameScreen from './src/Screens/StartGameScreen';
import React from 'react';
import GameScreen from './src/Screens/GameScreen';

export default function App() {

  const [userNumber, setUserNumber] = React.useState();

  const startGameHandler = (selectedNumber) => {
    setUserNumber(selectedNumber);
  };

  return (
    <View style={styles.container}>
      <Header title={'Adivina el numero'} />
      {
        userNumber
        ? <GameScreen userOption={userNumber} />
        : <StartGameScreen onStartGame={startGameHandler} />
      }
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
