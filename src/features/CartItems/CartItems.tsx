import cartImage from "../../assets/image-product-1.jpg";
import removeItem from "../../assets/icon-delete.svg";

type CartItemType = {
  cartItem: {
    name: string;
    amount: number;
    price: number;
  };
  handleRemoveItem: () => void;
};

const CartItems = ({ cartItem, handleRemoveItem }: CartItemType) => {
  return (
    <div className="p-5">
      <div className="flex justify-between">
        <div className="flex gap-5 mb-5">
          <img
            src={cartImage}
            alt="product image"
            className="max-w-[4rem] h-auto"
          />
          <div className="flex flex-col justify-evenly">
            <h6>{cartItem.name}</h6>
            <p>
              $125.00 x {cartItem.amount}{" "}
              <span className="font-bold ml-2">${cartItem.price}.00</span>
            </p>
          </div>
        </div>
        <button onClick={handleRemoveItem}>
          <img src={removeItem} alt="delete item" />
        </button>
      </div>
      <button className="w-full font-bold bg-NormalOrange p-5 rounded-lg text-white">
        Checkout
      </button>
    </div>
  );
};
export default CartItems;
