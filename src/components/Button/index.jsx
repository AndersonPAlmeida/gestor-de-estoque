import styles from './Button.module.css'
import PropTypes from "prop-types"

Button.propTypes = {
  text: PropTypes.string.isRequired,
  typeColor: PropTypes.string
}

export function Button({text, typeColor="", ...rest}) {

  return (
    <button className={`${styles.button} ${[styles[typeColor]]}`} {...rest}>
      {text}
    </button>
  )
}

