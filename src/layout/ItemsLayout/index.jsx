import { Link, Outlet } from 'react-router-dom'
import style from './ItemsLayout.module.css'

export function ItemsLayout(){
  return (
    <div className={style.containerItem}>
      <h1>Stock Items</h1>

      <nav className={style.links}>
        <ul>
          <li>
            <Link to="/items">Todos os items em estoque</Link>
          </li>
          <li>
            <Link to="/items/new">Novo item</Link>
          </li>
        </ul>
      </nav>

      <hr />

      <Outlet />
    </div>
  )
}