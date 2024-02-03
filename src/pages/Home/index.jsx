import { ListProductsEnding } from './components/ListProductsEnding';
import { ListProductsRecent } from './components/ListProductsRecent';
import { ScreenData } from './components/ScreenData'
import styles from './Home.module.css'

export function Home() {
  return (
    <div className={styles.containerHome}>
      <h1>Dashboard</h1>
      <div className={styles.generalDataContainer}>
        <ScreenData />
        <ScreenData />
        <ScreenData />
        <ScreenData />
      </div>
      <div className={styles.listContainer}>
        <ListProductsRecent />
        <ListProductsEnding />
      </div>
    </div>
  );
}