export const isOdd = number => number % 2

export const getSquareColor = (isRank, index, colors) => {
  let color
  
  if (isRank) return color = isOdd(index) ? colors.light : colors.dark  

  return color = isOdd(index) ? colors.dark : colors.light
}