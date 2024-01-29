import styles from '../style'
import {discount, robot } from '../assets'
import GetStarted from './GetStarted'

const Hero = () => (
  <section className={`flex md:flex-row flex-col ${styles.paddingY}`} id='home'> 
    <div className={ `flex-1 ${styles.flexStart} flex-col xl:px-0 sm:px-16 px-6` }>
      <div className={`flex flex-row items-center py-[6px] px-4 bg-discount-gradient rounded-[10px] mb-2`}>
        <img src={discount} alt="discount" className={`w-32px h-32px `}/>
        <p className={`${styles.paragraph} `}>
          <span className='text-white'>20%</span> Discount For {" "}
          <span className='text-white'>1 month</span> Account
        </p>
      </div>
        <div className='flex flex-row justify-between items-center w-full'>
            <h1 className='flex-1 font-poppins font-semibold ss:text-[72px] text-[52px] text-white ss:leading-[100px] leading-[75px]'>
              The Next <br className='sm:block hidden'/> {" "}
              <span className='text-gradient'>Generation</span> <br className={`lg:block flex-1`}/>
            </h1>
            <div className='ss:flex hidden md:mr-4 mr-0 text-white'>
              <GetStarted/>
            </div>
            
        </div>
        <h1 className='flex-1 font-poppins font-semibold ss:text-[72px] text-[52px] text-white ss:leading-[100px] leading-[75px]'>
              Payment Method 
            <p className={`${styles.paragraph} max-w-[470px] mt-5`}>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nesciunt minima natus sunt doloremque in totam est quidem maiores sapiente, dolriatur ipsa!</p>
            </h1>
    </div>
    <div className={`flex flex-1 ${styles.flexCenter} md:my-0 my-10 relative `}>
      <img src={robot} alt="billing" className={`w-[100%] h-[100%] relative z-[5]`} />
      <div className='absolute z-[0] w-[40%] h-[35%] top-0 pink__gradient'></div>
      <div className='absolute z-[0] w-[80%] h-[80%] bottom-40 white__gradient'></div>
      <div className='absolute z-[0] w-[50%] h-[50%] bottom-20 blue__gradient'></div>

    </div>
    <div className={`ss:hidden ${styles.flexCenter}`}>
      <GetStarted/>
    </div>
  </section>
)

export default Hero