import {getGooglePosition, getPlayer1Position} from "../../state/data.js";

export function Cell (x, y) {
  const element = document.createElement('td')

  render(element)

  return {element,cleanup: ()=>{} }
}

Cell.render = (element, x, y) => {
  const googlePosition = getGooglePosition()
  const player1Position = getPlayer1Position()
  if (x === googlePosition.x && y === googlePosition.y) {
    element.append('G')

  }
  if (x === player1Position.x && y === player1Position.y) {
    element.append('🚶‍')
  }
}