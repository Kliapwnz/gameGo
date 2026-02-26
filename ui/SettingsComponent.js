export function Settings() {
  const element = document.createElement('div')

  element.append('SETTINGS PAGE')
  const gridSizeSelectElement = document.createElement('select')
  const gridSizeOptionElement = document.createElement('option')
  gridSizeOptionElement.append('4x4')
  gridSizeSelectElement.append(gridSizeOptionElement)

  element.append(gridSizeSelectElement)

  const startButtonElement = document.createElement('button')
  startButtonElement.append('START ⭐')
  element.append(startButtonElement)

  return element
}