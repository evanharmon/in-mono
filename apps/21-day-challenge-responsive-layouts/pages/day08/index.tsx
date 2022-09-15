import styles from './day08.module.css'

function Day08() {
  return (
    <>
      <div className={styles.hero}>
        <div className={styles.container}>
          <div className={styles.heroText}>
            <h1>Responsive layouts don&apos;t have to be a struggle</h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam.
            </p>
            <a href='#' className={styles.btn}>
              I want to learn
            </a>
          </div>
        </div>
      </div>

      <section className={styles.threeCol}>
        <div className={styles.container}>
          <div className={styles.row}>
            <div className={styles.col}>
              <h2>Cheap</h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam.
              </p>
            </div>
            <div className={styles.col}>
              <h2>Quick</h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam.
              </p>
            </div>
            <div className={styles.col}>
              <h2>Affordable</h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.twoCol}>
        <div className={styles.container}>
          <div className={styles.row}>
            <div className={styles.col}>
              <h2>Cheap</h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam.
              </p>
            </div>
            <div className={styles.col}>
              <h2>Quick</h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Day08
