import { useState } from "react"
import { AppleWatch } from "../utils"
import BillingForm from "../components/BillingForm";


const MyCart = () => {
    const [checkedItems, setCheckedItems] = useState({});
    const items = [
        "Shipping around Nairobi-free",
        "Shipping outside Nairobi-Ksh 500",
        "Shop-pickup"
    ]
    const handleChange = (event) => {
        const { name, checked } = event.target;
        setCheckedItems({
            ...checkedItems,
            [name]: checked,
        });
    };
    return (
        <section className="">
            <div className="mx-10 mt-10 flex gap-[10%] max-xl:flex-col ">
                <div className="w-[50%] border-2 rounded-md border-thick-orange max-xl:w-full max-xl:mb-6">
                    <h1 className="text-center font-bold mb-6 mt-2">YOUR ORDER</h1>
                    <div className="flex justify-center gap-80 max-xl:gap-52 font-bold ">
                        <h1>Products</h1>
                        <h1>Prices</h1>
                    </div>
                    <div className="flex justify-center gap-20 max-xl:gap-10 mt-6 border-b mx-10">
                        <div>
                            <h1 className="font-bold text-slate-gray">2500 mAh Apple Watch</h1>
                            <p className="text-center text-slate-gray">x1</p>
                        </div>
                        <img src={AppleWatch} 
                        alt="applewatch" 
                        width={50}
                        />
                        <h1 className="font-semibold text-thick-orange">Ksh 3500</h1>
                    </div>
                    <div className="flex justify-center gap-20  max-xl:gap-10 mt-6 border-b mx-10">
                        <div>
                            <h1 className="font-bold text-slate-gray">2500 mAh Apple Watch</h1>
                            <p className="text-center text-slate-gray">x1</p>
                        </div>
                        <img src={AppleWatch} 
                        alt="applewatch" 
                        width={50}
                        />
                        <h1 className="font-semibold text-thick-orange">Ksh 3500</h1>
                    </div>
                    <div className="flex justify-center gap-20  max-xl:gap-10 mt-6 border-b mx-10">
                        <div>
                            <h1 className="font-bold text-slate-gray">2500 mAh Apple Watch</h1>
                            <p className="text-center text-slate-gray">x2</p>
                        </div>
                        <img src={AppleWatch} 
                        alt="applewatch" 
                        width={50}
                        />
                        <h1 className="font-semibold text-thick-orange">Ksh 7000</h1>
                    </div>
                </div>
                <div className="border-2 w-[40%] rounded-md border-thick-orange max-xl:w-full">
                    <h1 className="text-center font-bold mb-10 mt-2">ORDER SUMMARY</h1>
                    <div className="flex justify-center gap-20  max-xl:gap-10 items-center">
                        <h1 className="font-semibold ml-2">Shipping</h1>
                        <ul>
                            {items.map((item, index) => (
                                <li key={index}>
                                    <input 
                                    type="checkbox" 
                                    name={item}
                                    checked={checkedItems[item] || false}
                                    onChange={handleChange}

                                    />
                                    <label htmlFor={item} className="ml-2 font-semibold text-slate-gray">
                                        {item}
                                    </label>
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div className="flex justify-center gap-28 mt-20 font-semibold">
                        <h1 className="text-lg">Total</h1>
                        <h1 className="text-thick-orange text-lg">Ksh 14,500</h1>
                    </div>
                </div>
            </div>
            <div>
                <h2 className="text-xl font-semibold my-5 mx-10 uppercase">Billing and Shipping Details</h2>
                <div className="flex gap-[10%] mx-10 max-md:flex-col">
                    <div className="w-[50%] max-md:w-full">
                        <BillingForm route={"/api/mycart/billing/"} />
                    </div>
                    <div className="w-[40%] border rounded-md mt-8 max-md:w-full">
                        <h1 className="text-center font-bold mb-6 mt-2">PAYMENT</h1>
                    </div>
                </div>
            </div>
            <div className="flex justify-center mt-10 ">
                <button type="submit" className="border px-16 py-2 rounded-md bg-thick-orange font-bold text-white">
                    Place Order(ksh 14,500)
                </button>
            </div>
        </section>
    )
}

export default MyCart
