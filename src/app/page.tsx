import Image from "next/image";
import { Header } from "./components/Header/Header";
import vercel from "/public/vercel.svg";
import { Intro } from "./features/Intro";
import { Animations } from "./features/Animations";

export default function Home() {
  return (
    <>
      <div className=" header flex justify-start px-[7rem] py-[1.5rem] m-0">
        <Header />
      </div>
      <main className="flex bg-[#cccc] min-h-screen flex-col items-center justify-between mt-[4.5rem] mx-[3.5rem] md: mx-[10rem] my-[2rem]">
        <Intro />
        <Animations />
        <Animations />
      </main>
    </>
  );
}
