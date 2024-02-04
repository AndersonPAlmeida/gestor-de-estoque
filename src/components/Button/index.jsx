import styles from './Button.module.css'
import PropTypes from "prop-types"

Button.propTypes = {
  text: PropTypes.string.isRequired,
  typeColor: PropTypes.string
}

export function Button({text, typeColor=""}) {
  return (
    <button className={`${styles.button} ${[styles[typeColor]]}`}>
      {text}
    </button>
  )
}

