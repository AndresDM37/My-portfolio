import { motion } from "framer-motion";
import { useReducedMotion } from "../hooks/useReducedMotion";

const SectionHeader = ({ title, eyebrow, description }) => {
  const reducedMotion = useReducedMotion();

  const motionProps = reducedMotion
    ? {}
    : {
        initial: { opacity: 0, y: 24 },
        whileInView: { opacity: 1, y: 0 },
        viewport: { once: true, margin: "-80px" },
        transition: { duration: 0.5, ease: "easeOut" },
      };

  return (
    <motion.div {...motionProps}>
      <div className="flex justify-center">
        <p className="rounded-full border border-line/10 bg-surface/5 px-4 py-1.5 text-center text-eyebrow text-accent shadow-lg shadow-black/10 backdrop-blur">
          {eyebrow}
        </p>
      </div>
      <h2 className="mt-5 text-center text-h2 text-fg">{title}</h2>
      <p className="mx-auto mt-4 max-w-2xl text-center text-base leading-7 text-fg/60 md:text-lg">
        {description}
      </p>
    </motion.div>
  );
};

export default SectionHeader;
