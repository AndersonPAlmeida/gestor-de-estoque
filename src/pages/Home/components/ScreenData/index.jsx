import styles from './ScreenData.module.css'
import PropTypes from 'prop-types'

ScreenData.propTypes = {
  title: PropTypes.string.isRequired,
  value: PropTypes.number.isRequired
}

export function ScreenData({title, value}) {
  return (
    <div className={styles.container}>
      <p>{title}</p>
      <div className={styles.quantity}>
        <strong>{value}</strong>
      </div>
    </div>
  )
}