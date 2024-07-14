import Image from "next/image";
// Icon.
import icon from "../../favicon.ico";

export const AnimatedGrid: React.FC = () => {
  return (
    <>
      <div className=" flex justify-center items-center w-full text-justify md: text-left mb-0 w-2/2 text-center">
        <p className="selectionHightlight text-center">
          Try to copy me <br /> (this text).
        </p>
      </div>
      <div className=" flex justify-center items-center rotate-container">
        <Image
          src={icon}
          alt="Vercel Logo"
          className="rotate-image"
          width={100}
          height={24}
          priority
        />
      </div>
      <div className=" flex justify-center items-center">hola 2</div>
      <div>hola 2</div>
      <div>hola 2</div>
      <div>hola 2</div>
    </>
  );
};
