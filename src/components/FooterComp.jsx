import { FbIcon } from "./icons/FbIcon";
import { GitHubIcon } from "./icons/GitHubIcon";
import { InstagramIcon } from "./icons/InstagramIcon";
import { LinkedinIcon } from "./icons/LinkedinIcon";
import { MailIcon } from "./icons/MailIcon";
import { WhatsAppIcon } from "./icons/WhatsAppIcon";

const FooterComp = () => {
  return (
    <footer className="relative  bg-black pt-8 pb-6 w-full dark:bg-transparent">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap text-left lg:text-left">
          <div className="w-full lg:w-6/12 px-4">
            <h4 className="text-2xl fonat-semibold text-neutral-300">
              Thanks for visiting!, let's keep in touch
            </h4>
            <h5 className="text-lg mt-0 mb-2 text-neutral-300">Find me here</h5>
            <div className="mt-6 lg:mb-0 mb-6 flex justify-start gap-5">
              <a
                href="https://github.com/Fran249"
                className="hover:translate-y-[-2px] transition-transform active:translate-y-[2px]"
              >
                <GitHubIcon tailwindClass={"w-6 h-6 text-white"} />
              </a>
              <a
                href="https://www.linkedin.com/in/francisco-lopez-76379b20b/"
                className="hover:translate-y-[-2px] transition-transform active:translate-y-[2px]"
              >
                <LinkedinIcon tailwindClass={"w-6 h-6 text-white"} />
              </a>
              <a
                href="https://www.facebook.com/Mindblowx/"
                className="hover:translate-y-[-2px] transition-transform active:translate-y-[2px]"
              >
                <FbIcon height={"30"} width={"30"} color={"white"} />
              </a>
              <a
                href="https://www.instagram.com/franlop3z_/"
                className="hover:translate-y-[-2px] transition-transform active:translate-y-[2px]"
              >
                <InstagramIcon  height={"30"} width={"30"} color={"white"}  />
              </a>
            </div>
          </div>
          <div className="w-full lg:w-6/12 flex flex-col justify-center items-start md:justify-center md:items-end  pr-4">
            <div className="flex flex-wrap items-top mb-6">

              <div className="w-full  px-4">
                <span className="block uppercase text-neutral-300 text-sm font-semibold mb-2">
                  Or Contact Me
                </span>
                <ul className="list-unstyled flex gap-10 sm:block ">
                  <li className="mt-2">
                    <a className=" block w-4" href="https://wa.me/+5492284386173">
                      <WhatsAppIcon width={30} height={20} color={"white"} />
                    </a>
                  </li>
                  <li className="mt-2">
                    <a className=" block w-4" href="mailto:franlopez9724@gmail.com">
                      <MailIcon width={30} height={20} color={"white"} />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export { FooterComp };
