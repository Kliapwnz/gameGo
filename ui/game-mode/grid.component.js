import {getGridSize} from "../../state/data.js";
import {Cell} from "./cell.component";

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

  for (let y = 0; y < gridSize.rowsCount; y++) {
    const row = document.createElement('tr')

    for (let x = 0; x < gridSize.columnsCount; x++) {
      const cellInstance = Cell(x, y)
      row.append(cellInstance.element)
    }
    element.append(row)
  }
}