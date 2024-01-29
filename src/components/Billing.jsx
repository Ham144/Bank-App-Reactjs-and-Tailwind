import { apple, bill, google } from "../assets"
import styles, {layout} from "../style"

const Billing = () => (
  
    <section id="product" className={`${layout.sectionReverse} `}>
        <div className={layout.sectionImgReverse}>
          <img src={bill} alt="billing" className={`w-[100%] h-[100%] relative z-[5]`} />

          <div className={`absolute z-[3] -left-1/2 top-0 w-[50%] h-[50%] rounded-full white__gradient`}/>
          <div className={`absolute z-[1] -left-1/2 bottom-0 w-[50%] h-[50%] rounded-full pink__gradient`}/>

        </div>
        <div className={`${layout.sectionInfo} lg:ml-64`}>
          <h2 className={styles.heading2}>Easily control your <br className={`sm:block hidden text-white`} />
            billing & invoicing.
          </h2>
          <p className={`${styles.paragraph} max-w-[470px] mt-5 `}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione maiores mollitia recusandae molestias ab reiciendis fugit sunt voluptatem explicabo laudantium, ducimus in commodi quae. At sequi corrupti nulla quod quisquam maxime beatae maiores!</p>
        </div>
    </section>
  
)

export default Billing