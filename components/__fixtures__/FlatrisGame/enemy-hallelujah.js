// @flow

import { Component } from 'react';
import { getSampleUser, getSampleUser2 } from '../../../utils/test-helpers';
import {
  getBlankGame,
  addUserToGame,
  updatePlayer,
  getPlayer
} from '../../../reducers/game';
import FlatrisGame from '../../FlatrisGame';

import type { ElementRef } from 'react';

const user1 = getSampleUser();
let game = getBlankGame({
  id: 'dce6b11e',
  user: user1,
  // XXX: The drop speed is infinitely slow so we can control the drop events
  // inside fixture.init
  dropFrames: Infinity
});

// Add 2nd player to game state
const user2 = getSampleUser2();
game = addUserToGame(game, user2);

// Add some blocks to current user's grid
game = updatePlayer(game, user1.id, {
  status: 'READY',
  grid: [
    [null, null, null, null, null, null, null, null, null, null],
    [null, null, null, null, null, null, null, null, null, null],
    [null, null, null, null, null, null, null, null, null, null],
    [null, null, null, null, null, null, null, null, null, null],
    [null, null, null, null, null, null, null, null, null, null],
    [null, null, null, null, null, null, null, null, null, null],
    [null, null, null, null, null, null, null, null, null, null],
    [null, null, null, null, null, null, null, null, null, null],
    [null, null, null, null, null, null, null, null, null, null],
    [null, null, null, null, null, null, null, null, null, null],
    [null, null, null, null, null, null, null, null, null, null],
    [null, null, null, null, null, null, null, null, null, null],
    [null, null, null, null, null, null, null, null, null, null],
    [null, null, null, null, null, null, null, null, null, null],
    [null, null, null, null, null, null, null, null, null, null],
    [null, null, null, null, null, null, null, null, null, null],
    [null, null, null, null, null, null, null, null, null, null],
    [null, null, null, null, null, null, null, null, null, null],
    [null, null, null, null, null, null, null, [4, '#b04497'], null, null],
    [
      null,
      null,
      null,
      null,
      null,
      null,
      [3, '#b04497'],
      [2, '#b04497'],
      [1, '#b04497'],
      null
    ]
  ]
});

// Add some blocks to other user's grid
game = updatePlayer(game, user2.id, {
  status: 'READY',
  drops: 50,
  score: 184,
  lines: 0,
  activeTetromino: 'I',
  activeTetrominoGrid: [[0, 0, 1, 0], [0, 0, 1, 0], [0, 0, 1, 0], [0, 0, 1, 0]],
  activeTetrominoPosition: { x: 7, y: 15 },
  dropAcceleration: true,
  grid: [
    [null, null, null, null, null, null, null, null, null, null],
    [null, null, null, null, null, null, null, null, null, null],
    [null, null, null, null, null, null, null, null, null, null],
    [null, null, null, null, null, null, null, null, null, null],
    [null, null, null, null, null, null, null, null, null, null],
    [null, null, null, null, null, null, null, null, null, null],
    [null, null, null, null, null, null, null, null, null, null],
    [null, null, null, null, null, null, null, null, null, null],
    [null, null, null, null, null, null, null, null, null, null],
    [null, null, null, null, null, null, null, null, null, null],
    [null, null, null, null, null, null, null, null, null, null],
    [null, null, null, null, null, null, null, [1956, '#b04497'], null, null],
    [
      null,
      [1928, '#3993d0'],
      [1929, '#3993d0'],
      [1976, '#ed652f'],
      null,
      null,
      [1957, '#b04497'],
      [1958, '#b04497'],
      [1959, '#b04497'],
      null
    ],
    [
      null,
      [1930, '#3993d0'],
      [1920, '#3cc7d6'],
      [1977, '#ed652f'],
      null,
      [1940, '#fbb414'],
      [1941, '#fbb414'],
      [1936, '#ed652f'],
      [1937, '#ed652f'],
      null
    ],
    [
      [1904, '#b04497'],
      [1931, '#3993d0'],
      [1921, '#3cc7d6'],
      [1978, '#ed652f'],
      [1979, '#ed652f'],
      [1942, '#fbb414'],
      [1943, '#fbb414'],
      [1924, '#e84138'],
      [1938, '#ed652f'],
      null
    ],
    [
      [1905, '#b04497'],
      [1906, '#b04497'],
      [1922, '#3cc7d6'],
      [1916, '#3993d0'],
      [1932, '#fbb414'],
      [1933, '#fbb414'],
      [1925, '#e84138'],
      [1926, '#e84138'],
      [1939, '#ed652f'],
      null
    ],
    [
      [1907, '#b04497'],
      [1892, '#e84138'],
      [1923, '#3cc7d6'],
      [1917, '#3993d0'],
      [1934, '#fbb414'],
      [1935, '#fbb414'],
      [1927, '#e84138'],
      [1912, '#ed652f'],
      [1908, '#3993d0'],
      null
    ],
    [
      [1893, '#e84138'],
      [1894, '#e84138'],
      [1918, '#3993d0'],
      [1919, '#3993d0'],
      [1896, '#95c43d'],
      [1913, '#ed652f'],
      [1914, '#ed652f'],
      [1915, '#ed652f'],
      [1909, '#3993d0'],
      null
    ],
    [
      [1895, '#e84138'],
      [1884, '#b04497'],
      [1888, '#e84138'],
      [1889, '#e84138'],
      [1897, '#95c43d'],
      [1898, '#95c43d'],
      [1900, '#3993d0'],
      [1910, '#3993d0'],
      [1911, '#3993d0'],
      null
    ],
    [
      [1885, '#b04497'],
      [1886, '#b04497'],
      [1887, '#b04497'],
      [1890, '#e84138'],
      [1891, '#e84138'],
      [1899, '#95c43d'],
      [1901, '#3993d0'],
      [1902, '#3993d0'],
      [1903, '#3993d0'],
      null
    ]
  ]
});

export default {
  component: FlatrisGame,

  init({ compRef }: { compRef: ElementRef<typeof Component> }) {
    const { dispatch, getState } = compRef.context.store;

    // Simulate drop from enemy player
    setTimeout(() => {
      const prevActionId = getLastActionId(getState, user2.id);
      dispatch({
        type: 'DROP',
        payload: {
          actionId: prevActionId + 1,
          prevActionId,
          gameId: game.id,
          userId: user2.id,
          rows: 2
        }
      });
    }, 1000);
  },

  reduxState: {
    curUser: user1,
    curGame: game
  }
};

function getLastActionId(getState, userId) {
  const { curGame } = getState();
  const { lastActionId } = getPlayer(curGame, userId);

  return lastActionId;
}
