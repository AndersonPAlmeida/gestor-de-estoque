import { Button } from '../../components/Button'
import styles from './NewItem.module.css'

export function NewItem() {
  return (
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
  )
}