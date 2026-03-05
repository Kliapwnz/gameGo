import {GAME_STATUSES} from "./GAME_STATUSES.js";

const _state = {
  status: GAME_STATUSES.SETTINGS,
  settings: {
    gridSize: {
      rowsCount: 4,
      columnsCount: 4
    }
  },
  positions: {
    google: {x: 0, y: 0},
    player1: {x: 3, y: 3},
    player2: {x: 2, y: 2}
  }

}

let observer = null


export function subscribe(callback) {
  observer = callback
}

export function getStatus() {
  return _state.status
}

export function getGridSize() {
  return _state.settings.gridSize
}

export function getGooglePosition() {
  return _state.positions.google
}

export function startGame() {
  _state.status = GAME_STATUSES.IN_PROGRESS
  observer()
  setInterval(_teleportGoogle, 1000)

}

function _teleportGoogle() {
  _state.positions.google.x = getRandomInt(getGridSize().columnsCount);
  _state.positions.google.y = getRandomInt(getGridSize().rowsCount);
  observer()
}

function getRandomInt(max) {
  return Math.floor(Math.random() * max)
}
