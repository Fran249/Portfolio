import { VueIcon } from "./icons/VueIcon";
import { FirebaseIcon } from "./icons/FirebaseIcon";
import { JsIcon } from "./icons/JsIcon";
import { CssIcon } from "./icons/CssIcon";
import { GitHubIcon } from "./icons/GitHubIcon";
import { ExternalLinkIcon } from "./icons/ExternalLinkIcon";

const ThirdArticle = () => {
  return (
    <article className="w-screen min-h-screen flex justify-between flex-wrap">
      <div className="flex w-3/4 md:w-1/2 mx-auto md:mx-0  justify-center items-center order-2 md:order-1 ">
        <div className=" grid grid-cols-1 place-items-center gap-[25px] backdrop-blur-3xl rounded-lg py-10 border-[1px] border-neutral-100 ">
          <h3 className=" bg-clip-text text-transparent intro-text text-2xl bg-gradient-to-b from-neutral-950  to-neutral-800  dark:from-white dark:to-neutral-800">
            Mucho Gusto
          </h3>
          <p className="text-lg min-h-full text-center w-1/2 text-neutral-900  dark:text-neutral-300">
            An E-commerce for a bakery with stock/image management
          </p>
          <div className="flex justify-center items-center gap-10">
            <a
              href="https://github.com/Fran249/Mucho-gusto"
              className="hover:translate-y-[-2px] transition-transform active:translate-y-[2px]"
            >
              <GitHubIcon tailwindClass={"w-6 h-6 text-white"} />
            </a>
            <a
              href="https://prueba-auth-vuex-router.web.app/"
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
      <div className="mockup flex mt-36 md:mt-0 justify-center items-center relative w-full md:w-1/2 order-1 md:order-2">
        <img
          className="rounded-lg w-full md:w-[500px]  z-10 -translate-x-20 md:-translate-x-56 -translate-y-10   object-cover object-center"
          src="./MuchoGustoMobile.webp"
          alt="Web de CXP"

        />
        <img
          className="rounded-lg w-full   absolute z-5  object-cover object-center"
          src="./MuchoGustoWeb.webp"
          alt="Web de CXP"

        />
      </div>
    </article>
  );
};
export { ThirdArticle };
