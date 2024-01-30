import { logo } from "../assets"
import styles from "../style"
import { footerLinks, socialMedia } from "../constants"

const Footer = () => (
    <section className={`${styles.flexCenter} ${styles.paddingY} flex-col`}>
      <div className={`${styles.flexStart} md:flex-row flex-col mb-8 w-full`}>
        <div className={`flex-1 flex-col justify-start mr-10`}>
          <img src={logo} alt="hoobank" className={`w-[266px] h-[72px] object-contain`} />
          <p className={`${styles.paragraph} mt-4 max-w-[310px]`}>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
          <div className={`flex-[1.5] w-full flex flex-row justify-between flex-wrap md:mt-0 mt-10`}>
            {footerLinks.map((footerLink)=> (
              <div key={footerLink.key} className={`flex flex-col ss:my:-0 my-4 min-w-[150px]`}>
                  <h4 className="text-white">
                    {footerLink.title}
                  </h4>
                  <ul className="list-none mt-4">
                    
                    {footerLink.links.map((link, index)=>(
                      <li key={link.name} className={`font-poppins font-normal text-[16px] leading-[24px] text-dimWhite hover:text-secondary cursor-pointer ${footerLink.links !== footerLink.links.length -1 ? 'mt-3' : 'mt-0'}`}>
                          {link.name}
                      </li>
                    ))}
                  </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="w-full  flex justify-between items-center md:flex-row flex-col pt-6 border-t-[1px] border-t-[#565660]">
        <p className={`font-poppins font-normal text-center text-[18px] leading-[27px] text-white `}>
          2024 HooBank. All Rights Reserved
        </p>
        <div className="flex flex-row md:mt-0 mt-6 justify-center ">
          {socialMedia.map((social) =>(
            <img src={social.icon} alt={social.id} className={`w-[21px] h-[21px] mt-2 object-contain cursor-pointer ${social !== social.length -1 ? 'mr-4' : 'mr-0'}`}/>
          ))}
        </div>
      </div>

    </section>
)


export default Footer