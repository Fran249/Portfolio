const AboutMe = () => {
  return (
    <article
      className="w-screen  min-h-screen flex items-center justify-center flex-wrap bg-gradient-to-t from-black to-transparent dark:from-transparent dark:to-transparent"
      id="about-me"
    >
      <div className="w-full md:w-1/5 border-[0px] md:border-r-[2px] md:border-r-indigo-600 flex justify-center items-center order-1 md:order-1 ">
        <h1
        
          className="me-text rotate-0 md:rotate-180 mt-5 w-4/6 intro-text text-center bg-clip-text text-transparent text-8xl md:text-9xl   dark:bg-gradient-to-r dark:from-neutral-300 dark:via-indigo-400 dark:to-indigo-700 bg-gradient-to-r from-indigo-400 via-indigo-700  to-stone-950"
        >
          About Me
        </h1>
      </div>
      <div className=" w-full  md:w-3/4 flex justify-center items-center order-2 md:order-2">
        <div className="w-full flex flex-col items-center gap-16">
          <div className="mask mask_type3 mask_type3-a1 page__tile">
            <img
              src="./avatar-me.webp"
              className="mask__img w-[200px] md:w-[200px] h-[200px] md:h-[200px] object-cover"
              loading="lazy"
              decoding="async"
              alt="Fran Avatar"
            />
          </div>
          <p
            className="px-5 md:px-[200px] pb-[250px] about-me text-2xl font-[550] h-24 text-center leading-relaxed text-neutral-100  dark:text-neutral-300"
            style={{ fontStyle: "italic" }}
          >
            I am Francisco Lopez, a self-taught 26-year-old Argentine web
            developer. My strength is the Front-end, but I am a Back-end
            enthusiast, due to needs in my projects.
          </p>
        </div>
      </div>
    </article>
  );
};
export { AboutMe };
