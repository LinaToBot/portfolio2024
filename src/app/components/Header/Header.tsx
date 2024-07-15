// Libraries.
import Image from "next/image";
import Link from "next/link";
// Public.
import IN from "../../../../public/linkedin.svg";

export const Header: React.FC = () => {
  const linkedinUrl = "https://www.linkedin.com/in/paulina-i-5a7174ba/";

  return (
    <nav className="header px-[7rem]">
      <ul className="diagonal-borders-global">
        <li className="space-grotesk">
          <Link href="/" className="font-[900] italic">
            Lina2Bot
          </Link>
        </li>
      </ul>
      {/* aqui faltaria adaptaplo a celular  */}
      <div className="flex gap-[1rem] align-center w-[12rem] pt-[1rem]">
        <p className="justify-between align-center"></p>
        {/* <a
          className=""
          href={linkedinUrl}
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            src={IN}
            alt="LinkedIn icon" 
            className=""
            width={24}
            height={24}
            priority
          />
        </a> */}
      </div>
    </nav>
  );
};
