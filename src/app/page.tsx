// Components.
import { Intro } from "./features/Intro";
import { ContactMe } from "./features/ContactMe";
import { ProjectsSection } from "./features/ProjectsSection";

// bg-[#cccc] md: mx-[10rem] my-[2rem]
export default function Home() {
  return (
    <main className=" bg-[#000] flex min-h-screen flex-col items-center justify-between mx-[3.5rem] h-[100%]">
      <Intro />
      <ProjectsSection />
      <ContactMe />
    </main>
  );
}
