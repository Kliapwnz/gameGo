import {startGame} from "../state/data.js";

export function SettingsMode() {
  const element = document.createElement('div')


  SettingsMode.render(element)

  return {
    element, cleanup: () => {
    }
  }
}

SettingsMode.render = (element) => {
  const gridSizeSelectElement = document.createElement('select')
  const gridSizeOptionElement = document.createElement('option')
  gridSizeOptionElement.append('4x4')
  gridSizeSelectElement.append(gridSizeOptionElement)

  element.append(gridSizeSelectElement)

  const startButtonElement = document.createElement('button')
  startButtonElement.append('START ⭐')

  startButtonElement.addEventListener('click', () => {
    startGame()
  })

  element.append(startButtonElement)
}