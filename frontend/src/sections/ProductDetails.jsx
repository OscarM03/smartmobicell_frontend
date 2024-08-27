
import QuantitySelector from "../components/QuantitySelector"
import { Whatsapp } from "../utils"
import { useParams } from 'react-router-dom'
import { useState, useEffect } from "react"
import api from "../api"


const ProductDetails = () => {
    const {section, id} = useParams();
    const [product, setProduct] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchProduct = async () => {
            try {
                console.log(section)
                console.log(id)
                const response = await api.get(`api/${section}/${id}/`)
                const data = response.data
                console.log(data)
                
                setProduct(data);
            } catch(error) {
                setError(error.message);
            } finally {
                setLoading(false);
            }
        };
        fetchProduct()
    }, [section, id])

    if (loading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>Error: {error}</div>;
    }

    if (!product) {
        return <div>No product found</div>;
    }
    const { features } = product;
    return (
        <section>
            <div className="bg-display-bg mt-1">
                <h1 className="p-2"><a href="/">Home</a></h1>
            </div>
            <div className="mx-10 flex mt-10 gap-24 max-lg:flex-col">
                <div className="border px-20 pt-10 flex flex-col justify-center items-center rounded-md">
                    <div className="pb-4">
                        <img src={product.image} 
                        alt="" 
                        width={400}
                        className="max-sm:w-[400px]"
                        />
                    </div>
                    <div className="flex gap-2 pb-4">
                        <div className="border px-8 py-2 rounded-md">
                            <img src={product.thumbnail_1} 
                            alt="" 
                            width={100}
                            className="max-sm:w-[200]"
                            />
                        </div>
                        <div className="border px-8 py-2 rounded-md">
                            <img src={product.thumbnail_2} 
                            alt="" 
                            width={100}
                            />
                        </div>
                        <div className="border px-8 py-2 rounded-md">
                            <img src={product.thumbnail_3} 
                            alt="" 
                            width={100}
                            />
                        </div>
                    </div>
                </div>
                <div className="flex flex-col justify-center items-center">
                    <div>
                        <h1 className="text-4xl pb-4 font-bold">{product.name}</h1>
                        <h1 className="text-3xl text-thick-orange font-bold">Ksh {product.price} 
                            <span className="text-2xl line-through pl-2 font-normal">Ksh {product.original}</span></h1>
                    </div>
                    <div className="pt-4">
                        <h1 className="text-lg font-semibold pb-4">{product.name} key features:</h1>
                        <ul className="list-disc">
                            {features && Object.entries(features).map(([key, value]) => (
                                <li key={key} className="text-slate-gray pb-1">
                                    <span className="font-bold">{key}:</span> {value}
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div className="pt-20  flex gap-16  justify-center">
                        <QuantitySelector />
                        <a href="/mycart">
                        <button className="bg-thick-orange px-4 py-2 font-semibold text-white rounded">
                            Order Now
                        </button>
                        </a>
                    </div>
                    <div className="border mt-[58px] flex flex-col justify-center items-center p-8 rounded-md bg-display-bg">
                        <h1 className="mb-4 text-xl font-bold">Order or Inquire on Whatsapp</h1>
                        <button className="bg-thick-orange px-4 py-2 font-semibold text-white rounded flex gap-2 items-center justify-center">
                            <img src={Whatsapp} 
                            alt="whatsapp" 
                            width={24}
                            />
                            Whatsapp
                        </button>
                    </div>
                </div>
            </div>
            <div className="mt-10 mx-10">
                <h1 className="text-[28px] font-semibold">More <span className="text-thick-orange">Info</span></h1>
                <p className="pt-4 text-slate-gray">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsa hic fuga soluta dignissimos possimus? Enim, laborum voluptate. Minima quas totam quos molestias sapiente molestiae, libero laboriosam, numquam commodi ut iure eveniet recusandae minus laborum! Quos, nulla sit numquam rem harum fuga iste fugiat deleniti perspiciatis obcaecati provident nostrum expedita doloremque aspernatur ullam nam, doloribus adipisci maxime animi, placeat aut nemo explicabo corporis. Et a fugit, esse eum dolor magnam, dolores in asperiores repellat cupiditate id ipsam incidunt dignissimos provident illum laboriosam adipisci at. Rem aperiam natus possimus quo assumenda blanditiis molestias consectetur harum atque, temporibus repellat tempora qui! Minima corporis, doloremque dolore ratione molestiae recusandae voluptas accusamus odit atque molestias ea. Ab corrupti incidunt totam nam molestias quam in numquam repellendus iusto consequuntur ullam, fugit, hic consectetur temporibus exercitationem libero. Officiis officia voluptates quasi? Dolore distinctio, cupiditate, tempora porro omnis, id repellendus vel repellat molestias rem consequatur consectetur iusto. Voluptatem corrupti quisquam eos atque necessitatibus et deserunt distinctio incidunt, quam, iste perspiciatis officiis id libero error aliquam sint, explicabo itaque optio quaerat tempora quis alias. Mollitia esse dolore incidunt. Iusto nostrum consectetur enim minus illo sapiente similique velit eum explicabo natus eligendi delectus hic dolorem tenetur, labore fugiat doloremque. Tenetur!</p>
            </div>
        </section>
    )
}

export default ProductDetails
