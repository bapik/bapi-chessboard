import { useEffect, useState } from 'react'
import { getSquareData, hasBoardBelow } from '../../../utils/helpers'

export const useSquareFromEvent = (chessboard) => {
  const [currentSquare, setCurrentSquare] = useState(null)

  useEffect(() => {
    document.addEventListener('mousedown', setSquareFromEvent)
    document.addEventListener('mouseup', setSquareFromEvent)

    return () => {
      document.removeEventListener('mousedown', setSquareFromEvent)
      document.removeEventListener('mouseup', setSquareFromEvent)
    }
  })

  const setSquareFromEvent = event => {
    if (!hasBoardBelow(event)) return

    const square = getSquareData(event, chessboard)

    if (currentSquare && (currentSquare.notation === square.notation)) return

    setCurrentSquare(square)
  }

  return currentSquare
}