import { useEffect, useState } from "react"
import Button from "../components/Button"
import api from "../api";


const SpecialOffer = () => {
    const [offerProduct, setOfferProduct] = useState(null);
    const section = 'offerproduct';

    useEffect(() => {
        const fetchOfferProduct = async () => {
            try {
                const response = await api.get('api/offerproduct/');
                const data = response.data;
                setOfferProduct(data);
            } catch(error) {
                console.error('Fetching offer list products error:', error)
            }
        };
        fetchOfferProduct()
    }, []);
    if (!offerProduct) {
        return <div>...</div>
    }
    return (
        <section className="my-10">
            <h1 className="text-[28px] ml-10 font-poppins
            font-medium">Special <span className="text-thick-orange">Offer</span> - {offerProduct.name}</h1>
            <div className="flex items-center justify-center gap-[150px] bg-display-bg mx-10
            rounded-lg shadow-md font-medium max-md:flex-col max-lg:gap-[100px]">

                <div className="flex flex-col items-center max-lg:items-start
                max-md:items-center">
                    <h1 className="text-[40px] text-thick-orange font-bold">
                        Exclusive deal:
                    </h1>
                    <h1 className="text-xl pt-3">
                        Save big on top-rated phones
                    </h1>
                    <h1 className="text-xl pt-2">
                        only while stocks last!
                    </h1>
                    <p className="pt-1 pb-4 text-slate-gray">{offerProduct.period}</p>
                    <Button label="Order Now"
                    href="/mycart"
                    />
                </div>
                <div className="flex  flex-col items-center">
                    <a href={`/offerproduct/${offerProduct.id}`}>
                    <img src={`http://localhost:8000${offerProduct.image}`}
                        alt=""
                        width={300}
                        className=""
                        />
                    </a>
                    <div className="flex gap-5 font-medium max-lg:gap-3 max-md:gap-5
                    ">
                        <div className="flex  flex-col items-center ">
                                <p className="">{offerProduct.description}</p>
                                <p className=" text-thick-orange">Ksh {offerProduct.price}</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
)
}

export default SpecialOffer
