import { PhoneTypes } from "../constants"
import { DisplayImage } from "../utils"

const Hero = () => {
    return (
        <section className="grid md:grid-cols-[22%,1fr] max-md:grid-cols-1fr gap-10 pt-1
        max-md:h-[70vh] h-[50vh] ">
            <div className="shadow-lg ml-10  rounded-md flex justify-center bg-display-bg
            max-md:hidden">
                <ul className="pt-2">
                    {PhoneTypes.map((type) => (
                        <a href={`/all?q=${encodeURIComponent(type)}`} key={type}>
                            <li className="text-lg font-poppins font-semibold pb-1">
                            {type}
                        </li>
                        </a>
                    ))}
                </ul>
            </div>
            <div className="shadow-lg rounded-md mr-10 h-full flex justify-center items-center
            max-lg:w-full max-sm:h-[68vh] bg-display-bg">
                <img src={DisplayImage}
                alt="" 
                width={600}
                />
            </div>
            {/* <div className="flex flex-col w-[980px] h-[67vh] rounded-md xl:w-[1100px]
            bg-gradient-to-r from-lighter-yellow to-thick-orange relative -z-20
            ">
                <img src={ButtonPhone} 
                    alt="phone"
                    width={290}
                    className="absolute bottom-0 left-[15.5%] -z-10 max-md:left-[28%] max-sm:left-[20%]
                    max-custom-500:left-[13%] max-custom-450:left-[.5%]"
                />

                <h1 className="text-[60px] font-semibold pt-[140px] pl-[8%] font-poppins h-[170px]
                max-lg:text-[50px] max-xl:text-[50px] max-md:pl-[20%] max-sm:text-[30px]
                max-sm:pl-[24%] max-custom-500:pl-[19%] max-custom-450:text-[22px] max-custom-450:pt-[180px]">
                    Connecting You
                </h1>

                <h2 className="text-[40px] font-semibold pl-[18%] pt-[40px] font-poppins text-white
                max-lg:text-[40px] max-xl:text-[35px] max-md:pl-[30%] max-sm:pl-[29%] max-sm:text-[28px]
                max-sm:pt-[10px] max-custom-500:pl-[26%] max-custom-450:text-[20px] max-custom-450:pt-[28px]">
                    To The Future
                </h2>

                <h3 className="text-[20px] font-semibold pl-[14%] font-poppins max-lg:text-[17px]
                max-xl:text-[18px] max-md:pl-[28%] max-sm:pl-[25%] max-sm:text-[13px]
                max-custom-500:pl-[22%] max-custom-450:text-[10px] max-custom-450:pl-[19%]">
                    with quality and affordable phones
                </h3>
                

                <div className="absolute w-[30%] h-[40%] border right-[1.5%] top-[4%] rounded-lg
                shadow-lg flex items-center flex-col justify-center bg-affordablebg max-md:hidden">
                    <h1 className="font-bold z-10 text-[40px] text-thick-orange">
                        Affordable
                    </h1>
                    <h3 className="text-white font-bold z-10">Phones at Mobicell</h3>
                </div>

                <div className="absolute w-[30%] h-[40%] border bottom-[4%] right-[1.5%] rounded-lg
                shadow-lg  bg-phonebg bg-cover flex flex-col justify-center items-center max-md:hidden">
                    <h1 className="font-bold text-[40px] text-thick-orange z-10">Acquire</h1>
                    <h3 className="text-white font-bold z-10">Quality Phones</h3>
                </div>

                <div className="absolute w-[30%] h-[40%] border bottom-[4%] right-[1.5%]
                bg-black  opacity-50 rounded-lg max-md:hidden"></div>

                <div className="absolute w-[30%] h-[40%] border top-[4%] right-[1.5%]
                bg-black  opacity-60 rounded-lg max-md:hidden"></div>
            </div> */}
        </section>
)
}

export default Hero
