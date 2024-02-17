import { useStock } from '../../hooks/useStock';
import { ListProductsEnding } from './components/ListProductsEnding';
import { ListProductsRecent } from './components/ListProductsRecent';
import { ScreenData } from './components/ScreenData'
import styles from './Home.module.css'

export function Home() {
  const { items } = useStock()

  const diversity = items.length
  const invetoryTotal = items.reduce((sum, item) => +sum + +item.quantity, 0)

  const today = new Date()
  const limitDate = new Date()
  limitDate.setDate(limitDate.getDate() - 10)
  const recentItems = items.filter((item) => item.createdAt >= limitDate && item.createdAt <= today)
  const recentTotal = recentItems.length

  const lowQuantityItems = items.filter((item) => item.quantity < 10)
  const lowQuantityItemsTotal = lowQuantityItems.length
  
  return (
    <div className={styles.containerHome}>
      <h1>Dashboard</h1>
      <div className={styles.generalDataContainer}>
        <ScreenData title="Diversidade de Itens" value={diversity} />
        <ScreenData title="Inventário total" value={invetoryTotal} />
        <ScreenData title="Itens recentes" value={recentTotal}/>
        <ScreenData title="Itens Acabando" value={lowQuantityItemsTotal}/>
      </div>
      <div className={styles.listContainer}>
        <ListProductsRecent items={recentItems}/>
        <ListProductsEnding items={lowQuantityItems}/>
      </div>
    </div>
  );
}