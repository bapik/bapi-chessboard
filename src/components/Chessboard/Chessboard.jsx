import { useMemo } from 'react'
import BoardController from '../BoardController'
import Coordinates from '../Coordinates'
import { generatePiecesPosition, initChessboard } from '../../utils/helpers'
import { defaultPieces, defaultBoard } from '../../utils/defaultTheme'
import styles from './Chessboard.module.sass'
import '../../global.sass'

export const Chessboard = ({
  position,
  orientation,
  validMoves,
  showPossibleMoves,
  showCurrentSquare,
  showLastMove,
  showHoverSquare,
  showPhantomPiece,
  coordinatesPosition,
  chessboardTheme,
  boardColors,
  piecesTheme,
  onPiecePick,
  onMove
}) => {
  const chessboard = useMemo(() => initChessboard(orientation), [orientation])

  return (
    <div className={styles.chessboardWrapper}>
      <board className={styles.chessboard} id='chessboard' style={{ backgroundImage: `url(${chessboardTheme})` }}>
        <BoardController
          chessboard={chessboard}
          position={generatePiecesPosition(position, chessboard, orientation)}
          orientation={orientation}
          validMoves={validMoves.map(move => ({ notation: move, coordinates: chessboard.get(move) }))}
          showPossibleMoves={showPossibleMoves}
          showCurrentSquare={showCurrentSquare}
          showLastMove={showLastMove}
          showHoverSquare={showHoverSquare}
          showPhantomPiece={showPhantomPiece}
          piecesTheme={piecesTheme}
          onPiecePick={onPiecePick}
          onMove={onMove} 
        />
      </board>
      <Coordinates position={coordinatesPosition} boardColors={boardColors} orientation={orientation} />
    </div>
  )
}

Chessboard.defaultProps = {
  position: 'rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR',
  orientation: 'white',
  validMoves: [],
  showPossibleMoves: true,
  showCurrentSquare: true,
  showLastMove: true,
  showHoverSquare: true,
  showPhantomPiece: true,
  coordinatesPosition: 'inside',
  chessboardTheme: defaultBoard,
  boardColors: { dark: '#B58863', light: '#F0D9B5' },
  piecesTheme: defaultPieces,
  onPiecePick: () => {},
  onMove: () => {}
}