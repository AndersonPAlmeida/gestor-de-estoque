import { useNavigate } from 'react-router-dom'
import { useStock } from '../../hooks/useStock'
import styles from './Button.module.css'
import PropTypes from "prop-types"

Button.propTypes = {
  text: PropTypes.string.isRequired,
  name: PropTypes.string, 
  idItem: PropTypes.string, 
  typeColor: PropTypes.string
}

export function Button({text, typeColor="", name, idItem}) {
  const { deleteItem } = useStock()
  const navigate = useNavigate()

  function handleDelete(){
    if (confirm(`Tem certeza que deseja excluir o item ${name} ?`)) {
      deleteItem(idItem)
      navigate("/items")
    }
  }

  return (
    <button className={`${styles.button} ${[styles[typeColor]]}`} onClick={handleDelete} >
      {text}
    </button>
  )
}

