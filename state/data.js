import {GAME_STATUSES} from "./GAME_STATUSES.js";
import {MOVE_DIRECTIONS} from "./MOVE_DIRECTIONS.js";

const _state = {
  status: GAME_STATUSES.SETTINGS,
  settings: {
    gridSize: {
      rowsCount: 4,
      columnsCount: 4
    },
    pointsToWin: 3,
    pointsToLose: 3
  },
  positions: {
    google: {x: 0, y: 0},
    player1: {x: 1, y: 1},
    player2: {x: 2, y: 2}
  },
  points: {
    google: 0,
    player1: 0,
    player2: 0
  }
}

let _observers = []

function _notify() {
  _observers.forEach(o => o())
}

export function subscribe(callback) {
  _observers.push(callback)
  return () => {
    unsubscribe(callback)
  }
}

export function unsubscribe(callback) {
  _observers = _observers.filter(o => o !== callback)
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
  _notify()
  jumpInterval = setInterval(_escapeGoogle, 2000)

}

let jumpInterval;

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

  if (!_isInsideGrid(newCoords)) {
    return;
  }
  _state.positions['player' + playerNumber] = newCoords
  if (_isPlayerInOnePositionWithGoogle(playerNumber)) {
    _catchGoogle(playerNumber)
  }

  _notify()
}

function _isPlayerInOnePositionWithGoogle(playerNumber) {
  const playerPosition = _state.positions['player' + playerNumber]
  const googlePosition = getGooglePosition()

  return playerPosition.x === googlePosition.x && playerPosition.y === googlePosition.y
}

function _catchGoogle(playerNumber) {
  _state.points['player' + playerNumber]++
  if (_state.points['player' + playerNumber] === _state.settings.pointsToWin) {
    _state.status = GAME_STATUSES.WIN
    clearInterval(jumpInterval)
  }
  _teleportGoogle()

}

function _isInsideGrid(coords) {
  return coords.x >= 0 && coords.x < _state.settings.gridSize.columnsCount
    && coords.y >= 0 && coords.y < _state.settings.gridSize.rowsCount

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
  _notify()
}

function getRandomInt(max) {
  return Math.floor(Math.random() * max)
}
