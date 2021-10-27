import { useState, useEffect } from 'react'
import Pieces from '../Pieces'
import PhantomPiece from '../PhantomPiece'
import HoverSquare from '../HoverSquare'
import HintSquares from '../HintSquares'
import HighlightSquare from '../HighlightSquare'
import LastMoveSquares from '../LastMoveSquares'
import { findSquareByNotation, addPieceInfo } from '../../utils/helpers'
import { useSquareFromEvent } from './utils/useSquareFromEvent'
import { usePreviousSquare } from './utils/usePreviousSquare'

export const BoardController = ({
  chessboard,
  validMoves,
  position,
  onPiecePick,
  onMove,
  showHoverSquare,
  showPossibleMoves,
  showCurrentSquare,
  showLastMove,
  showPhantomPiece,
  piecesTheme
}) => {
  const currentSquare = useSquareFromEvent(chessboard)
  const previousSquare = usePreviousSquare(currentSquare)
  const [lastMove, setLastMove] = useState([])

  useEffect(() => {
    if (!currentSquare) return

    const hasPiece = findSquareByNotation(currentSquare.notation, position)
    const isValidMove = findSquareByNotation(currentSquare.notation, validMoves)

    if (hasPiece && !isValidMove) {
      onPiecePick(currentSquare.notation)
      return
    }

    if (isValidMove) {
      setLastMove([previousSquare, currentSquare])
      onMove({ from: previousSquare.notation, to: currentSquare.notation })
    }
  }, [currentSquare])
  
  return (
    <>
      {showHoverSquare && <HoverSquare />}
      {showCurrentSquare && <HighlightSquare square={addPieceInfo(currentSquare, position)} />}
      {showLastMove && <LastMoveSquares lastMove={lastMove} />}
      {showPossibleMoves && <HintSquares validMoves={validMoves} position={position} />}
      <Pieces position={position} theme={piecesTheme} />
      {showPhantomPiece && <PhantomPiece activeSquare={addPieceInfo(currentSquare, position)} theme={piecesTheme} />}
    </>
  )
}