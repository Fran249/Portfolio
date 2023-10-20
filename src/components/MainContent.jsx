import { FirstArticle } from "../components/FirstArticle";
import { SecondArticle } from "../components/SecondArticle";
import { AboutMe } from "./AboutMe";
import { FooterComp } from "./FooterComp";
import { FourthArticle } from "./FourthArticle";
import { ThirdArticle } from "./ThirdArticle";
const bckgImg = "backsect1.png";
const MainContent = () => {
  return (
    <section
      className="min-h-screen w-full flex-wrap flex justify-between items-center bg-white dark:bg-black transition-colors ease-in-out delay-15 duration-300 "
      style={{
        backgroundImage: `url(${bckgImg})`,
        backgroundSize: "cover",
        backgroundPosition : "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <FirstArticle />
      <SecondArticle />
      <ThirdArticle/>
      <FourthArticle/>
      <AboutMe/>
      <FooterComp/>
    </section>
  );
};

export { MainContent };
