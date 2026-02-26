export const Grid = () => {
  const element = document.createElement('table')
  for (let y = 0; y < 4; y++) {
    const row = document.createElement('tr')

    for (let x = 0; x < 4; x++) {
      const cell = document.createElement('td')
      cell.append(x, '-', y)
      row.append(cell)
    }
    element.append(row)
  }

  return element
}