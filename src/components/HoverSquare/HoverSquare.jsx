import Square from '../Square'
import { useMousePosition } from '../../utils/useMousePosition'
import styles from './HoverSquare.module.sass'

export const HoverSquare = () => {
  const activePiece = document.getElementsByClassName('piece active')[0]
  const coordinates = useMousePosition()

  if (!activePiece) return null

  return <Square className={styles.hoverSquare} coordinates={coordinates} />
}