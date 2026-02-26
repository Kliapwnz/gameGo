import {GAME_STATUSES} from "./GAME_STATUSES";

const _state = {
  status: GAME_STATUSES.SETTINGS,

}

export function getStatus() {
  return _state.status
}