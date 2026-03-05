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
  _teleportGoogle()
  observer()
  setInterval(_teleportGoogle, 1000)

}

function _teleportGoogle() {
  const newX = getRandomInt(getGridSize().columnsCount)
  const newY = getRandomInt(getGridSize().rowsCount)
  if (newX === getGooglePosition().x && newY === getGooglePosition().y) {
    _teleportGoogle()
    return
  }
  _state.positions.google.x = newX;
  _state.positions.google.y = newY;
  observer()
}

function getRandomInt(max) {
  return Math.floor(Math.random() * max)
}
