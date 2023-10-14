import cart from "../assets/icon-cart-white.svg";

type CartTypes = {
  amount: number;
  price: number;
  handleAddCart: (price: number, amount: number) => void;
};
const AddToCart = ({ amount, price, handleAddCart }: CartTypes) => {
  return (
    <button
      onClick={() => handleAddCart(price, amount)}
      className="bg-NormalOrange w-full flex-1 p-5 rounded-md text-white font-bold hover:opacity-60"
    >
      <div className="flex items-center justify-center gap-5">
        <span>
          <img src={cart} alt="cart" />
        </span>
        <span>Add to cart</span>
      </div>
    </button>
  );
};
export default AddToCart;
