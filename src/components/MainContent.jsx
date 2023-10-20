import { FirstArticle } from "../components/FirstArticle";
import { SecondArticle } from "../components/SecondArticle";
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
    </section>
  );
};

export { MainContent };
