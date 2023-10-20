import { TechCarousel } from "../components/TechCarousel";
import { GitHubIcon } from "./icons/GitHubIcon";
import { LinkedinIcon } from "./icons/LinkedinIcon";

const FirstArticle = () => {
  return (
    <article className=" w-full h-screen flex justify-around flex-wrap">
      <aside className="flex flex-col justify-center items-center">
        <p className="intro-text-paragraph text-black text-center text-xl dark:text-white animate-fade-right animate-duration-1000 animate-delay-400">
          Fullstack
        </p>
        <h1 className=" animate-fade-right animate-duration-1000 animate-delay-[600ms] intro-text text-center bg-clip-text text-transparent text-6xl sm:text-9xl   dark:bg-gradient-to-r dark:from-neutral-300 dark:via-indigo-400 dark:to-indigo-700 bg-gradient-to-r from-indigo-700 via-indigo-400 to-stone-950">
          WEB <br />{" "}
          <span className="intro-text  text-center bg-clip-text text-transparent text-7xl sm:text-9xl  dark:bg-gradient-to-r dark:from-neutral-300 dark:via-indigo-400 dark:to-indigo-700 bg-gradient-to-r from-indigo-700 via-indigo-400 to-stone-95">
            DEVELOPER
          </span>
        </h1>
        <footer className="flex w-[8rem] justify-around items-center mt-10 animate-fade-right animate-duration-1000 animate-delay-[600ms]">
          <a href="https://github.com/Fran249" className="hover:translate-y-[-2px] transition-transform active:translate-y-[2px]" >
            <GitHubIcon />
          </a>
          <a href="https://www.linkedin.com/in/francisco-lopez-76379b20b/" className="hover:translate-y-[-2px] transition-transform active:translate-y-[2px]">
            <LinkedinIcon />
          </a>
        </footer>
      </aside>
      <aside className=" flex justify-center items-center">
        <TechCarousel />
      </aside>
    </article>
  );
};

export { FirstArticle };
