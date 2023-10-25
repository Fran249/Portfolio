
import { LogoDark } from "./Logos/LogoDark";
import { LogoLight } from "./Logos/LogoLight";
const LogoButton = ({theme}) => {

  return (
    <a href="#inicio">
      {theme === "light" ? <LogoLight /> : <LogoDark />}
    </a>
  );
};

export { LogoButton };
