import {Grid} from "./game-mode/grid.component.js";

export function GamesMode() {
  const element = document.createElement('div')

  GamesMode.render(element)


  return {element}
}

GamesMode.render = (element) => {
  const gridComponentInstance = Grid()
  element.append(gridComponentInstance.element)
}