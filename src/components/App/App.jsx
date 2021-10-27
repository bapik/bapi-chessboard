import { useChessGame } from '../../integrations/useChessGame'
import Chessboard from '../Chessboard'

export const App = () => {
  const { validMoves, position, onMove, onPiecePick } = useChessGame()

  return <Chessboard onPiecePick={onPiecePick} validMoves={validMoves} onMove={onMove} position={position} />
}