import { useEffect, useRef, useState } from "react";
import PhoneCard from "../components/PhoneCard";
import { LeftArrow, RightArrow } from "../utils";
import api from "../api";

const LatestProducts = () => {
  const scrollContainerRef = useRef(null);
  const [productList, setProductList] = useState([])
  
  useEffect(() => {
    const fetchProductList = async () => {
      try {
        const response = await api.get('api/products/');
        const data = response.data;
        setProductList(data);
        console.log(data)
      } catch (error) {
        console.error('Error fetching product list', error)
      }
    };
    fetchProductList()
  }, []);

  const scrollLeft = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({
        left: -202,
        behavior: 'smooth',
      });
    }
  };

  const scrollRight = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({
        left: 202,
        behavior: 'smooth',
      });
    }
  };

  return (
    <section className="relative ">
      <div className="flex mx-10 pt-10 pb-10 max-sm:pt-8">
        <h1 className="text-[28px] font-medium">
          Latest <span className="text-thick-orange">Products</span>
        </h1>
      </div>
      <div className="relative mx-10">
        <div
          ref={scrollContainerRef}
          className="flex space-x-8 overflow-x-scroll scrollbar-hide whitespace-nowrap"
        >
          {productList.map((product) => (
            <PhoneCard
              key={product.id}
              id = {product.id}
              name={product.name}
              image={`http://localhost:8000${product.image}`}
              price={product.price}
              brand={product.brand}
              discount={product.discount}
              className=""
            />
          ))}
        </div>
        <div
          onClick={scrollLeft}
          className="border absolute -left-7 top-1/2 transform 
          -translate-y-1/2 z-10 text-black p-2 rounded-full 
          shadow-md flex justify-center items-center cursor-pointer"
        >
          <img src={LeftArrow} 
          alt="Scroll Left" 
          width={20} />
        </div>
        <div
          onClick={scrollRight}
          className="border absolute -right-10 top-1/2 transform
          -translate-y-1/2 z-10 text-black p-2 rounded-full
          shadow-md flex justify-center items-center cursor-pointer"
        >
          <img src={RightArrow} 
          alt="Scroll Right" 
          width={20} />
        </div>
      </div>
    </section>
  );
};

export default LatestProducts;