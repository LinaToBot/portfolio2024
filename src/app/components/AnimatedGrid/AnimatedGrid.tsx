// Libraries.
import Image from "next/image";
// Icon.
import icon from "../../favicon.ico";

export const AnimatedGrid: React.FC = () => {
  return (
    <>
      <div className=" grid-content-format text-justify md: text-left mb-0 w-2/2 text-center">
        <p className=" text-center">
          Try to copy me <br /> (this text).
        </p>
      </div>
      <div className=" grid-content-format rotate-container">
        <Image
          src={icon}
          alt="Vercel Logo"
          className="rotate-image"
          width={100}
          height={24}
          priority
        />
      </div>
      <div className="grid-content-format">
        <div className=" diagonal-borders blinking">
          <p className="text-center justify-center text-[0.9rem] italic font-[700]">
            I can take <br /> this form
          </p>
        </div>
      </div>

      <div className="grid-content-format">
        <p className="diagonal-move">Whee!</p>
      </div>
      <div className="grid-content-format ">
        <p className="color-transition">Hover here</p>
      </div>
      <div className="grid-content-format ">
        <p className="size-animation">Warning!!</p>
      </div>
    </>
  );
};
