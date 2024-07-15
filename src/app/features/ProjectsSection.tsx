// Libraries.
import Link from "next/link";
// Components.
import { AnimatedGrid } from "../components/AnimatedGrid/AnimatedGrid";
import { GridLayout } from "../components/Grid/Grid";

export const ProjectsSection: React.FC = () => {
  return (
    <section className=" section-basic-styles2">
      <Link href="/coming-soon-page">
        <h2 className="space-grotesk mt-[2rem] text-[2.5rem] font-[600]">
          Coming soon...
        </h2>
      </Link>
      <GridLayout />
    </section>
  );
};
