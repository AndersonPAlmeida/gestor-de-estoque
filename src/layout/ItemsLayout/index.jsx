import { Link, Outlet, useLocation } from 'react-router-dom'
import style from './ItemsLayout.module.css'

export function ItemsLayout(){
  const { pathname } = useLocation()

  return (
    <div className={style.containerItem}>
      <h1>Stock Items</h1>

      <nav className={style.links}>
        <ul>
          <li>
            <Link 
              to="/items"
              className={`${pathname === "/items" ? style.active : ""}`}
            >Todos os items em estoque</Link>
          </li>
          <li>
            <Link 
              to="/items/new"
              className={`${pathname === "/items/new" ? style.active : ""}`}
            >Novo item</Link>
          </li>
        </ul>
      </nav>

      <hr />

      <Outlet />
    </div>
  )
}