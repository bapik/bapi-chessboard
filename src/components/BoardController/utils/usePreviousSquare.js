import { useEffect, useRef } from 'react'

export const usePreviousSquare = square => {
  const ref = useRef()

  useEffect(() => ref.current = square)

  return ref.current
}