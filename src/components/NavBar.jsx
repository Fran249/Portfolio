import { DarkLightMode } from "./buttons/DarkLightMode";
import { LogoButton } from "./buttons/LogoButton";
import { useState, useEffect } from "react";

const NavBar = () => {
  const [scrolling, setScrolling] = useState(false);
  useEffect(() => {

    const onScroll = () => {
      if (window.scrollY > 0) {
        setScrolling(true);
      }else if(window.scrollY === 0){
        setScrolling(false);
      }
    }
    
    window.addEventListener("scroll", onScroll);

    
  
    
  },[]);

  return (
    <nav className={"fixed z-40 top-0 left-0 w-screen h-16 flex justify-between items-center " + (scrolling ? 'backdrop-blur-2xl' : ' backdrop-blur-0')}>
      <DarkLightMode />
    </nav>
  );
};

export { NavBar };
