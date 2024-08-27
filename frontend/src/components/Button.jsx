const Button = ({label, icon, href}) => {
  return (
    <div>
      <a href={href}>
        <button 
        className={`flex justify-center items-center 
        text-center px-7 py-2 rounded-full text-white 
        bg-thick-orange  text-md  font-montserrat leading-none gap-2`}>
          {label}

          {icon && (
            <img 
            src={icon} 
            alt="icon"
            width={20}
            height={20}
            />
          )}
        </button>
      </a>
    </div>
  )
}

export default Button
