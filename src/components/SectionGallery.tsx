import { TECHNOLOGIES as items } from "../utils/constants";

const SectionGallery = () => {
  return (
    <>
      {items.map((item, i) => (
        <section
          className={`my-10 w-full max-w-xl flex justify-between mx-auto gap-2 ${
            i % 2 == 0 ? "flex-row" : "flex-row-reverse"
          }`}
        >
          <h2 className="py-3 text-4xl text-gradient ![background-size:30%]">
            {item.title}
          </h2>
          <img
            className="h-96"
            src="https://cdn.discordapp.com/attachments/443508931453648907/1149630664518418463/3ec7c4ce95243e371f7e7469bdc5a518.png"
            alt={item.title}
          />
        </section>
      ))}
    </>
  );
};
export default SectionGallery;
