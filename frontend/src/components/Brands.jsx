import PhoneBoxes from "./PhoneBoxes"
import { LatestProductsList } from "../constants"

const Brands = ({logo, name}) => {
    return (
        <div>
            <div className="flex justify-center items-center my-10">
                <div className="flex justify-center items-center bg-white
                border-2 rounded-lg px-8 border-thick-orange">
                    <img src={logo}
                            alt={name}
                            
                            />
                    <h1 className="text-2xl font-poppins font-bold">{name}</h1>
                </div>
            </div>
            < PhoneBoxes LatestProductsList={LatestProductsList}/>
        </div>
    )
}

export default Brands
