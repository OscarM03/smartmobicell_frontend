import { useState, useEffect } from "react";
import DisplayProductCard from "../components/DisplayProductCard";
import api from "../api";

const DisplayProducts = () => {
    const [columns, setColumns] = useState(4);
    const [displayProducts, setDisplayProducts] = useState([]);

    useEffect(() => {
        const fetchDisplayProducts = async () => {
            try {
                const response = api.get('api/displayproducts/');
                const data = (await response).data;
                setDisplayProducts(data);
            } catch(error) {
                console.error('Error fetching product list', error)
            }
        };
        fetchDisplayProducts()
    }, []);

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth < 550) {
                setColumns(1);
            } else if (window.innerWidth < 766) {
                setColumns(2);
            } else if (window.innerWidth < 1200) {
                setColumns(3);
            }else {
                setColumns(4);
            }
        };
        window.addEventListener('resize', handleResize);

        handleResize()

        return (() => {
            window.removeEventListener('resize', handleResize);
        });
    }, [setColumns])

    const getGridColumnsClass = () => {
        switch (columns) {
            case 1:
                return "grid-cols";
            case 2:
                return "grid-cols-2";
            case 3:
                return "grid-cols-3";
            default:
                return "grid-cols-4";
        }
    };

    return (
        <section className={`grid ${getGridColumnsClass()} mt-[130px] max-md:mt-[30px] mx-10 gap-6`}>
                {displayProducts.slice(0, columns).map((item) => (
                    <DisplayProductCard
                        key={item.id}
                        id = {item.id}
                        brand={item.brand}
                        name={item.name}
                        image={`http://localhost:8000${item.image}`}
                        discount={item.discount}
                        price={item.price}
                    />
                ))}
        </section>
    )
}

export default DisplayProducts;
