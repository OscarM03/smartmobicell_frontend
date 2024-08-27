import { useState } from "react"


const QuantitySelector = () => {
    const [quantity, setQuantity] = useState(1);

    const increment = () => {
        setQuantity(prevQuantity => prevQuantity + 1);
    }

    const decrement = () => {
        setQuantity(prevQuantity => (prevQuantity > 1 ? prevQuantity - 1 : 1))
    }

    return (
        <div>
            <button className="font-bold py-2 px-[19px] rounded text-lg
            bg-thick-orange text-white"
            onClick={decrement}
            >
                -
            </button>
            <span className="text-xl px-4 bg-display-bg py-2">{quantity}</span>
            <button className=" font-bold py-2 px-4 rounded text-lg
            bg-thick-orange text-white"
            onClick={increment}
            >
                +
            </button>
        </div>
    )
}

export default QuantitySelector
