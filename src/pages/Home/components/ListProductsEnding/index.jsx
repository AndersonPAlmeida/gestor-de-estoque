import { Button } from '../../../../components/Button'
import styles from './ListProductsEnding.module.css'

export function ListProductsEnding(){
  return (
    <div className="containerList">
      <div className={styles.titles}>
        <h3>Itens Recentes</h3>
        <h3>Qtd.</h3>
        <h3>Ações</h3>
      </div>
      <div className={styles.list}>
        <p>7 Wonders</p>
        <p>8</p>
        <Button text="Ver"/>
      </div>
    </div>
  )
}