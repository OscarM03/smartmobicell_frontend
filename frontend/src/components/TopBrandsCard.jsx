import PropTypes from 'prop-types';
import { Cart } from "../utils";

const TopBrandsCard = ({ id, image, name, discount, price }) => {
    return (
        <div
            className="flex p-2 gap-1 rounded-md relative group flex-shrink-0 border">
            <div className="flex justify-center items-center">
                <a href={`/products/${id}`}>
                    <img src={image}
                        alt={name}
                        width={150}
                        className="" />
                </a>
            </div>
            <div className="flex flex-col items-center justify-center">
                <div
                    className="absolute rounded-full bg-thick-orange right-4 top-4 opacity-0 
                    group-hover:opacity-100 transition-opacity duration-300">
                    <img src={Cart}
                        alt="cart"
                        width={40}
                        height={40}
                        className="p-2" />
                </div>
                <div
                    className="absolute bg-thick-orange w-10 flex justify-center left-0
                    top-0 rounded-tl-md rounded-br-lg">
                    <p className=" font-medium text-white">-{discount}%</p>
                </div>
                <a href={`/products/${id}`}>
                    <h1 className="text-xl hover:text-lighter-yellow font-medium overflow-hidden text-ellipsis">
                        {name}
                    </h1>
                </a>
                <h3 className="text-thick-orange text-md font-semibold whitespace-normal font-montserrat">
                    Ksh {price}
                </h3>
            </div>
        </div>
    )
}

TopBrandsCard.propTypes = {
    image: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    discount: PropTypes.number.isRequired,
    price: PropTypes.string.isRequired,
};

export default TopBrandsCard;

