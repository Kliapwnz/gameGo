import {getStatus} from "../state/data.js";
import {GAME_STATUSES} from "../state/GAME_STATUSES.js";
import {SettingsMode} from "./settings-mode.component.js";

const status = getStatus()

const rootElement = document.getElementById('root')

switch (status) {
  case GAME_STATUSES.SETTINGS :
    const settingsModeElement = SettingsMode()
    rootElement.append(settingsModeElement)
    break;
  default:
    rootElement.append(status)
}

