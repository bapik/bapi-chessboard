import cx from 'classnames'
import { getTransformValues } from '../../utils/helpers'
import styles from './Square.module.sass'

export const Square = React.memo(({ coordinates, className }) => (
  <square className={cx(styles.square, className)} style={{ transform: getTransformValues(coordinates) }} />
))