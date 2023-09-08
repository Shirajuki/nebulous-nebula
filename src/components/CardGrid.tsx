import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { TECHNOLOGIES as items } from "../utils/constants";

const CardGrid = () => {
  const [selectedId, setSelectedId] = useState<number>(-1);

  return (
    <div className="relative my-2 bg-[rgb(var(--accent))] p-4 rounded-md">
      <div className="grid grid-rows-3 grid-cols-[2fr_1fr_2fr] gap-3">
        {items.map((item) => (
          <div key={item.id} className={item.span}>
            <AnimatePresence>
              {selectedId !== item.id && (
                <motion.div
                  layoutId={item.id + ""}
                  onClick={() => setSelectedId(item.id)}
                  className="relative bg-white shadow-md cursor-pointer justify-center items-center h-32 rounded-md text-xl"
                >
                  <motion.h2 className="absolute top-2 right-2 text-black">
                    {item.title}
                  </motion.h2>
                  <motion.div className="absolute bottom-0 w-full h-14 flex flex-col justify-end p-2 gap-2">
                    <motion.span className="block w-5/12 h-2 bg-black bg-opacity-30 animate-pulse rounded-full"></motion.span>
                    <motion.span className="block w-11/12 h-2 bg-black bg-opacity-30 animate-pulse rounded-full"></motion.span>
                    <motion.span className="block w-7/12 h-2 bg-black bg-opacity-30 animate-pulse rounded-full"></motion.span>
                  </motion.div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        ))}
      </div>

      <AnimatePresence>
        {selectedId >= 0 && (
          <motion.div
            style={{
              background: "rgba(var(--accent), 0.5)",
              backdropFilter: "blur(3px)",
            }}
            id="wrapper"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="absolute w-full h-full top-0 left-0 flex justify-center items-center z-20 cursor-pointer"
            onClick={({ target }) => {
              (target as Element).id && setSelectedId(-1);
            }}
          >
            <motion.div
              layoutId={items[selectedId].id + ""}
              className="relative w-8/12 h-1/2 bg-white shadow-md cursor-default justify-center items-center rounded-md text-3xl"
            >
              <motion.h2 className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-black">
                {items[selectedId].title}
              </motion.h2>

              <motion.div className="absolute bottom-0 w-full h-24 flex flex-col justify-end p-2 gap-2">
                <motion.span className="block w-5/12 h-2 bg-black bg-opacity-30 animate-pulse rounded-full"></motion.span>
                <motion.span className="block w-11/12 h-2 bg-black bg-opacity-30 animate-pulse rounded-full"></motion.span>
                <motion.span className="block w-7/12 h-2 bg-black bg-opacity-30 animate-pulse rounded-full"></motion.span>
              </motion.div>

              <motion.button
                style={{ filter: "brightness(0.9)" }}
                className="absolute top-2 right-2 bg-[rgba(var(--accent-light),0.2)] h-7 w-7 rounded-full fancy-font text-[rgb(var(--accent))] text-sm"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                transition={{ type: "spring", stiffness: 400, damping: 17 }}
                onClick={() => setSelectedId(-1)}
              >
                ✖
              </motion.button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};
export default CardGrid;
