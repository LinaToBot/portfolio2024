// Libraries.
import Image from "next/image";
import Link from "next/link";
// Icon.
import computerIcon from "../../../../public/puzzle-15.png";

export const GridLayout = () => {
  const linkFormat =
    "flex flex-col items-center justify-center space-y-0 image-hover-effect";
  const href = "/coming-soon-page";

  return (
    <section className="grid h-[100%] section-grid p-[2rem] justify-items-center">
      <div className=" grid-content-format">
        <Link href={href} className={linkFormat}>
          <Image
            src={computerIcon}
            alt="computer icon"
            width={200}
            height={200}
            priority
          />
          <p className="roboto-mono">Web project</p>
        </Link>
      </div>
      <div className=" grid-content-format">
        <Link href={href} className={linkFormat}>
          <Image
            src={computerIcon}
            alt="computer icon"
            width={200}
            height={200}
            priority
          />
          <p className="roboto-mono">Web project</p>
        </Link>
      </div>
      <div className=" grid-content-format">
        <Link href={href} className={linkFormat}>
          <Image
            src={computerIcon}
            alt="computer icon"
            className=""
            width={200}
            height={200}
            priority
          />
          <p className="roboto-mono">Web project</p>
        </Link>
      </div>
      <div className=" grid-content-format">
        <Link href={href} className={linkFormat}>
          <Image
            src={computerIcon}
            alt="computer icon"
            className=""
            width={200}
            height={200}
            priority
          />
          <p className="roboto-mono">Web project</p>
        </Link>
      </div>
      <div className=" grid-content-format">
        <Link href={href} className={linkFormat}>
          <Image
            src={computerIcon}
            alt="computer icon"
            className=""
            width={200}
            height={200}
            priority
          />
          <p className="roboto-mono">Web project</p>
        </Link>
      </div>
      <div className=" grid-content-format">
        <Link href={href} className={linkFormat}>
          <Image
            src={computerIcon}
            alt="computer icon"
            className=""
            width={200}
            height={200}
            priority
          />
          <p className="roboto-mono">Web project</p>
        </Link>
      </div>
    </section>
  );
};
