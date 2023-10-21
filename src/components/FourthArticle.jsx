import { VueIcon } from "./icons/VueIcon";
import { JsIcon } from "./icons/JsIcon";
import { CssIcon } from "./icons/CssIcon";

const FourthArticle = () => {
  return (
    <article className="w-screen h-screen flex justify-between flex-wrap">
      <div className="mockup flex justify-center items-center relative w-full sm:w-1/2 ">
        <img
          className="rounded-lg w-full sm:w-[500px] z-10 -translate-x-20 sm:translate-x-40 -translate-y-10   object-cover object-center"
          src="./EstudioMobile.png"
          alt="Web de CXP"
         
        />
        <img
          className="rounded-lg   absolute z-5  object-cover object-center"
          src="./EstudioWeb.png"
          alt="Web de CXP"
       
        />
      </div>
      <div className="flex w-full sm:w-1/2  justify-center items-center">
        <div className=" w-4/5 grid grid-cols-1 place-items-center gap-[25px] backdrop-blur-3xl rounded-lg py-10 border-[1px] border-neutral-100 ">
          <h3 className=" bg-clip-text text-transparent intro-text text-2xl bg-gradient-to-b from-black  to-neutral-800 dark:from-white dark:to-neutral-800">
           Estudio Juridico Sampaolesi
          </h3>
          <p className="text-lg h-24 text-center w-1/2 text-neutral-700 dark:text-neutral-300">
            A modern landing page for a law firm
          </p>
          <div className="flex justify-between items-center w-52 gap">
            <VueIcon color={"white"} width={25} height={25} />
            <JsIcon color={"white"} width={25} height={25} />
            <CssIcon color={"white"} width={25} height={25} />
          </div>
        </div>
      </div>
    </article>
  );
};
export { FourthArticle };
