import styles from './ListProductsRecent.module.css'
import { TagLink } from '../../../../components/Link'
import PropTypes from 'prop-types'

ListProductsRecent.propTypes = {
  items: PropTypes.array
}

export function ListProductsRecent({items}){
  return (
    <div className="containerList">
      <div className={styles.titles}>
        <h3>Itens Recentes</h3>
        <h3>Ações</h3>
      </div>
      {
        items.map((item) => (
          <div key={item.id} className={styles.list}>
            <p>{item.name}</p>
            <TagLink text="Ver" linkRedirect={`/items/${item.id}`} />
          </div>
        ))
      }
    </div>
  )
}