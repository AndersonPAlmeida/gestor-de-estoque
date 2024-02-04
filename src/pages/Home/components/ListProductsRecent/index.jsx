import { Button } from '../../../../components/Button'
import styles from './ListProductsRecent.module.css'

export function ListProductsRecent(){
  return (
    <div className="containerList">
      <div className={styles.titles}>
        <h3>Itens Recentes</h3>
        <h3>Ações</h3>
      </div>
      <div className={styles.list}>
        <p>7 Wonders</p>
        <Button text="Ver"/>
      </div>
      <div className={styles.list}>
        <p>7 Wonders</p>
        <Button text="Ver"/>
      </div>
    </div>
  )
}