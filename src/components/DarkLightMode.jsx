import { useEffect, useState } from "react";
import { SunIcon } from "../components/icons/SunIcon";
import { MoonIcon } from "../components/icons/MoonIcon";

const DarkLightMode = () => {


    const [toggle, setToggle] = useState(true);
    const [theme, setTheme] = useState('light');
    
    useEffect(() => {
      if (theme == "dark") {
        document.querySelector("html").classList.add("dark");
      } else {
        document.querySelector("html").classList.remove("dark");
      }
    }, [theme]);
    
    const handleChangeTheme = () => {
      setToggle(!toggle)
      setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
    };
    
    const toggleClass =
      " transform translate-x-[21px] sm:transform sm:translate-x-[24px]";



  return (
    <button className="mt-2 mr-2" onClick={handleChangeTheme}>
      <div className="md:w-14 md:h-7 w-12 h-6 flex items-center shadow-neutral-950 shadow-md bg-purple-900 dark:bg-purple-400 dark:shadow-neutral-100 dark:shadow-md  rounded-full p-1 cursor-pointer">
        {/* Switch */}
        <div
          className={
            " md:w-6 md:h-6 h-5 w-5 rounded-full shadow-md transform duration-300 ease-in-out" +
            (toggle ? null : toggleClass)
          }
        >
          {theme === "dark" ? <SunIcon /> : <MoonIcon />}
        </div>
      </div>
    </button>
  );
};

export default DarkLightMode