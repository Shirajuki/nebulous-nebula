import { motion } from "framer-motion";

const endpoints = [
  { href: "/wireframe", site: "Wireframe" },
  { href: "/technologies", site: "Technologies" },
  { href: "https://github.com/Shirajuki/nebulous-nebula", site: "Github" },
];
const Navigation = () => {
  return (
    <header className="flex items-start py-5 justify-between w-[calc(100%-2rem)] h-16 max-w-[800px] mx-auto">
      <a href="/">
        <motion.h1
          className="text-2xl"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          transition={{ type: "spring", stiffness: 400, damping: 17 }}
        >
          Bun+Astro
        </motion.h1>
      </a>
      <nav className="flex flex-col gap-5 fancy-font sm:flex-row">
        {endpoints.map((endpoint) => (
          <motion.a
            key={endpoint.site}
            href={endpoint.href}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            transition={{ type: "spring", stiffness: 400, damping: 17 }}
          >
            {endpoint.site}
          </motion.a>
        ))}
      </nav>
    </header>
  );
};

export default Navigation;
