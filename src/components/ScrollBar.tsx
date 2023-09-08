import { motion, useScroll } from "framer-motion";

const ScrollBar = () => {
  const { scrollYProgress } = useScroll();
  return (
    <>
      <motion.div
        style={{
          position: "fixed",
          scaleX: scrollYProgress,
          translateX: "-50%",
          bottom: "0.5rem",
          height: "0.25rem",
        }}
        className="left-1/2 w-[calc(100%-2rem)] z-50 rounded-full bg-[rgb(var(--accent))]"
      />
    </>
  );
};

export default ScrollBar;
