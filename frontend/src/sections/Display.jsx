import { useGSAP } from "@gsap/react"
import gsap from "gsap/"
import { Iphone15, Sumsang24, Note13 } from "../utils"
import PhoneCard from "../components/PhoneCard"
import { DisplayList, PhoneTypes } from "../constants"


const Dispaly = () => {
  // useGSAP(() => {
  //   gsap.from("#phone", {
  //     x: 0,
  //     y: 0,
  //     scale: 0,
  //     duration: .5,
  //     stagger: 1.3,
  //     ease: "power2.out"
  //   }, [])
  // })

  return (
    <section className="bg-faded_blue min-h-screen w-full relative
    gap-1.5 items-center max-lg:w-full
    max-sm:min-h-[75vh] max-lg:min-h-[90vh] flex flex-col">
      <div className="flex justify-between items-center pt-20">
        <div className="border-2 border-coral-red w-[15%] absolute left-20 rounded-md">
          <h1
          className="text-center text-lg border-b font-palanquin bg-coral-red text-white"
          >Filter By Type</h1>
          <ul className="">
            {PhoneTypes.map((phone) => (
              <li key={phone}
              className="py-2 text-lg font-montserrat text-center
              border-b "
              >
                {phone}</li>
            ))}
          </ul>
        </div>
        <div className="flex justify-center items-center shadow-sm">
          <img src={Sumsang24} 
          alt="Sumsang24"
          width={170}
          height={200}
          id="phone"
          className="max-lg:w-[180px] max-lg:h-[350px]
          max-md:w-[150px] max-md:h-[300px]
          max-sm:w-[85px] max-sm:h-[150px]"
          />
          <img src={Iphone15} 
          alt="phone"
          width={220}
          height={290}
          id="phone"
          className="max-lg:w-[230px] max-lg:h-[450px]
          max-md:w-[200px] max-md:h-[400px]
          max-sm:w-[110px] max-sm:h-[220px]"
          />
          <img src={Note13} 
          alt="Note13"
          id="phone"
          width={165}
          height={200}
          className="max-lg:w-[180px] max-lg:h-[350px]
          max-md:w-[150px] max-md:h-[300px]
          max-sm:w-[82px] max-sm:h-[150px]"
          />
        </div>
        <div className="border h-[170px] ">

        </div>
      </div>
      <div className="flex flex-1 justify-center items-center absolute
      -bottom-[160px] max-lg:-bottom-[140px] max-md:-bottom-[90px] 
      max-sm:-bottom-[70px] gap-3">
        {DisplayList.map((item) => (
          <PhoneCard key={item.name}
          image={item.image}
          name={item.name}
          price={item.price}
          startotal={item.startotal}
          />
        ))}
      </div>
    </section>
  )
}

export default Dispaly
