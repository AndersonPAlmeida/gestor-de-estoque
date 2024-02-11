import { Button } from '../../components/Button'
import styles from './ItemInStock.module.css'

export function ItemInStock() {
  return (
    <div>
      <div className={styles.titles}>
        <h3>ID</h3>
        <h3>Nome</h3>
        <h3>Em Estoque</h3>
        <h3>Categoria</h3>
        <h3>Ações</h3>
      </div>

      <div className={styles.content}>
        <p>Loremipsum,dolorsitamet</p>
        <p>7 Wonders</p>
        <p>8 unid</p>
        <p>Jogos</p>

        <div className={styles.buttons}>
          <Button text="Ver" typeColor="primary"/>
          <Button text="Atualizar" />
          <Button text="Excluir" typeColor="danger"/>
        </div>
      </div>
    </div>
  )
}