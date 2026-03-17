import {GAME_STATUSES} from "../../state/GAME_STATUSES.js";
import {SettingsMode} from "../settings-mode.component.js";
import {GamesMode} from "../game-mode.component.js";
import {LoseMode} from "../lose-mode.component.js";
import {getStatus, subscribe} from "../../state/data.js";

export const Game = () => {
  const element = document.createElement('div')
  const localState = {status: null, childrenCleanups: []}

  const unsubscribe = subscribe(() => {
    Game.render(element, localState)
  })

  Game.render(element, localState)

  return {
    element, cleanup: () => {
      unsubscribe()
      localState.childrenCleanups.forEach(cc => cc())
    }
  }
}


Game.render = (element, localState) => {
  const status = getStatus()

  if (localState.status === status) return;

  localState.status = status

  element.innerHTML = ""

  localState.childrenCleanups.forEach(cc=>cc())
  localState.childrenCleanups = []

  switch (status) {
    case GAME_STATUSES.SETTINGS:
      const settingsModeInstance = SettingsMode()
      localState.childrenCleanups.push(settingsModeInstance.cleanup)
      element.append(settingsModeInstance.element)
      break;
    case GAME_STATUSES.IN_PROGRESS:
      const gameModeInstance = GamesMode()
      localState.childrenCleanups.push(gameModeInstance.cleanup)
      element.append(gameModeInstance.element)
      break;
    case GAME_STATUSES.LOSE:
      const LoseModeInstance = LoseMode()
      localState.childrenCleanups.push(LoseModeInstance.cleanup)
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