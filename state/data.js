import {GAME_STATUSES} from "./GAME_STATUSES.js";

const _state = {
  status: GAME_STATUSES.SETTINGS,

}

export function getStatus() {
  return _state.status
}

export function startGame() {
  _state.status = GAME_STATUSES.IN_PROGRESS
}