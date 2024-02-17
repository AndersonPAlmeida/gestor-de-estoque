import { Link } from 'react-router-dom'
import styles from './Button.module.css'
import PropTypes from "prop-types"

TagLink.propTypes = {
  text: PropTypes.string.isRequired,
  linkRedirect: PropTypes.string,
  typeColor: PropTypes.string
}

export function TagLink({text, linkRedirect= "/", typeColor=""}) {
  return (
    <Link to={linkRedirect} className={`${styles.button} ${[styles[typeColor]]}`} >
      {text}
    </Link>
  )
}

