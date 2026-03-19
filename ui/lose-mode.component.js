export function LoseMode() {
  const element = document.createElement('div')

  element.append('GOOGLE WIN')

  LoseMode.render(element)

  return {
    element, cleanup: () => {
    }
  }
}

LoseMode.render = (element) => {
  const playAgainButtonElement = document.createElement('button')
  playAgainButtonElement.append('PLAY AGAIN 🎈 ')
  element.append(playAgainButtonElement)
}