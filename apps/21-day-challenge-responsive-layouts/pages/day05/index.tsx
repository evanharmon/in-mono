import styles from './day05.module.css'

function Day05() {
  return (
    <>
      <div className={styles.page}>
        <div className={styles.pageContainer}>
          <div className={styles.introContent}>
            <h1>Responsive layouts don’t have to be a struggle</h1>
            <div className={styles.introSubContent}>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam.
              </p>
            </div>
          </div>
          <button className={styles.pageButton}>
            <a href='#' className={styles.learnLink}>
              I want to learn
            </a>
          </button>
        </div>
      </div>
    </>
  )
}

export default Day05
