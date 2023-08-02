import React, {useState} from 'react';
import {StyleSheet, TouchableOpacity, View} from 'react-native';
import {DIMENSIONS, PLAYER_X, PLAYER_O} from './constants';

const emptyGrid = new Array(DIMENSIONS ** 2).fill(null);

export default function TicTacToe() {
  const [grid, setGrid] = useState(emptyGrid);
  const [players, _setPlayers] = useState({
    human: PLAYER_X,
    ai: PLAYER_O,
  });

  const move = (index: number, player: number) => {
    setGrid(grid => {
      const gridCopy = grid.concat();
      gridCopy[index] = player;
      return gridCopy;
    });
  };

  const humanMove = (index: number) => {
    if (!grid[index]) {
      move(index, players.human);
    }
  };

  return (
    <View style={styles.container}>
      {grid.map((value, index) => {
        const isActive = value !== null;

        return (
          <TouchableOpacity
            style={styles.board}
            key={index}
            onPress={() => humanMove(index)}>
            {/* <View> */}

            {isActive && (value === PLAYER_X ? 'X' : 'O')}
            {/* </View> */}
          </TouchableOpacity>
        );
      })}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexFlow: 'wrap',
    width: '100%',
    height: '100%',
    justifyContent: 'center',
  },
  board: {
    width: 100,
    height: 100,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 2,
    borderStyle: 'solid',
    borderColor: 'black',
  },
});
