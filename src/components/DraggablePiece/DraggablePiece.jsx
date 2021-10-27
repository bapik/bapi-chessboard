import { useCallback, useRef } from 'react'
import Piece from '../Piece'
import { getTransformValues } from '../../utils/helpers'
import { transformPiece } from './utils/helpers'
import styles from './DraggablePiece.module.sass'

export const DraggablePiece = React.memo(({ type, coordinates, color, square, image }) => {
  let pieceRef = useRef()

  const onPiecePick = event => {
    pieceRef.current.classList.add(styles.active)
    pieceRef.current.style.transform = transformPiece(event)
    document.addEventListener('mousemove', onPieceMove)
  }

  const onPieceMove = useCallback(event => pieceRef.current.style.transform = transformPiece(event), [pieceRef])

  const onPieceDrop = () => {
    document.removeEventListener('mousemove', onPieceMove)
    pieceRef.current.classList.remove(styles.active)
    pieceRef.current.style.transform = getTransformValues(coordinates)
  }

  return (
    <Piece 
      data-type={type}
      data-color={color}
      data-square={square}
      onMouseDown={onPiecePick}
      onMouseUp={onPieceDrop}
      ref={pieceRef}
      coordinates={coordinates}
      image={image}
    />
  )
})