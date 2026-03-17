import {Grid} from "./game-mode/grid.component.js";

export function GamesMode() {
  const element = document.createElement('div')

  const localState = {
    childrenCleanups: []
  }

  GamesMode.render(element, localState)

  return {
    element, cleanup: () => {
    }
  }
}

GamesMode.render = (element, localState) => {
  const gridComponentInstance = Grid()
  localState.childrenCleanups.push(gridComponentInstance.cleanup)
  element.append(gridComponentInstance.element)
}