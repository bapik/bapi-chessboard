import { getSquareColor } from './utils/helpers'
import { riseValue, defaultColor, outsideTheme, insideTheme } from './utils/theme'

export const CoordinatesRow = ({ symbols, position, boardColors }) => {
  const theme = position === 'outside' ? outsideTheme : insideTheme
  const isRank = isNaN(parseInt(symbols[0], 10)) ? false : true
  const positionValues = isRank ? theme.firstRankValue : theme.firstFileValue

  return (
    symbols.map((symbol, index) => {
      const color = position === 'inside' ? getSquareColor(isRank, index, boardColors) : defaultColor
      
      const positionX = isRank ? positionValues.x : (positionValues.x + (index * riseValue))
      const positionY = isRank ? (positionValues.y + (index * riseValue)) : positionValues.y
      
      return <text x={positionX} y={positionY} fontSize={theme.fontSize} style={{ fill: color }} key={symbol}>{symbol}</text>
    })
  )
}