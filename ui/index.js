import {getStatus} from "../state/data.js";
import {GAME_STATUSES} from "../state/GAME_STATUSES.js";
import {SettingsMode} from "./settings-mode.component.js";
import {GamesMode} from "./game-mode.component.js";
import {LoseMode} from "./lose-mode.component.js";

const status = getStatus()

const rootElement = document.getElementById('root')

switch (status) {
  case GAME_STATUSES.SETTINGS :
    const settingsModeElement = SettingsMode()
    rootElement.append(settingsModeElement)
    break;
  case GAME_STATUSES.IN_PROGRESS :
    const inProgressModeElement = GamesMode()
    rootElement.append(inProgressModeElement)
    break;
  case GAME_STATUSES.LOSE :
    const LoseModeElement = LoseMode()
    rootElement.append(LoseModeElement)
    break;
  default:
    rootElement.append(status)
}

