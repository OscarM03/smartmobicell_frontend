import { useEffect, useState } from "react"
import LaptopsCard from "../components/LaptopsCard";
import api from "../api";


const Laptops = () => {
    const [columns, setColumns] = useState(3);
    const [laptopsList, setLaptopsList] = useState([]);

    useEffect(() => {
        const fetchLaptopList = async () => {
            try {
                const response = await api.get('api/laptops/')
                const data = response.data
                setLaptopsList(data)
            } catch(error) {
                console.error('The laptop list cannot be loaded', error)
            }
        }
        fetchLaptopList();
    }, []);

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth < 750) {
                setColumns(1);
            } else if (window.innerWidth < 1024) {
                setColumns(2);
            // } else if (window.innerWidth < 1200) {
            //     setColumns(3);
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
                return "grid-cols-2";
            // case 3:
            //     return "grid-cols-3"
            default:
                return "grid-cols-3";
        }
    };
    return (
        <section>
            <div className="mx-10">
                <a href="/"><h1 className="text-[28px] text-thick-orange
                font-poppins font-medium mb-4">
                    Laptops</h1></a>
            </div>
            <div className={`grid ${getGridColumnsClass()} gap-4 mx-10 mb-10`}>
                {laptopsList.slice(0, columns + columns).map((item) => (
                    <LaptopsCard 
                    key={item.id}
                    id = {item.id}
                    name={item.name}
                    image={`http://localhost:8000${item.image}`}
                    elements={item.elements}
                    storage={item.storage}
                    added_info={item.added_info}
                    price={item.price}
                    discount={item.discount}
                    />
                ))}
            </div>
        </section>
    )
}

export default Laptops
