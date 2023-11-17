import { VueIcon } from "./icons/VueIcon";
import { FirebaseIcon } from "./icons/FirebaseIcon";
import { JsIcon } from "./icons/JsIcon";
import { CssIcon } from "./icons/CssIcon";
import { GitHubIcon } from "./icons/GitHubIcon";
import { ExternalLinkIcon } from "./icons/ExternalLinkIcon";

const SecondArticle = () => {
  return (
    <article
      className="w-screen h-screen flex justify-between flex-wrap"
      id="proyects"
    >
      <div className="mockup flex justify-center items-center flex-wrap relative w-full md:w-1/2 ">
        <img
          className="rounded-lg w-full md:w-[500px] z-10 -translate-x-20 md:translate-x-40 md:-translate-y-10   object-cover object-center"
          src="./Mobile.webp"
          alt="Web de CXP"
        />
        <img
          className="rounded-lg md:w-[500px] absolute z-5  object-cover object-center"
          src="./WebMockup.webp"
          alt="Web de CXP"
          
        />
      </div>
      <div className="flex w-full md:w-1/2  justify-center items-center">
        <div className=" w-4/5 grid grid-cols-1 place-items-center gap-[25px] backdrop-blur-3xl rounded-lg py-10 border-[1px] border-neutral-100 ">
          <h3 className=" bg-clip-text text-transparent intro-text text-2xl bg-gradient-to-b from-black  to-neutral-800 dark:from-white dark:to-neutral-800">
            CXP Chihuido Exploration
          </h3>
          <p className="text-lg h-24 text-center w-full px-3 md:w-1/2 md:px-0 text-neutral-700 dark:text-neutral-300">
            A modern landing page for a mining company. With Admin Panel to
            add/remove content
          </p>
          <div className="flex justify-center items-center gap-10">
            <a
              href="https://github.com/Fran249/Cxp-Chihuido-Exploration"
              className="hover:translate-y-[-2px] transition-transform active:translate-y-[2px]"
            >
              <GitHubIcon tailwindClass={"w-6 h-6 text-white"} />
            </a>
            <a
              href="https://cxp-resources.com/"
              target="_blank"
              className="hover:translate-y-[-2px] transition-transform active:translate-y-[2px]"
            >
              <ExternalLinkIcon color={"white"} />
            </a>
          </div>
          <div className="flex justify-between items-center w-52 gap">
            <VueIcon color={"white"} width={25} height={25} />
            <FirebaseIcon color={"white"} width={25} height={25} />
            <JsIcon color={"white"} width={25} height={25} />
            <CssIcon color={"white"} width={25} height={25} />
          </div>
        </div>
      </div>
    </article>
  );
};
export { SecondArticle };
