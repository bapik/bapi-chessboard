import Square from '../Square'
import styles from './HighlightSquare.module.sass'

export const HighlightSquare = ({ square }) => {
  if (!square?.piece) return null
  
  return <Square className={styles.highlightSquare} coordinates={square.coordinates} />
}