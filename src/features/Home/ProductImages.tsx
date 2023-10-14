import { useState } from "react";
import smallImageOna from "../../assets/image-product-1.jpg";
import smallImageTwo from "../../assets/image-product-2.jpg";
import smallImageThree from "../../assets/image-product-3.jpg";
import smallImageFour from "../../assets/image-product-4.jpg";
import ImagesView from "./ImagesView";
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
  const [openPopup, setOpenPopup] = useState<boolean>(false);
  return (
    <section>
      <div className="w-full md:max-w-[25rem] mx-auto ">
        <img
          src={images.find((image) => image.id === activeImage)?.path}
          alt=""
          className="w-full rounded-lg mb-5 cursor-pointer"
          onClick={() => setOpenPopup(true)}
        />
        {/* small images */}
        <ul className="flex items-center justify-between gap-5">
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
                  className={`w-full ${
                    image.id === activeImage ? " opacity-50" : "opacity-100"
                  }`}
                />
              </li>
            );
          })}
        </ul>
      </div>
      {openPopup ? (
        <div>
          <div className="bg-black opacity-[75%] fixed left-0 right-0 top-0 bottom-0 h-screen w-screen"></div>
          <ImagesView
            activeImage={activeImage}
            setActiveImage={setActiveImage}
            setOpenPopup={setOpenPopup}
          />
        </div>
      ) : null}
    </section>
  );
};

export default ProductImages;
