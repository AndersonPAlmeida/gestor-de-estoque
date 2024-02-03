import styles from './ScreenData.module.css'

export function ScreenData() {
  return (
    <div className={styles.container}>
      <p>Diversidade de itens</p>
      <div className={styles.quantity}>
        <strong>2</strong>
      </div>
    </div>
  )
}