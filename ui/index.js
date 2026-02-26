import {getStatus} from "../state/data.js";

const status = getStatus()

const rootElement = document.getElementById('root')

rootElement.append(status)