import { Link, Outlet } from 'react-router-dom';
import style from './RootLayout.module.css'

export function RootLayout() {
  return (
    <div className={style.rootLayoutContainer}>
      <header className={style.header}>
        <Link to="/" className={style.logo}>REACT STOCK</Link>
        <nav className={style.navigation}>
          <Link to="/">Início</Link>
          <Link to="/items">Items</Link>
        </nav>
      </header>

      <Outlet />

      <footer>
        Feito com React e React Router e estilizado com module.css !!!
      </footer>
    </div>
  )
}