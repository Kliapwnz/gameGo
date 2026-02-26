import {getStatus, subscribe} from "../state/data.js";

import {Game} from "./game-mode/game.component.js";


const rootElement = document.getElementById('root')

function render () {
  rootElement.innerHTML= ""

const status = getStatus()

const gameElement = Game(status)

rootElement.append(gameElement)

}

render()
subscribe(render)