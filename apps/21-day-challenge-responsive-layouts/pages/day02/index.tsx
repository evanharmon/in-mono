import styles from './day02.module.css'

// https://codepen.io/kevinpowell/pen/RKdjXe
function Day02() {
  return (
    <>
      <div className={styles['call-to-action']}>
        <h1 className={styles['call-to-action-h1']}>A call to action</h1>
        <a href='' className={styles['btn']}>
          Buy now
        </a>
        <a href='' className={`${styles['btn']} ${styles['btn--small']}`}>
          Buy now
        </a>
        <a href='' className={`${styles['btn']} ${styles['btn--lrg']}`}>
          Buy now
        </a>
      </div>

      <div
        className={`${styles['call-to-action']} ${styles['call-to-action--small']}`}
      >
        <h1 className={styles['call-to-action-h1']}>A call to action</h1>
        <a href='' className={styles['btn']}>
          Buy now
        </a>
      </div>
    </>
  )
}

export default Day02
