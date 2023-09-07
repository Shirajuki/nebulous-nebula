import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

const items = [
  { id: 1, title: "Bun", subtitle: 1 },
  { id: 2, title: "Astro", subtitle: 1 },
  { id: 3, title: "Figma", subtitle: 1 },
  { id: 4, title: "Spline", subtitle: 1 },
  { id: 5, title: "Framer Motion", subtitle: 1 },
  { id: 6, title: "React", subtitle: 1 },
  { id: 7, title: "Svelte", subtitle: 1 },
];
const CardGrid = () => {
  const [selectedId, setSelectedId] = useState<number>(-1);
  return (
    <>
      <div className="flex flex-col gap-3">
        {items.map((item) => (
          <motion.div>
            <AnimatePresence>
              <motion.div
                layoutId={item.id + ""}
                onClick={() => setSelectedId(item.id)}
                className="flex bg-slate-500"
              >
                <motion.h5>{item.subtitle}</motion.h5>
                <motion.h2>{item.title}</motion.h2>
              </motion.div>

              {selectedId >= 0 && (
                <motion.div layoutId={selectedId + ""}>
                  <motion.h5>{items[selectedId].subtitle}</motion.h5>
                  <motion.h2>{items[selectedId].title}</motion.h2>
                  <motion.button onClick={() => setSelectedId(-1)} />
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        ))}
      </div>
    </>
  );
};
export default CardGrid;
