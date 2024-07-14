// Libraries.
import Image from "next/image";
// Public.
import next from "../../../public/next.svg";

export const ContactMe: React.FC = () => {
  return (
    <section className=" section-basic-styles1">
      <div className="w-full text-justify md:text-left mb-0 w-2/2">
        <h2 className="space-grotesk text-[2.5rem] font-[600]">ContactMe</h2>
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
