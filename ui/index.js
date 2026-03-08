import {getStatus, movePlayer, subscribe} from "../state/data.js";

import {Game} from "./game-mode/game.component.js";
import {MOVE_DIRECTIONS} from "../state/MOVE_DIRECTIONS.js";


const rootElement = document.getElementById('root')

function render() {
  rootElement.innerHTML = ""

  const status = getStatus()

  const gameElement = Game(status)

  rootElement.append(gameElement)

}
window.addEventListener('keyup', ()=>{
  console.log("hehe")
  movePlayer(1, MOVE_DIRECTIONS.DOWN)
})
render()
subscribe(render)