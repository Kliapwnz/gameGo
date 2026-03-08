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
window.addEventListener('keyup', (e)=>{
 switch (e.code){
   case "ArrowUp": movePlayer(1, MOVE_DIRECTIONS.UP); break
   case "ArrowDown": movePlayer(1, MOVE_DIRECTIONS.DOWN); break
   case "ArrowLeft": movePlayer(1, MOVE_DIRECTIONS.LEFT); break
   case "ArrowRight": movePlayer(1, MOVE_DIRECTIONS.RIGHT); break
 }

})
render()
subscribe(render)