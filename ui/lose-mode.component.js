export function LoseMode() {
  const element = document.createElement('div')

  element.append('GOOGLE WIN')
  
  const playAgainButtonElement = document.createElement('button')
  playAgainButtonElement.append('PLAY AGAIN 🎈 ')
  element.append(playAgainButtonElement)


  return element
}