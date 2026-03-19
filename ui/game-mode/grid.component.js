import {getGridSize} from "../../state/data.js";
import {Cell} from "./cell.component";

export const Grid = () => {
  const element = document.createElement('table')

  const localState = {
    childrenCleanups: []
  }

  Grid.render(element, localState)

  return {
    element,
    cleanup: () => {
    }
  }
}

Grid.render = (element, localState) => {
  element.innerHTML = ""
  const gridSize = getGridSize()

  for (let y = 0; y < gridSize.rowsCount; y++) {
    const row = document.createElement('tr')

    for (let x = 0; x < gridSize.columnsCount; x++) {
      const cellInstance = Cell(x, y)
      localState.childrenCleanups.push(cellInstance.cleanup)
      row.append(cellInstance.element)
    }
    element.append(row)
  }
}