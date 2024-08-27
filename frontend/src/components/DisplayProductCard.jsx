
import PropTypes from 'prop-types';

const DisplayProductCard = ({ id, brand, name, price, image, discount}) => {
    return (
        <div className="flex items-center justify-between p-2 max-lg:p-2 relative 
        rounded-md border border-thick-orange max-custom-550:justify-center">
            <div className="text-xl font-semibold">
                <div>
                    <h1 className="text-xl font-semibold pt-2 text-slate-gray max-lg:pt-0">{brand}</h1>
                </div>
                <div>
                    <h1 className="pt-6 font-bold font-roboto max-lg:pt-2">{name}</h1>
                </div>
                <div>
                    <h1 className="text-thick-orange font-bold text-[17px] font-montserrat">Ksh {price}</h1>
                </div>
            </div>
            <div>
                <a href={`/displayproducts/${id}`}><img src={image} alt="image" width={200} className="" /></a>
            </div>
            <div className="absolute bg-thick-orange w-10 flex justify-center right-0 top-0 rounded-tl-md rounded-br-lg">
                <p className="font-medium text-white">New</p>
            </div>
            <div className="absolute bg-thick-orange w-10 flex justify-center right-0 top-8 rounded-tl-md rounded-br-lg">
                <p className="font-medium text-white">-{discount}%</p>
            </div>
        </div>
    );
};


DisplayProductCard.propTypes = {
    id: PropTypes.string.isRequired,
    brand: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    price: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    discount: PropTypes.string.isRequired,
    w: PropTypes.string.isRequired,
};

// ImmediateProductCard.defaultProps = {
//     discount: '0',
//     w: '100', 
// };

export default  DisplayProductCard;
