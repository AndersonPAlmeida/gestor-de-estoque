import { Button } from '../../components/Button'
import { TagLink } from '../../components/Link'
import styles from './ItemInStock.module.css'
import { useStock } from '../../hooks/useStock'

export function ItemInStock() {
  const { items, deleteItem } = useStock()

  function handleDelete(name, idItem){
    if (confirm(`Tem certeza que deseja excluir o item ${name} ?`)) {
      deleteItem(idItem)
    }
  }

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
          items.map((item) => (
              <div className={styles.content} key={item.id}>
                <p>{item.id}</p>
                <p>{item.name}</p>
                <p>{item.quantity}</p>
                <p>{item.category}</p>
                <div className={styles.buttons}>

                  <TagLink text="Ver" typeColor="primary" 
                  linkRedirect={`/items/${item.id}`} />
                  <TagLink text="Atualizar" linkRedirect={`/items/${item.id}/update`} />
                              
                  <Button text="Excluir" typeColor="danger" name={item.name} onClick={() => handleDelete(item.name, item.id)}/>
                </div>
              </div>
          ))}

    </div>
  )
}