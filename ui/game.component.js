import {GAME_STATUSES} from "../state/GAME_STATUSES.js";
import {SettingsMode} from "./settings-mode.component.js";
import {GamesMode} from "./game-mode.component.js";
import {LoseMode} from "./lose-mode.component.js";

export const Game =(status) => {
  const element = document.createElement('div')

  switch (status) {
    case GAME_STATUSES.SETTINGS :
      const settingsModeElement = SettingsMode()
      element.append(settingsModeElement)
      break;
    case GAME_STATUSES.IN_PROGRESS :
      const gameModeElement = GamesMode()
      element.append(gameModeElement)
      break;
    case GAME_STATUSES.LOSE :
      const LoseModeElement = LoseMode()
      element.append(LoseModeElement)
      break;
    case GAME_STATUSES.WIN :
      const WinModeElement = "WIN"
      element.append(WinModeElement)
      break;
    default:
      element.append("STATE IS INVALID")
  }
  return element
}