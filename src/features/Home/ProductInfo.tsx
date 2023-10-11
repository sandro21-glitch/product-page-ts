import PriceControl from "./PriceControl";

const ProductInfo = () => {
  return (
    <div className="max-w-[35rem] py-10">
      <div className="">
        <h6 className="uppercase font-bold text-NormalOrange tracking-widest mb-5">
          Sneaker Company
        </h6>
        <h1 className="font-bold mb-5">Fall Limited Edition Sneakers</h1>
        <p className="leading-8 mb-5">
          These low-profile sneakers are your perfect casual wear companion.
          Featuring a durable rubber outer sole, they’ll withstand everything
          the weather can offer.
        </p>
      </div>
      <PriceControl />
    </div>
  );
};
export default ProductInfo;
