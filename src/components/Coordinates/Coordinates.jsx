import cx from 'classnames'
import CoordinatesRow from '../CoordinatesRow'
import styles from './Coordinates.module.sass'

export const Coordinates = React.memo(({ position, boardColors, orientation }) => {
  const classNames = cx(
    styles.coordinates,
    { [styles.outside]: position === 'outside' }
  )

  let files = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h']
  let ranks = [8, 7, 6, 5, 4, 3, 2, 1]

  if (orientation === 'black') {
    files = files.reverse()
    ranks = ranks.reverse()
  }

  if (position === 'none') return null

  return (
    <svg viewBox='0 0 100 100' className={classNames}>
      <CoordinatesRow symbols={ranks} position={position} boardColors={boardColors} />
      <CoordinatesRow symbols={files} position={position} boardColors={boardColors} />
    </svg>
  )
})