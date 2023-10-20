
import { DarkLightMode } from "./buttons/DarkLightMode";
import { LogoButton } from "./buttons/LogoButton";


const NavBar = () => {
  return (
    <nav className="fixed w-screen h-20 flex justify-between items-start">
      <LogoButton/>
      <DarkLightMode/>
    </nav>
  );
};

export { NavBar };
