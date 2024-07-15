// Libraries.
import Image from "next/image";
// Public.
import gif from "../../../public/puzzle-14.gif";

export const Intro: React.FC = () => {
  return (
    <section className="section-basic-styles1">
      <div className="w-full text-justify md:text-left mb-0 w-2/2">
        <h1 className="space-grotesk text-[3rem] font-[700] ">Hi there!!</h1>
        <p className="roboto-mono mb-[1rem]">
          I`m a Front-end Developer leveraging my previous career knowledge and
          software skills to improve product quality and user experience.
        </p>
        <p className="roboto-mono mb-[1rem]">
          On this site, you can check out my experience and achievements in
          development and video game design.
        </p>
      </div>
      <div className=" w-full p-4 md: w-1/2 flex justify-center p-4 ">
        <Image src={gif} alt="saying hello" width={250} height={200} priority />
      </div>
    </section>
  );
};
