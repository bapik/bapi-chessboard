import Piece from '../Piece'
import styles from './PhantomPiece.module.sass'

export const PhantomPiece = React.memo(({ activeSquare, theme }) => {
  if (!activeSquare?.piece) return null

  return <Piece className={styles.phantomPiece} coordinates={activeSquare.coordinates} image={theme[activeSquare.piece.type]} />
})