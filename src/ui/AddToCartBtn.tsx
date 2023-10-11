import cart from "../assets/icon-cart.svg";

const AddToCartBtn = () => {
  return (
    <button className="w-[15rem] p-4 rounded-lg bg-NormalOrange text-white flex items-center justify-center gap-3">
      <img src={cart} alt="" />
      <span>Add To Cart</span>
    </button>
  );
};
export default AddToCartBtn;
