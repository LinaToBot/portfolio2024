// Components.
import { Header } from "./components/Header/Header";
import { Intro } from "./features/Intro";
import { AnimationsSection } from "./features/AnimationsSection";
import { ContactMe } from "./features/ContactMe";

// bg-[#cccc] md: mx-[10rem] my-[2rem]
export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between mx-[3.5rem] ">
      <Intro />
      <AnimationsSection />
      <ContactMe />
    </main>
  );
}
