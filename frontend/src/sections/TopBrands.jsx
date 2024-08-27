import { IphoneLogo, SamsungLogo } from "../utils";
import { useState, useEffect } from "react";
import TopBrandsCard from "../components/TopBrandsCard";
import api from "../api";

const TopBrands = () => {
    const [columns, setColumns] = useState(3);
    const [appleProducts, setAppleProducts] = useState([]);
    const [samsungProducts, setSamsungProducts] = useState([]);

    useEffect(() => {
        const fetchAppleProducts = async () => {
            try {
                const response = await api.get('api/products/', {
                    params: {q: 'Apple'}
                });
                const data = response.data;
                setAppleProducts(data)

            } catch (error) {
            console.error('Error fetching product list', error);
            }
        };

        const fetchSamsungProducts = async () => {
            try {
                const response = await api.get('api/products/', {
                    params: { q: 'samsung' }
                });
                setSamsungProducts(response.data);
            } catch (error) {
                console.error('Error fetching Samsung products:', error);
            }
        };

        fetchAppleProducts();
        fetchSamsungProducts();
}, []);
    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth < 750) {
                setColumns(1);
            } else if (window.innerWidth < 1024) {
                setColumns(2);
            } else {
                setColumns(3)
            }
        };

        window.addEventListener('resize', handleResize);
        handleResize()

        return(() => {
            window.removeEventListener('resize', handleResize)
        });
    }, [setColumns])

    const getGridColumnsClass = () => {
        switch (columns) {
            case 1:
                return "grid-cols";
            case 2:
                return "grid-cols-2"
            default:
                return "grid-cols-3";
        }
    };
    return (
    <section>
        <h1 className="text-[28px] ml-10 font-medium mb-4">
            Top <span className="text-thick-orange">Brands</span>
        </h1>
        <div>
            <div className="flex justify-center items-center my-10">
                <div className="flex justify-center items-center bg-white
                border-2 rounded-lg px-8 border-thick-orange">
                    <img src={IphoneLogo}
                            alt="Apple"
                            width={50}
                            />
                    <h1 className="text-2xl font-poppins font-bold">Apple</h1>
                </div>
            </div>
            <div className={`grid ${getGridColumnsClass()} max-xl:gap-4 mx-10 gap-4 max-md:gap-6 mt-6`}>
                {appleProducts.slice(0, columns + columns).map((product) => (
                    <TopBrandsCard
                    key={product.id}
                    id={product.id}
                    name={product.name} 
                    image={`http://localhost:8000${product.image}`}
                    price={product.price}
                    discount={product.discount}
                    />
            ))}
            </div>
        </div>

        <div>
            <div className="flex justify-center items-center mt-16 mb-12">
                <div className="flex justify-center items-center bg-white
                border-2 rounded-lg py-1 border-thick-orange">
                    <img src={SamsungLogo}
                            alt="Samsung"
                            width={200}
                            />
                </div>
            </div>
            <div className={`grid ${getGridColumnsClass()} max-xl:gap-4 mx-10 gap-4 max-md:gap-6 mt-6`}>
                {samsungProducts.slice(0, columns + columns).map((product) => (
                    <TopBrandsCard
                    key={product.id}
                    id={product.id}
                    name={product.name} 
                    image={`http://localhost:8000${product.image}`}
                    price={product.price}
                    discount={product.discount}
                    />
            ))}
            </div>
        </div>
    </section>
    );
};

export default TopBrands;
