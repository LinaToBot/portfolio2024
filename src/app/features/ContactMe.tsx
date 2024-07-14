// Libraries.
import Image from "next/image";
// Public.
import next from "../../../public/next.svg";

export const ContactMe = () => {
  return (
    <section className="flex flex-col h-screen items-center mx-[5rem] md:flex-row md:space-x-4 bg-[#e3d68b]">
      <div className="w-full text-justify md: text-left mb-0 w-2/2">
        <h2 className="text-[2.5rem]">ContactMe</h2>
        <p>
          I`m a Front-end Developer and I have combined the skills acquired from
          my first career and my software experience to enhance the quality and
          user experience of our products.
        </p>
        <p>
          On this site, you can check out my experience and achievements in
          development and video game design.
        </p>
      </div>
      <div className=" w-full p-4 md: w-1/2 flex justify-center p-4 ">
        <Image
          src={next}
          alt="Vercel Logo"
          className="dark:invert cursor-pointer"
          width={100}
          height={24}
          priority
        />
      </div>
    </section>
  );
};
