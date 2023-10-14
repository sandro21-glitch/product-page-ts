import smallImageOna from "../../assets/image-product-1.jpg";
import smallImageTwo from "../../assets/image-product-2.jpg";
import smallImageThree from "../../assets/image-product-3.jpg";
import smallImageFour from "../../assets/image-product-4.jpg";

import previous from "../../assets/icon-previous.svg";
import next from "../../assets/icon-next.svg";
import close from "../../assets/icon-close-white.svg";
type ActiveImagesType = {
  activeImage: number;
  setActiveImage: (id: number) => void;
  setOpenPopup: (isOpen: boolean) => void;
};
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
const ImagesView = ({
  activeImage,
  setActiveImage,
  setOpenPopup,
}: ActiveImagesType) => {
  const handlePrevImage = (): void => {
    if (activeImage > 1) {
      setActiveImage(activeImage - 1);
    }
  };
  const handleNextImage = (): void => {
    if (activeImage < images.length) {
      setActiveImage(activeImage + 1);
    }
  };

  return (
    <div className="mx-auto fixed left-0 right-0 top-16 bottom-0 ">
      <div className="max-w-[23rem] md:max-w-[30rem] mx-auto">
        <div className="relative">
          <img
            src={images.find((image) => image.id === activeImage)?.path}
            alt=""
            className=" rounded-lg mb-5 "
          />
          <button
            onClick={handlePrevImage}
            className="absolute -left-5 bg-white w-10 h-10 flex items-center justify-center rounded-full top-1/2"
          >
            <img src={previous} alt="prev" />
          </button>
          <button
            onClick={handleNextImage}
            className="absolute -right-5 bg-white w-10 h-10 flex items-center justify-center rounded-full top-1/2"
          >
            <img src={next} alt="next" />
          </button>
          {/* close images popup */}
          <button
            className="absolute text-white right-0 -top-10"
            onClick={() => setOpenPopup(false)}
          >
            <img src={close} alt="close" />
          </button>
        </div>
        {/* small images */}
        <ul className="flex items-center justify-evenly">
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
    </div>
  );
};
export default ImagesView;
