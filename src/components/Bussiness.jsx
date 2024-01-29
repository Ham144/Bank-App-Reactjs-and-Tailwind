import styles, { layout } from '../style'
import {features} from '../constants'
import Button from './Button'

const FeaturedCard = ({icon, title, content, index}) => (
  <div className={`flex flex-row p-6 rounded-[20px] ${index !== features.length  -1 ? "mb-6"  : "mb-0"} feature-card`}>
    <div className={`w-[64px] h-[64px] rounded-full ${styles.flexCenter} bg-dimBlue`}>
        <img src={icon} alt="icon" className={`w-[50%] h-[50%] object-contain`}/>
    </div>
    <div className='flex-1 flex-col ml-3' >
      <h4 className='font-poppins font-semibold text-white text-[18px] leading-[23px] mb-1'>
        {title}
      </h4>
      <p className='font-poppins font-normal text-white text-[16px] leading-[24px] mb-1'>{content}</p>
    </div>
  </div>
)

const Bussiness = () => {
  
  return (
    <section id={Bussiness.id} className={`layout.section`}>
      <section className='flex ss:flex-row flex-col'>
        <div className={layout.sectionInfo}>
          <h2 className={styles.heading2}>You do the business <br className={`sm:block hidden`}/>
           we'll handle the money.</h2>
          <p className={`${styles.paragraph} max-w-[470px] mt-5`}>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Corporis voluptatum illo accusamus, optio, tenetur officiis incidunt quibusdam sunt ad veritatis provident esse corrupti.</p>
          <Button styles="mt-10 rounded-full ">Get Started</Button>
        </div>
        <div className={`${layout.sectionImg} flex-col`}>
          {features.map((feature, index) => (
            <FeaturedCard key={feature.id} {...feature} index={index}/>
          ))}
        </div>
      </section>
    </section>
  )
}

export default Bussiness