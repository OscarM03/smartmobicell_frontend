import PropTypes from 'prop-types';
import { Cart } from "../utils";

const PhoneCard = ({ id, brand, image, name, price, discount }) => {
    const section = 'products';
    return (
        <div
            className="flex flex-col p-2 gap-1 rounded-md
            hover:border border-thick-orange relative group flex-shrink-0"
            style={{ width: '170px' }}>
            <a href={`/${section}/${id}`}>
                <div className="flex justify-center items-center h-[180px]">
                    <img src={image}
                        alt={name}
                        width={300} 
                        height={300}
                        className="w-full h-auto" />
                </div>
            </a>
            <div
                className="absolute rounded-full bg-thick-orange right-4 top-4 opacity-0 
                group-hover:opacity-100 transition-opacity duration-300"
            >
                <img src={Cart} 
                    alt="cart" 
                    width={40} 
                    height={40} 
                    className="p-2" />
            </div>
            <div className="absolute bg-thick-orange w-10 flex justify-center left-0
                rounded-tl-md rounded-br-lg top-0">
                <p className=" font-medium text-white">-{discount}%</p>
            </div>
            <p className="text-slate-gray">{brand}</p>
            <a href={`/${section}/${id}`}>
                <h1 className="text-lg  hover:text-lighter-yellow font-medium overflow-hidden text-ellipsis">
                    {name}
                </h1>
            </a>
            <h3 className=" text-thick-orange text-md font-semibold whitespace-normal font-montserrat">
                Ksh {price}
            </h3>
        </div>
    );
};

PhoneCard.propTypes = {
    id: PropTypes.string.isRequired,
    brand: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    price: PropTypes.string.isRequired,
    discount: PropTypes.number.isRequired,
};

export default PhoneCard;

