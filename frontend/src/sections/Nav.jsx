
import { Call, Cart, DownArrow, Logo, Profile } from "../utils";
import { Hamburger } from "../utils";
import { useEffect, useState } from "react";
import { PhoneTypes } from "../constants";
import { useLocation } from 'react-router-dom'

const Nav = () => {
	const [isMenuOpen, setIsMenuOpen] = useState(false);
	const [isCategoryOpen, setIsCategoryOpen] = useState(false);
	const [screenWidth, setScreenWidth] = useState(window.innerWidth);
    const location = useLocation();

	useEffect(() => {
		const handleResize = () => {
		setScreenWidth(window.innerWidth);
		if (screenWidth > 640 && (isMenuOpen || isCategoryOpen)) {
			setIsMenuOpen(false);
			setIsCategoryOpen(false);
		}
		};
		window.addEventListener("resize", handleResize);
		return () => {
			window.removeEventListener("resize", handleResize);
		};
	}, [isMenuOpen, screenWidth, isCategoryOpen]);

	const toggleMenu = () => {
		setIsMenuOpen(!isMenuOpen);
	};

	const toggleCategory = () => {
		setIsCategoryOpen(!isCategoryOpen);
	};

	return (
		<header>
            <div className="bg-display-bg flex justify-between px-10 py-1 font-bold">
                <p className="max-md:hidden">Buy top-rated phones and other accesories from Smart Mobicell</p>
                <p>Amazing Discounts</p>
                <p className="">Welcome</p>
            </div>
            <div className="flex justify-between items-center px-10 max-md:px-6 py-3 pt-4">
                <div>
                    <a href="/">
                        <img
                            src={Logo}
                            alt="Logo"
                            width={170}
                            className="max-lg:w-[160px]"
                        />
                    </a>
                </div>
                <div className="max-sm:hidden">
                    <form action="/all" className="w-full flex items-center">
                        <input
                            type="search"
                            name="q"
                            placeholder="What are you looking for..."
                            className="border-2 p-2 flex-grow max-w-[600px] rounded-l-full text-sm
                            border-thick-orange min-w-[480px] pl-5 max-lg:min-w-[300px] max-md:min-w-[200px]"
                        />
                        <button
                            type="submit"
                            className=" border-thick-orange py-2.5 px-4 w-24 text-white text-sm font-semibold
                            uppercase font-poppins bg-thick-orange rounded-r-full">
                                Search
                        </button>
                    </form>
                </div>
                <div className="flex justify-center items-center gap-2
                font-semibold text-md max-custom-950:gap-6 max-md:gap-4 max-sm:gap-7">
                    <a href="/profile" className="flex justify-center items-center gap-3">
                        <img 
                            src={Profile} 
                            alt="profile" 
                            width={30} 
                            height={30}
                            className="max-custom-950:w-[35px] max-md:w-[30px] max-sm:w-[38px]"
                        />
                        <h1 className=" pr-4 hover:text-thick-orange max-custom-950:hidden">
                            My Account
                        </h1>
                    </a>

                    <a href="/mycart" className="flex justify-center items-center gap-3">
                        <img 
                            src={Cart} 
                            alt="shopping cart" 
                            width={30} 
                            height={30} 
                            className="max-custom-950:w-[35px] max-md:w-[30px] max-sm:w-[38px]"
                        />
                        <h1 className=" hover:text-thick-orange max-custom-950:hidden">
                            My Cart
                        </h1>
                    </a>
                </div>
            </div>
            <div className="px-10 max-md:px-6 flex justify-between items-center pt-2">
                {location.pathname === '/' && (
                    <div className="flex justify-center items-center gap-2 w-[20%]
                    border py-1 text-white bg-thick-orange h-[35px] max-md:w-[27%] max-sm:w-[40%]">
                        <img
                            src={Hamburger}
                            alt="Menu"
                            width={20}
                            height={20}
                            onClick={toggleCategory}
                        />
                        <h1
                            className="text-sm font-semibold uppercase font-poppins"
                            onClick={toggleCategory}
                            >
                            Category
                        </h1>
                        <a href="#top">
                            <img
                                src={DownArrow}
                                alt="downarrow"
                                width={24}
                                onClick={toggleCategory}
                            />
                        </a>
                    </div>
                )}
                {/* <div className="flex gap-3 text-slate-gray max-lg:hidden">
                    <h1 className="font-bold">Frequently searched: </h1>
                    <a href="" className="hover:text-thick-orange">Iphone</a>
                    <a href="" className="hover:text-thick-orange">Samsung ultra24</a>
                    <a href="" className="hover:text-thick-orange">Smart Watch</a>
                    <a href="" className="hover:text-thick-orange max-xl:hidden">Macbook</a>
                    <a href="" className="hover:text-thick-orange">Laptops</a>
                </div> */}
                <div className="flex justify-center items-center gap-1 max-sm:hidden">
                    <img src={Call} 
                    alt="call" 
                    width={50}
                    />
                    <div className="font-semibold">
                        <h1>Contact us:</h1>
                        <h1 className="text-thick-orange">+254 112345678</h1>
                    </div>
                </div>
                <div className="sm:hidden max-lg:block flex justify-end">
                    <img
                        src={Hamburger}
                        alt="Menu"
                        width={30}
                        height={30}
                        onClick={toggleMenu}
                    />
                </div>
            </div>
            {isMenuOpen && (
                <div className="flex flex-col items-center">
                    <div className="pt-8">
                        <form className="w-full flex items-center">
                            <input
                                type="search"
                                placeholder="What are you looking for..."
                                className="border-2 p-1.5 flex-grow max-w-[400px] rounded-l-full text-sm
                                border-thick-orange pl-5 min-w-[220px]"
                            />
                            <button
                                type="submit"
                                className=" border-thick-orange py-2 px-4 w-24 text-white text-sm font-semibold
                                uppercase font-poppins bg-thick-orange rounded-r-full">
                                    Search
                            </button>
                        </form>
                    </div>
                    <div className="flex justify-center items-center gap-1 pt-4">
                        <img src={Call} 
                        alt="call" 
                        width={50}
                        />
                        <div className="font-medium">
                            <h1>Contact us:</h1>
                            <h1 className="text-thick-orange">+254 112345678</h1>
                        </div>
                    </div>
                </div>
            )}
            {isCategoryOpen && (
            <div className="shadow-lg w-[35%] rounded-md flex justify-center
            md:hidden absolute bg-display-bg mt-2 max-sm:ml-6">
                <ul className="pt-2">
                    {PhoneTypes.map((type) => (
                        <a href={`/all?q=${encodeURIComponent(type)}`} key={type}>
                            <li className="text-lg font-poppins font-semibold pb-1">
                            {type}
                        </li>
                        </a>
                    ))}
                </ul>
            </div>
)}

        </header>
	);
};

export default Nav;
