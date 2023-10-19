import DarkLightMode from "./components/DarkLightMode";
import { LogoButton } from "./components/LogoButton";

function App() {
  const bckgImg = "backsect1.png";

  return (
    <>
      <main className="transition-colors duration-100">
        <nav className="fixed w-screen h-20 flex justify-between items-start">
          <LogoButton />
          <DarkLightMode />
        </nav>
        <section
          className="min-h-screen w-full flex justify-between items-center bg-white dark:bg-black transition-colors ease-in-out delay-15 duration-300 "
          style={{
            backgroundImage: `url(${bckgImg})`,
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
          }}
        >
          <aside>
            <p className="intro-text-paragraph text-black text-center text-xl dark:text-white animate-fade-right animate-duration-1000 animate-delay-400">Fullstack</p>
            <h1 className=" animate-fade-right animate-duration-1000 animate-delay-[600ms] intro-text px-10 text-center bg-clip-text text-transparent text-9xl  dark:bg-gradient-to-r dark:from-neutral-300 dark:via-indigo-400 dark:to-indigo-700 bg-gradient-to-r from-indigo-700 via-indigo-400 to-stone-950">
              WEB <br /> <span className="intro-text px-10 text-center bg-clip-text text-transparent text-9xl  dark:bg-gradient-to-r dark:from-neutral-300 dark:via-indigo-400 dark:to-indigo-700 bg-gradient-to-r from-indigo-700 via-indigo-400 to-stone-95">DEVELOPER</span>
            </h1>
          </aside>
        </section>
      </main>
    </>
  );
}

export default App;
