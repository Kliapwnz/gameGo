import {getStatus} from "../state/data.js";

import {Game} from "./game.component.js";


const rootElement = document.getElementById('root')

const status = getStatus()

const gameElement = Game(status)

rootElement.append(gameElement)


