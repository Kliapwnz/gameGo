import {Grid} from "./game-mode/grid.component.js";

export function GamesMode() {
  const element = document.createElement('div')


 element.append(Grid())

  return element
}