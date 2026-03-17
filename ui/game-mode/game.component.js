import {GAME_STATUSES} from "../../state/GAME_STATUSES.js";
import {SettingsMode} from "../settings-mode.component.js";
import {GamesMode} from "../game-mode.component.js";
import {LoseMode} from "../lose-mode.component.js";
import {getStatus, subscribe} from "../../state/data.js";

export const Game = () => {
  const element = document.createElement('div')
  const localState = {status: null}

  const unsubscribe = subscribe(() => {
    Game.render(element, localState)
  })

  Game.render(element, localState)

  return {element, cleanup: ()=>{}}
}


Game.render = (element, localState) => {
  const status = getStatus()

  if (localState.status === status) return;

  localState.status = status

  element.innerHTML = ""

  switch (status) {
    case GAME_STATUSES.SETTINGS:
      const settingsModeInstance = SettingsMode()
      element.append(settingsModeInstance.element)
      break;
    case GAME_STATUSES.IN_PROGRESS:
      const gameModeInstance = GamesMode()
      element.append(gameModeInstance.element)
      break;
    case GAME_STATUSES.LOSE:
      const LoseModeInstance = LoseMode()
      element.append(LoseModeInstance.element)
      break;
    case GAME_STATUSES.WIN:
      const WinModeElement = "WIN"
      element.append(WinModeElement)
      break;
    default:
      element.append("STATE IS INVALID")
  }
}