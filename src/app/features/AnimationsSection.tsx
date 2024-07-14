// Libraries.
// Public.
import Link from "next/link";

export const AnimationsSection = () => {
  return (
    <section className="flex flex-col  py-[3rem] h-screen items-center mx-[5rem] bg-[#e38bce] ">
      <Link href="/">
        <h2 className=" blinking text-[2.5rem]">Some animations </h2>
      </Link>
      <div className="w-full text-justify md: text-left mb-0 w-2/2">
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
    </section>
  );
};
