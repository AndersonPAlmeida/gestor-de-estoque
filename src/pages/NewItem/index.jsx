import { ItemForm } from '../../components/ItemForm'
import styles from './NewItem.module.css'


export function NewItem() {
  return (
    <div>
      <h2 className={styles.titleFormat}>Novo Item</h2>
      <ItemForm />
    </div>
  )
}