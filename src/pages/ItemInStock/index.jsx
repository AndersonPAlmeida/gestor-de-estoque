import { Button } from '../../components/Button'
import styles from './ItemInStock.module.css'
import { useStock } from '../../hooks/useStock'

export function ItemInStock() {
  const { items } = useStock()

  return (
    <div>
      <div className={styles.titles}>
        <h3>ID</h3>
        <h3>Nome</h3>
        <h3>Em Estoque</h3>
        <h3>Categoria</h3>
        <h3>Ações</h3>
      </div>

      {
          items.map((item) => {
            <div className={styles.content} key={item.id}>
              <p>{item.id}</p>
              <p>{item.name}</p>
              <p>{item.quantity}</p>
              <p>{item.category}</p>
              <div className={styles.buttons}>
                <Button text="Ver" typeColor="primary"/>
                <Button text="Atualizar" />
                <Button text="Excluir" typeColor="danger"/>
              </div>
            </div>
          })
        }

    </div>
  )
}