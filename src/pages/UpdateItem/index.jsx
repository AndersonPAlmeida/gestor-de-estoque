import styles from './UpdateItem.module.css'
import { useParams } from 'react-router-dom';
import { ItemForm } from '../../components/ItemForm'
import { useStock } from '../../hooks/useStock';

export function UpdateItem() {
  const { getItem } = useStock()
  const { id } = useParams();

  const item = getItem(id)

  return (
    <div>
      <h2 className={styles.titleFormat}>Atualizar Item</h2>
      <ItemForm itemToUpdate={item}/>
    </div>
  )
}