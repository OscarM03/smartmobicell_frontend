import { bestSellerList, quickLinks } from "../constants"
import { Logo } from "../utils"
import SocialMedia from "./SocialMedia"


const Footer = () => {
    return (
        <footer className="bg-display-bg font-medium mt-10 font-poppins">
            <div className="flex justify-between border-b pb-4 px-10 max-custom-950:flex-col">
                <div className="flex gap-10">
                    <div className="py-10">
                        <img src={Logo}
                        alt="logo" 
                        width={200}
                        
                        />  
                        <h1 className="text-xl pt-4"><span className=" text-thick-orange font-bold">
                            Location:</span> Nairobi</h1>
                        <p className="mt-2">Nairobi GreenMall, opposite Citizens Hall</p>
                        <p className="mt-2 ">We are open from Mon - Fri</p>
                        <p className="mt-2 text-thick-orange font-bold">8:00AM - 6:00PM</p>
                        <SocialMedia/>
                    </div>
                    <div className="py-10">
                        <h1 className="text-2xl font-bold">Quick Links</h1>
                        <ul>
                            {quickLinks.map((item) => (
                                <li key={item.label}
                                className="pt-4 text-md hover:text-thick-orange">
                                    <a href={item.href}>
                                        {item.label}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
                <div className="flex gap-10">
                    <div className="py-10 max-custom-950:hidden">
                        <h1 className="text-2xl font-bold">Best Seller</h1>
                        <ul>
                            {bestSellerList.map((item) => (
                                <li key={item}
                                className="pt-4">{item}</li>
                            ))}
                        </ul>
                    </div>
                    <div className="py-10">
                        <h1 className="text-2xl font-bold max-custom-950:text-center">Contact Us</h1>
                        <p className="pt-4 max-custom-950:text-center">At SmartMobiCell, our customers are our top priority. <br />We are dedicated to providing
                            exceptional service <br />and support to meet your needs.
                            Contact us today and <br />experience our commitment to your satisfaction.
                        </p>
                        <p className="pt-4 max-custom-950:text-center"><span className="text-thick-orange font-bold">
                            Email:</span> smartmobicell@gmail.com</p>
                        <p className="pt-4 max-custom-950:text-center"><span className="text-thick-orange font-bold">
                            Call:</span> +254 134888333</p>
                    </div>
                </div>
            </div>
            <div className="flex justify-center items-center py-2">
                <h1>&copy; 2024 SmartMobiCell. All rights reserved.
                </h1>
            </div>
        </footer>
    )
}

export default Footer

