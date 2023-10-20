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

 const icons = [
    {
      subtitle: "Html5",
      category: "Skills",
      component: <HtmlIcon />,
    },
    {
      subtitle: "CSS",
      category: "Skills",
      component: <CssIcon />,
    },
    {
      subtitle: "JavaScript",
      category: "Skills",
      component: <JsIcon />,
    },
    {
      subtitle: "Vue3",
      category: "Skills",
      component: <VueIcon />,
    },
    {
      subtitle: "Firebase",
      category: "Skills",
      component: <FirebaseIcon />,
    },
    {
      subtitle: "Tailwind",
      category: "Skills",
      component: <TailwindIcon />,
    },
    {
      subtitle: "React",
      category: "Skills",
      component: <ReactIcon />,
    },
  ];

const TechCarousel = () => {
  const AutoplaySlider = withAutoplay(AwesomeSlider);
 
  return (
    <div
      className="w-56 h-[250px] rounded-lg relative flex justify-center items-center animate-fade-right animate-duration-1000 animate-delay-[1200ms] "
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
          {
            icons.map((item)=>{
              return (
                <div key={item.subtitle} className="h-full w-full flex flex-col justify-center items-center rounded-lg dark:bg-gradient-to-br dark:from-neutral-300 dark:via-indigo-400 dark:to-indigo-700 bg-gradient-to-br from-indigo-700 via-indigo-500 to-stone-950 ">
                  {item.component}
                  <h3 className="intro-text-paragraph text-2xl text-transparent bg-clip-text bg-gradient-to-r from-neutral-100 to-neutral-400 dark:from-neutral-950 dark:to-neutral-700">
                    {item.subtitle}
                  </h3>
                </div>
              )

            })
          }
        
      </AutoplaySlider>
    </div>
  );
};

export { TechCarousel };
