import { TECHNOLOGIES as items } from "../utils/constants";
import Gallery from "./Gallery";

const SectionGallery = () => {
  return (
    <>
      {items.map((item, i) => (
        <Gallery key={"gallery" + item.id} item={item} reversed={i % 2 == 0} />
      ))}
    </>
  );
};
export default SectionGallery;
