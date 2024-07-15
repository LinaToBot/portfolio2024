// Libraries.
import Link from "next/link";
// Components.
import { AnimatedGrid } from "../components/AnimatedGrid/AnimatedGrid";

export const ProjectsSection: React.FC = () => {
  return (
    <section className=" section-basic-styles2">
      <Link href="/animation-page">
        <h2 className="space-grotesk mt-[2rem] text-[2.5rem] font-[600]">
          Coming soon...
        </h2>
      </Link>
      <section className="grid h-[100%] section-grid p-[2rem] justify-items-center"></section>
    </section>
  );
};
