// Libraries.
import Link from "next/link";
// Components.
import { AnimatedGrid } from "../components/AnimatedGrid/AnimatedGrid";

export const AnimationsSection: React.FC = () => {
  return (
    <section className=" section-basic-styles2">
      <Link href="/animation-page">
        <h2 className="space-grotesk mt-[2rem] blinking titles-color text-[2.5rem] font-[600]">
          Some animations
        </h2>
      </Link>
      <section className="grid section-grid gap-4 mt-8 justify-items-center">
        <AnimatedGrid />
      </section>
    </section>
  );
};
