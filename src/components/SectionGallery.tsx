import { motion } from "framer-motion";
import { TECHNOLOGIES as items } from "../utils/constants";

const variants = {
  hidden: (reversed: boolean) => ({
    translateY: 50,
    translateX: reversed ? 150 : -150,
    opacity: 0,
    transition: {
      type: "spring",
      bounce: 0.5,
      duration: 1,
    },
  }),
  visible: {
    translateY: 0,
    translateX: 0,
    opacity: 1,
    transition: {
      type: "spring",
      bounce: 0.5,
      duration: 1,
    },
  },
};
const SectionGallery = () => {
  return (
    <>
      {items.map((item, i) => (
        <motion.section
          key={"gallery" + item.id}
          custom={i % 2 == 0}
          variants={variants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.9 }}
          className={`relative my-5 w-full max-w-xl flex justify-between mx-auto gap-2 ${
            i % 2 == 0 ? "flex-row reversed" : "flex-row-reverse"
          }`}
        >
          <div>
            <h2 className="py-3 text-4xl text-gradient ![background-size:100%]">
              {item.title}
            </h2>
            <p className="fancy-font">{item.description}</p>
          </div>
          <div className="h-96 w-full">
            <img
              className="h-96 absolute left-0 [.reversed_&]:right-0 [.reversed_&]:left-auto"
              src="https://cdn.discordapp.com/attachments/443508931453648907/1149630664518418463/3ec7c4ce95243e371f7e7469bdc5a518.png"
              alt={item.title}
            />
          </div>
        </motion.section>
      ))}
    </>
  );
};
export default SectionGallery;
