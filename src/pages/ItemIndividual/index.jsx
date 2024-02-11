import { Button } from '../../components/Button'
import styles from './ItemIndividual.module.css'

export function ItemIndividual() {
  return (
    <div>
      <div className={styles.operations}>
        <p>7 Wonders</p>
        
        <div className={styles.buttons}>
          <Button text="Atualizar" />
          <Button text="Excluir" typeColor="danger"/>
        </div>
      </div>

      <div className={styles.descriptionsStock}>
        <div>Categoria: jogos</div>
        <div>Quantidade em estoque: 8</div>
        <div>Preço: R$ 399,99</div>
      </div>

      <div className={styles.descriptions}>
        <div>Jogo de tabuleiro para vários jogadores</div>
        <div>
          <span>Cadastratado em: Fri Jun 16 2023</span>
          <span>Atualizado em: Fri Jun 16 2023</span>
        </div>
      </div>
    </div>
  )
}