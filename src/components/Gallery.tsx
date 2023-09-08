import {
  motion,
  useAnimation,
  useMotionValue,
  useTransform,
} from "framer-motion";
import { lerp } from "../utils/utils";

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
type TGallery = {
  item: any;
  reversed: boolean;
};
const Gallery = ({ item, reversed }: TGallery) => {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const initialAnimation = useAnimation();

  const translateX = useTransform(mouseX, [300, 900], [45, -45]);
  const translateY = useTransform(mouseY, [200, 500], [45, -45]);

  return (
    <>
      <motion.section
        custom={reversed}
        variants={variants}
        initial="hidden"
        whileInView="visible"
        viewport={{
          once: true,
          amount: 0.9,
        }}
        onHoverStart={() => {}}
        onHoverEnd={() => {
          initialAnimation.start({
            translateX: 0,
            translateY: 0,
            transition: { duration: 0.5 },
          });
        }}
        onPointerMove={(e) => {
          mouseX.set(lerp(mouseX.get(), e.clientX, 0.05));
          mouseY.set(lerp(mouseY.get(), e.clientY, 0.05));
          initialAnimation.set({
            translateX: translateX.get(),
            translateY: translateY.get(),
          });

          console.log(mouseX.get(), mouseY.get());
        }}
        className={`relative my-5 w-full flex justify-between mx-auto px-5 sm:px-10 gap-2 ${
          reversed ? "flex-row reversed" : "flex-row-reverse"
        }`}
      >
        <motion.div animate={initialAnimation}>
          <h2 className="py-3 text-4xl text-gradient ![background-size:100%]">
            {item.title}
          </h2>
          <p className="fancy-font">{item.description}</p>
        </motion.div>
        <motion.div
          animate={initialAnimation}
          className="relative h-96 w-full object-cover"
        >
          <img
            className="h-96 absolute left-0 [.reversed_&]:right-0 [.reversed_&]:left-auto"
            src="https://cdn.discordapp.com/attachments/443508931453648907/1149630664518418463/3ec7c4ce95243e371f7e7469bdc5a518.png"
            alt={item.title}
          />
        </motion.div>
      </motion.section>
    </>
  );
};
export default Gallery;
