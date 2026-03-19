import {getGooglePosition, getGridSize, getPlayer1Position} from "../../state/data.js";

export const Grid = () => {
  const element = document.createElement('table')

  Grid.render(element)

  return {
    element,
    cleanup: () => {
    }
  }
}

Grid.render = (element) => {
  element.innerHTML = ""
  const gridSize = getGridSize()
  const googlePosition = getGooglePosition()
  const player1Position = getPlayer1Position()
  for (let y = 0; y < gridSize.rowsCount; y++) {
    const row = document.createElement('tr')

    for (let x = 0; x < gridSize.columnsCount; x++) {
      const cell = document.createElement('td')
      if (x === googlePosition.x && y === googlePosition.y) {
        cell.append('G')
        row.append(cell)
      }
      if (x === player1Position.x && y === player1Position.y) {
        cell.append('🚶‍')
      }
      row.append(cell)
    }
    element.append(row)
  }
}