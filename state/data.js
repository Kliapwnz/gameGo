import {GAME_STATUSES} from "./GAME_STATUSES.js";
import {MOVE_DIRECTIONS} from "./MOVE_DIRECTIONS";

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

export function getPlayer1Position() {
  return _state.positions.player1
}

export function startGame() {
  _state.status = GAME_STATUSES.IN_PROGRESS
  _teleportGoogle()
  observer()
  setInterval(_escapeGoogle, 1000)

}

/**
 *
 * @param {1,2}playerNumber
 * @param {("UP"|"DOWN" | "LEFT" | "RIGHT")} direction
 */
export function movePlayer(playerNumber, direction) {

  const positionReducers = {
    [MOVE_DIRECTIONS.UP]: (coords) => {
      return {
        x: coords.x,
        y: coords.y - 1
      }
    },
    [MOVE_DIRECTIONS.DOWN]: (coords) => {
      return {
        x: coords.x,
        y: coords.y + 1
      }
    },
    [MOVE_DIRECTIONS.LEFT]: (coords) => {
      return {
        x: coords.x - 1,
        y: coords.y
      }
    },
    [MOVE_DIRECTIONS.RIGHT]: (coords) => {
      return {
        x: coords.x + 1,
        y: coords.y
      }
    },
  }
  const reducer = positionReducers[direction]
  const newCoords = reducer(_state.positions['player' + playerNumber])


}

function _escapeGoogle() {
  _teleportGoogle()
}

function _teleportGoogle() {
  const newX = getRandomInt(getGridSize().columnsCount)
  const newY = getRandomInt(getGridSize().rowsCount)
  if ((newX === getGooglePosition().x && newY === getGooglePosition().y) || (newX === getPlayer1Position().x && newY === getPlayer1Position().y)) {
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
