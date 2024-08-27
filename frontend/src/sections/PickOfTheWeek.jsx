import { useEffect, useState } from "react";
import api from "../api";

const PickOfTheWeek = () => {
    const [pickedProducts, setPickedProducts] = useState([]);

    useEffect(() => {
        const fetchPickedProducts = async () => {
            try {
                const response = await api.get('api/pickoftheweek/');
                const data = response.data;
                setPickedProducts(data);
            } catch (error) {
                console.error('Error fetching picked product list', error);
            }
        };
        fetchPickedProducts();
    }, []);

    const [firstProduct, secondProduct] = pickedProducts;

    return (
        <section>
            <div className="mx-10 mt-2 pb-3">
                <h1 className="text-[28px] font-poppins font-medium">
                    Pick Of The <span className="text-thick-orange">Week</span>
                </h1>
            </div>
            <div className="flex justify-center items-center gap-6 mx-10 mb-10 max-md:flex-col">
                {firstProduct && (
                    <div className="border border-thick-orange rounded-md flex justify-center items-center gap-10 font-medium p-8 h-[300px]">
                        <div>
                            <a href={`/pickoftheweek/${firstProduct.id}`}>
                                <img 
                                    src={`http://localhost:8000${firstProduct.image}`}
                                    alt={firstProduct.name} 
                                    width={200}
                                />
                            </a>
                        </div>
                        <div>
                            <a href={`/pickoftheweek/${firstProduct.id}`}>
                                <h1 className="text-2xl text-thick-orange pb-2 font-bold">
                                    {firstProduct.name}
                                </h1>
                            </a>
                            <p className="text-xl pb-2">{firstProduct.major_info}</p>
                            <p className="text-lg pb-1">{firstProduct.more_info}</p>
                            <p>{firstProduct.added_info}</p>
                            <p className="text-thick-orange text-lg font-bold">{firstProduct.price}</p>
                        </div>
                    </div>
                )}
                {secondProduct && (
                    <div className="border border-thick-orange rounded-md flex justify-center items-center gap-10 font-medium p-6 h-[300px]">
                        <div>
                            <a href={`/pickoftheweek/${firstProduct.id}`}>
                            <img 
                                src={`http://localhost:8000${secondProduct.image}`}
                                alt={secondProduct.name} 
                                width={200}
                            />
                            </a>
                        </div>
                        <div>
                            <a href={`/pickoftheweek/${firstProduct.id}`}>
                                <h1 className="text-2xl text-thick-orange pb-2 font-bold">
                                    {secondProduct.name}
                                </h1>
                            </a>
                            <p className="text-xl pb-2">{secondProduct.major_info}</p>
                            <p className="text-lg pb-1">{secondProduct.more_info}</p>
                            <p>{secondProduct.added_info}</p>
                            <p className="text-thick-orange text-lg font-bold">{secondProduct.price}</p>
                        </div>
                    </div>
                )}
            </div>
        </section>
    );
}

export default PickOfTheWeek;
