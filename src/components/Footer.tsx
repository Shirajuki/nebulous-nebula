import { motion } from "framer-motion";

const Footer = () => {
  return (
    <footer className="flex flex-col justify-center fancy-font text-center text-sm h-16">
      <motion.p
        className="absolute left-1/2"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        transition={{ type: "spring", stiffness: 400, damping: 17 }}
        style={{ x: "-50%" }}
      >
        <a href="https://github.com/shirajuki">@shirajuki</a>
      </motion.p>
    </footer>
  );
};
export default Footer;
