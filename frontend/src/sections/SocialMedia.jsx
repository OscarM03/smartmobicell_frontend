import { SocialMediaLinks } from "../constants";


const SocialMedia = () => {
    return (
        <section className="pt-2">
            <div className="flex  gap-1">
                    {SocialMediaLinks.map((item) => (
                        <div key={item.label} className="flex justify-center items-center">
                            <a href={item.href}>
                                <img src={item.img}
                                alt={item.label}
                                width={40}
                                />
                            </a>
                        </div>
                    ))}
            </div>
        </section>
    )
}

export default SocialMedia
