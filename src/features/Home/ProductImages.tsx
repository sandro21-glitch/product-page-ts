import { useState } from "react";
import smallImageOna from "../../assets/image-product-1.jpg";
import smallImageTwo from "../../assets/image-product-2.jpg";
import smallImageThree from "../../assets/image-product-3.jpg";
import smallImageFour from "../../assets/image-product-4.jpg";
type ImageTypes = {
  id: number;
  path: string;
};
const images: ImageTypes[] = [
  { id: 1, path: smallImageOna },
  { id: 2, path: smallImageTwo },
  { id: 3, path: smallImageThree },
  { id: 4, path: smallImageFour },
];

const ProductImages = () => {
  const [activeImage, setActiveImage] = useState<number>(1);
  return (
    <div className="max-w-[25rem]">
      <img
        src={images.find((image) => image.id === activeImage)?.path}
        alt=""
        className="w-full rounded-lg mb-5"
      />
      {/* small images */}
      <ul className="flex items-center justify-between">
        {images.map((image) => {
          return (
            <li
              key={image.id}
              className={`cursor-pointer ${
                activeImage === image.id
                  ? "border-NormalOrange"
                  : "border-transparent "
              } border-2 rounded-lg overflow-hidden`}
              onClick={() => setActiveImage(image.id)}
            >
              <img
                src={image.path}
                alt="product image"
                className={`w-[5rem] ${
                  image.id === activeImage ? " opacity-50" : "opacity-100"
                }`}
              />
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default ProductImages;
