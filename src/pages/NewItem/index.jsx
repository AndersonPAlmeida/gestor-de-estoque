import { useRef, useState } from 'react'
import { Button } from '../../components/Button'
import styles from './NewItem.module.css'
import PropTypes from 'prop-types'
import { StockItem } from '../../entities/StockItem'
import { useStock } from '../../hooks/useStock'

NewItem.propTypes = {
  itemToUpdate: PropTypes.object
}

const categories = [
  "Jogos",
  "Livros",
  "Brinquedos",
  "Acessórios"
]

export function NewItem({ itemToUpdate }) {
  const defaultItem = {
    name: "",
    description: "",
    quantity: 0,
    price: 0,
    category: ""
  }

  const [item, setItem] = useState(itemToUpdate ? itemToUpdate : defaultItem)
  const { addItem } = useStock()
  const inputRef = useRef(null)

  function handleChange(event) {
    setItem((currentState) => {
      return {
        ...currentState,
        [event.target.name]: event.target.value
      }
    })
  }

  function handleSubmit(event) {
    event.preventDefault()

    try {
      const validItem = new StockItem(item)
      addItem(validItem);
      setItem(defaultItem)
      alert("Item cadastratado com sucesso!")      
    } catch (error) {
      console.log(error.message);
    } finally {
      inputRef.current.focus()
    }
  }

  return (
    <div>
      <form onSubmit={handleSubmit} className={styles.formItem}>
        <section className={styles.sectionOne}>
          <div className={styles['input-wrapper']}>
            <label htmlFor="name">Nome</label>
            <input 
              type="text" 
              name="name" 
              id="name" 
              ref={inputRef}
              value={item.name}
              className={styles.inputItem}
              onChange={handleChange}
            />
          </div>

          <div className={styles['input-wrapper']}>
            <label htmlFor="quantity">Quantidade</label>
            <input 
              type="number"
              name="quantity" 
              id="quantity" 
              className={styles.inputItem}
              min={0}
              step={1}
              value={item.quantity}
              onChange={handleChange}
            />
          </div>

          <div className={styles['input-wrapper']}>
            <label htmlFor="price">Preço</label>
            <input 
              type="text" 
              name="price" 
              id="price" 
              className={styles.inputItem}
              value={item.price}
              onChange={handleChange}
            />
          </div>

          <div className={styles['input-wrapper']}>
            <label htmlFor="category">Categoria</label>
            <select
              name="category"
              id="category"
              required
              value={item.category}
              onChange={handleChange}
              className={`${styles.inputItem} ${styles.selectItem}`}
            >
              <option disabled value="">Selecione uma categoria...</option>
              {categories.map((category) => (
                <option
                  key={category}
                  value={category}
                  defaultChecked={item.category === category}
                >
                  {category}
                </option>
              ))}
            </select>
          </div>
        </section>

        <section>
          <div className={styles['input-wrapper']}>
            <label htmlFor="description">Descrição</label>
            <textarea 
              name="description" 
              id="description" 
              className={styles.textItem}
              onChange={handleChange}
              value={item.description}
              required
            >
            </textarea>
          </div>
        </section>

        <Button type="button" text="Salvar" typeColor="primary"/>
      </form>
    </div>
  )
}