import { useParams } from 'react-router-dom'
import { Button } from '../../components/Button'
import { useStock } from '../../hooks/useStock'
import styles from './ItemIndividual.module.css'
import { TagLink } from '../../components/Link'

export function ItemIndividual() {
  const { getItem } = useStock()
  const { id } = useParams();

  const item = getItem(id)

  return (
    <div>
      <div className={styles.operations}>
        <p>{item.name}</p>
        
        <div className={styles.buttons}>
          <TagLink text="Atualizar" linkRedirect={`/items/${item.id}/update`} />
          <Button text="Excluir" typeColor="danger" name={item.name} idItem={item.id}/>
        </div>
      </div>

      <div className={styles.descriptionsStock}>
        <div>Categoria: {item.category}</div>
        <div>Quantidade em estoque: {item.quantity}</div>
        <div>Preço: R$ {item.price}</div>
      </div>

      <div className={styles.descriptions}>
        <div>{item.description}</div>
        <div>
          <span>Cadastratado em: {item.createdAt.toDateString()}</span>
          <span>Atualizado em: {item.updateAt.toDateString()}</span>
        </div>
      </div>
    </div>
  )
}