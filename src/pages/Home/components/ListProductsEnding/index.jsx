import styles from './ListProductsEnding.module.css'
import { TagLink } from '../../../../components/Link'
import PropTypes from 'prop-types'

ListProductsEnding.propTypes = {
  items: PropTypes.array
}

export function ListProductsEnding({items}){
  return (
    <div className="containerList">
      <div className={styles.titles}>
        <h3>Itens Recentes</h3>
        <h3>Qtd.</h3>
        <h3>Ações</h3>
      </div>
      {
        items.map((item) => (
          <div key={item.id} className={styles.list}>
            <p>{item.name}</p>
            <p>{item.quantity}</p>
            <TagLink text="Ver" linkRedirect={`/items/${item.id}`} />
          </div>
        ))
      }
    </div>
  )
}