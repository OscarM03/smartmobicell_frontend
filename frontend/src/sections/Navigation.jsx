import { navLinks } from "../constants"
import { Logo } from "../utils"
import Button from "../components/Button"
import { Hamburger } from "../utils"
import { useState } from "react"
import { useEffect } from "react"

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);

  useEffect (() => {
    const handleResize = () => {
      setScreenWidth(window.innerWidth);
      if(screenWidth > 1280 && isMenuOpen) {
        setIsMenuOpen(false);
      }
    };
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    }
  }, [isMenuOpen, screenWidth])

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  }

  return (
    
    <header className="w-full z-10 fixed bg-faded_blue">
      <nav className="flex justify-between items-center  py-2">
        <a href="/">
          <img 
          src={Logo} 
          alt="Logo" 
          width={200}
          className="ml-20 max-lg:w-[160px] max-sm:ml-6"
          />
        </a>
        
        <ul className="flex ml-[110px] items-center flex-1 gap-10 max-xl:hidden">
          {navLinks.map((item) => (
            <li key={item.label}>
              <a href={item.href}
              className="font-montserrat text-md text-slate-gray
              hover:text-coral-red"> 
                {item.label}
              </a>
            </li>
          ))}
        </ul>
        
        <div className="flex justify-end items-center flex-1 gap-12 mr-20
        max-xl:hidden">
          <a href="/">
          <h2 className="font-montserrat text-md text-slate-gray">Log in</h2>
          </a>
          <Button 
          label="Sign in" 
          href="/"/>
        </div>
        <div className="xl:hidden max-xl:block mr-16 max-sm:mr-10">
          <img src={ Hamburger} alt="Menu"
          width={30}
          height={30}
          onClick={toggleMenu}
          />
        </div>
      </nav>

      {isMenuOpen && (
        <div className="bg-faded_blue shadow-lg mx-20 mt-16 flex-1
        flex flex-col items-center justify-center">
          <ul className="flex flex-col gap-10">
          {navLinks.map((item) => (
            <li key={item.label} className="flex items-center justify-center border-b">
              <a href={item.href}
              className="font-montserrat text-lg text-slate-gray
              hover:text-coral-red "> 
                {item.label}
              </a>
            </li>
          ))}
        </ul>
        <div className="flex justify-end items-center flex-1 gap-16
        py-8 max-sm:gap-4">
          <a href="/">
          <h2 className="font-montserrat text-lg text-slate-gray">Log in</h2>
          </a>
          <Button 
          label="Sign in" 
          href="/"/>
        </div>
      </div>
      
      )}
    </header>
  )
}

export default Navigation
