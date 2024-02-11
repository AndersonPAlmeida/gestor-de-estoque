import { Button } from '../../components/Button'
import styles from './NewItem.module.css'

export function NewItem() {
  return (
    <div className={styles.containerNewItem}>
      <h1>Stock Items</h1>

      <nav className={styles.links}>
        <ul>
          <li>
            <a href="#">Todos os itens</a>
          </li>
          <li>
            <a href="#">Novo Item</a>
          </li>
        </ul>
      </nav>

      <hr />

      <div>
        <form action="" className={styles.formItem}>
          <section className={styles.sectionOne}>
            <div className={styles['input-wrapper']}>
              <label htmlFor="nameItem">Nome</label>
              <input type="text" name="nameItem" id="nameItem" className={styles.inputItem}/>
            </div>

            <div className={styles['input-wrapper']}>
              <label htmlFor="quantityItem">Quantidade</label>
              <input type="number" defaultValue={0} name="quantityItem" id="quantityItem" className={styles.inputItem}/>
            </div>

            <div className={styles['input-wrapper']}>
              <label htmlFor="priceItem">Preço</label>
              <input type="text" name="priceItem" id="priceItem" className={styles.inputItem}/>
            </div>

            <div className={styles['input-wrapper']}>
              <label htmlFor="nameItem">Categoria</label>
              <input type="text" name="nameItem" id="nameItem" className={styles.inputItem}/>
            </div>
          </section>

          <section>
            <div className={styles['input-wrapper']}>
              <label htmlFor="descriptionItem">Descrição</label>
              <textarea name="descriptionItem" id="descriptionItem" className={styles.textItem}></textarea>
            </div>
          </section>

          <Button type="button" text="Salvar" typeColor="primary"/>
        </form>
      </div>
    </div>
  )
}