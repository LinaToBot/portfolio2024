// Libraries.
import Link from "next/link";

export const Header: React.FC = () => {
  return (
    <nav className="header px-[7rem]">
      <ul className="diagonal-borders-global">
        <li className="space-grotesk">
          <Link href="/" className="font-[900] italic">
            Lina2Bot
          </Link>
        </li>
      </ul>
      <div className="flex gap-[1rem] align-center w-[12rem] pt-[1rem]">
        <p className="justify-between align-center"></p>
      </div>
    </nav>
  );
};
