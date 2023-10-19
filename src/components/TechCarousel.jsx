import { CssIcon } from "./icons/CssIcon";
import { JsIcon } from "./icons/JsIcon";
import { HtmlIcon } from "./icons/HtmlIcon";
import { VueIcon } from "./icons/VueIcon";
import { TailwindIcon } from "./icons/TailwindIcon";
import { FirebaseIcon } from "./icons/FirebaseIcon";
import { ReactIcon } from "./icons/ReactIcon";
import AwesomeSlider from "react-awesome-slider";
import withAutoplay from "react-awesome-slider/dist/autoplay";
import "react-awesome-slider/dist/styles.css";
import "react-awesome-slider/dist/custom-animations/cube-animation.css";
const TechCarousel = () => {
  const AutoplaySlider = withAutoplay(AwesomeSlider);

  return (
    <div
      className="w-56 h-[250px] rounded-lg relative flex justify-center items-center animate-fade-right animate-duration-1000 animate-delay-[600ms] "
      style={{ color: "white" }}
    >
      <AutoplaySlider
        animation="cubeAnimation"
        buttons={false}
        fillParent={true}
        play={true}
        cancelOnInteraction={true} // should stop playing on user interaction
        interval={2500}
        bullets={false}
      >
        <div className="h-full w-full flex flex-col justify-center items-center rounded-lg dark:bg-gradient-to-br dark:from-neutral-300 dark:via-indigo-400 dark:to-indigo-700 bg-gradient-to-br from-indigo-700 via-indigo-500 to-stone-950 ">
          <HtmlIcon />
        </div>
        <div className="h-full w-full flex flex-col justify-center items-center rounded-lg dark:bg-gradient-to-br dark:from-neutral-300 dark:via-indigo-400 dark:to-indigo-700 bg-gradient-to-br from-indigo-700 via-indigo-500 to-stone-950">
          <CssIcon />
        </div>
        <div className="h-full w-full flex flex-col  justify-center items-center rounded-lg dark:bg-gradient-to-br dark:from-neutral-300 dark:via-indigo-400 dark:to-indigo-700 bg-gradient-to-br from-indigo-700 via-indigo-500 to-stone-950">
          <JsIcon />
        </div>
        <div className="h-full w-full flex flex-col justify-center items-center rounded-lg dark:bg-gradient-to-br dark:from-neutral-300 dark:via-indigo-400 dark:to-indigo-700 bg-gradient-to-br from-indigo-700 via-indigo-500 to-stone-950">
          <VueIcon/>
        </div>
        <div className="h-full w-full flex flex-col justify-center items-center rounded-lg dark:bg-gradient-to-br dark:from-neutral-300 dark:via-indigo-400 dark:to-indigo-700 bg-gradient-to-br from-indigo-700 via-indigo-500 to-stone-950">
          <FirebaseIcon/>
        </div>
        <div className="h-full w-full flex flex-col justify-center items-center rounded-lg dark:bg-gradient-to-br dark:from-neutral-300 dark:via-indigo-400 dark:to-indigo-700 bg-gradient-to-br from-indigo-700 via-indigo-500 to-stone-950">
          <ReactIcon/>
        </div>
        <div className="h-full w-full flex flex-col justify-center items-center rounded-lg dark:bg-gradient-to-br dark:from-neutral-300 dark:via-indigo-400 dark:to-indigo-700 bg-gradient-to-br from-indigo-700 via-indigo-500 to-stone-950">
          <TailwindIcon/>
        </div>
      </AutoplaySlider>
    </div>
  );
};

export { TechCarousel };
