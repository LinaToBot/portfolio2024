// Libraries.
import Image from "next/image";
import Link from "next/link";
// Public.
import vercel from "../../../../public/vercel.svg";

export const Header: React.FC = () => {
  const linkedinUrl = "https://www.linkedin.com/in/paulina-i-5a7174ba/";
  return (
    <nav className="flex justify-between w-full p-[.0025rem]">
      <ul className="flex mr-[1rem]">
        <li className="space-grotesk">
          <Link href="/">Lina2Bot</Link>
        </li>
      </ul>
      {/* aqui faltaria adaptaplo a celular  */}
      <div className="flex justify-between w-[12rem]">
        <p>Celular</p>
        <a href={linkedinUrl} target="_blank" rel="noopener noreferrer">
          <Image
            src={vercel}
            alt="Vercel Logo"
            className="dark:invert cursor-pointer"
            width={100}
            height={24}
            priority
          />
        </a>
      </div>
    </nav>
  );
};
