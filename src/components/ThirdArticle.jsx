import { VueIcon } from "./icons/VueIcon";
import { FirebaseIcon } from "./icons/FirebaseIcon";
import { JsIcon } from "./icons/JsIcon";
import { CssIcon } from "./icons/CssIcon";

const ThirdArticle = () => {
  return (
    <article className="w-screen h-screen flex justify-between flex-wrap">
      <div className="flex w-1/2  justify-center items-center">
        <div className=" grid grid-cols-1 place-items-center gap-[25px] backdrop-blur-3xl rounded-lg py-10 border-[1px] border-neutral-100 ">
          <h3 className=" bg-clip-text text-transparent intro-text text-2xl bg-gradient-to-b from-neutral-950  to-neutral-800  dark:from-white dark:to-neutral-800">
            Mucho Gusto
          </h3>
          <p className="text-lg h-24 text-center w-1/2 text-neutral-900  dark:text-neutral-300">
            An E-commerce for a bakery with stock/image management
          </p>
          <div className="flex justify-between items-center w-52 gap">
            <VueIcon color={"white"} width={25} height={25} />
            <FirebaseIcon color={"white"} width={25} height={25} />
            <JsIcon color={"white"} width={25} height={25} />
            <CssIcon color={"white"} width={25} height={25} />
          </div>
        </div>
      </div>
      <div className="mockup flex justify-center items-center relative w-1/2 ">
        <img
          className="rounded-lg  z-10 -translate-x-56 -translate-y-10   object-cover object-center"
          src="./MuchoGustoMobile.png"
          alt="Web de CXP"
          width={550}
        />
        <img
          className="rounded-lg  absolute z-5  object-cover object-center"
          src="./MuchoGustoWeb.png"
          alt="Web de CXP"
          width={550}
        />
      </div>
    </article>
  );
};
export { ThirdArticle };
