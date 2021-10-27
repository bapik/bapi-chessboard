import cx from 'classnames'
import Square from '../Square'
import { findSquareByNotation } from '../../utils/helpers'
import styles from './HintSquare.module.sass'

export const HintSquares = ({ validMoves, position }) => (
  validMoves.map(move => {
    const hasPiece = findSquareByNotation(move.notation, position)
    const classNames = cx(styles.hintSquare, { [styles.hasPiece]: hasPiece })

    return <Square key={move.notation} coordinates={move.coordinates} className={classNames} />
  })
)