const AboutMe = () => {
  return (
    <article className="w-screen h-screen flex items-center justify-center flex-wrap bg-gradient-to-t from-black to-transparent dark:from-transparent dark:to-transparent" id="about-me">

      <div className="w-4/12 flex justify-center items-center">
        <p
          className="about-me text-2xl font-[550] h-24 text-center leading-relaxed text-neutral-100  dark:text-neutral-300"
          style={{ fontStyle: "italic" }}
        >
          " I am Francisco Lopez, a self-taught Argentine web developer. My
          strength is the Front-end, but I am a Back-end enthusiast, due to
          needs in my projects."
        </p>
      </div>
      <div className="w-1/2 flex justify-center items-center">
        <h1 className="mt-5 w-4/6 intro-text text-center bg-clip-text text-transparent text-6xl sm:text-9xl   dark:bg-gradient-to-r dark:from-neutral-300 dark:via-indigo-400 dark:to-indigo-700 bg-gradient-to-r from-indigo-400 via-indigo-700  to-stone-950">
          About Me
        </h1>
      </div>
    </article>
  );
};
export { AboutMe };
