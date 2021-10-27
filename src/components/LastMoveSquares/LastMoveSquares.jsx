import Square from '../Square'
import styles from './LastMoveSquares.module.sass'

export const LastMoveSquares = ({ lastMove }) => (
  lastMove.map(square => <Square className={styles.highlightSquare} key={square.notation} coordinates={square.coordinates} />)
)