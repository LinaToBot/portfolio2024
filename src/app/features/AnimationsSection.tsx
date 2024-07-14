// Libraries.
import Link from "next/link";
// Components.
import { AnimatedGrid } from "../components/AnimatedGrid/AnimatedGrid";

export const AnimationsSection: React.FC = () => {
  return (
    <section className=" section-basic-styles2">
      <Link href="/animation-page">
        <h2 className="space-grotesk mt-[2rem] titles-color text-[2.5rem] font-[600]">
          Some animations
        </h2>
      </Link>
      <section className="grid h-[100%] section-grid p-[2rem] justify-items-center">
        <AnimatedGrid />
      </section>
    </section>
  );
};
