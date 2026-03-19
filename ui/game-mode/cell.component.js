import {getGooglePosition, getPlayer1Position, subscribe} from "../../state/data.js";

export function Cell(x, y) {
  const element = document.createElement('td')

  const unsubscribe = subscribe(() => {
    Cell.render(element, x, y)
  })


  Cell.render(element, x, y)

  return {
    element, cleanup: () => {
      unsubscribe()
    }
  }
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