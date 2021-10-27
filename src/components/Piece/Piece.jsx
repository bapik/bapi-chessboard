import cx from 'classnames'
import { getTransformValues } from '../../utils/helpers'
import styles from './Piece.module.sass'

export const Piece = React.forwardRef(({ coordinates, image, className, ...rest }, ref) => (
  <piece
    ref={ref}
    className={cx(styles.piece, className)}
    style={{ transform: getTransformValues(coordinates), backgroundImage: `url(${image})` }}
    {...rest}
  />
))