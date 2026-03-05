import {getGooglePosition, getGridSize} from "../../state/data.js";

export const Grid = () => {
  const element = document.createElement('table')
  const gridSize = getGridSize()
  const googlePosition = getGooglePosition()
  for (let y = 0; y < gridSize.rowsCount; y++) {
    const row = document.createElement('tr')

    for (let x = 0; x < gridSize.columnsCount; x++) {
      const cell = document.createElement('td')
      if (x === googlePosition.x && y === googlePosition.y)
      cell.append('G')
      row.append(cell)
    }
    element.append(row)
  }

  return element
}