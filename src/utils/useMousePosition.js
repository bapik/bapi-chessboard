import { useEffect, useState } from 'react'
import { getCoordinatesFromEvent, hasBoardBelow } from './helpers'

export const useMousePosition = () => {
  const [position, setPosition] = useState({ file: 0, rank: 0 })

  useEffect(() => {
    window.addEventListener('mousemove', setFromEvent)

    return () => window.removeEventListener('mousemove', setFromEvent)
  })

  const setFromEvent = event => {
    if (!hasBoardBelow(event)) return

    const coordinates = getCoordinatesFromEvent(event)

    if ((coordinates.file === position.file) && (coordinates.rank === position.rank)) return

    setPosition(coordinates)
  }

  return position
}