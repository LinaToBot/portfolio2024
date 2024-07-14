// Components.
import { Header } from "./components/Header/Header";
import { Intro } from "./features/Intro";
import { AnimationsSection } from "./features/AnimationsSection";
import { ContactMe } from "./features/ContactMe";

export default function Home() {
  return (
    <>
      <div className=" header flex justify-start px-[7rem] py-[1.5rem] m-0">
        <Header />
      </div>
      <main className="flex bg-[#cccc] min-h-screen flex-col items-center justify-between mt-[4.5rem] mx-[3.5rem] md: mx-[10rem] my-[2rem]">
        <Intro />
        <AnimationsSection />
        <ContactMe />
      </main>
    </>
  );
}
