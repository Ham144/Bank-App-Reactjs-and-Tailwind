import styles from "../style"
import Button from './Button'

const CTA = () => (
  <section className={`${styles.flexCenter} ${styles.marginY} ${styles.padding} sm:flex-row flex-col bg-black-gradient-2 box-shadow`}>
    <div>
      <h2 className={styles.heading2}>Let's try our service now!</h2>
      <p className={styles.paragraph}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti. Lorem ipsum dolor sit.  </p>
    </div>
    <div>
      <Button />
    </div>

  </section>
  
)

export default CTA