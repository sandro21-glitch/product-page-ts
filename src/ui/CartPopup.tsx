import CartItems from "../features/CartItems/CartItems";

type CartPopupType = {
  handleRemoveItem: () => void;
  openCart: boolean;
  cartItem: { name: string; amount: number; price: number };
};

const CartPopup = ({ openCart, cartItem, handleRemoveItem }: CartPopupType) => {
  return (
    <div
      className={`
        ${openCart ? "block" : "hidden"} rounded-md 
        
        absolute right-0 md:right-0 left-0 md:left-auto border border-Grayishblue top-full
        w-[90%] m-auto bg-white z-[1]
        md:w-[25rem] h-[15rem] md:h-13 shadow-ShadowBottom
        `}
    >
      <div className="border-b border-b-Grayishblue p-5">
        <h6>Cart</h6>
      </div>
      {/* cart content */}
      {cartItem.amount < 1 ? (
        <p className="flex items-center justify-center mt-14 font-bold text-Darkgrayishblue">
          Your cart is empty.
        </p>
      ) : (
        <CartItems cartItem={cartItem} handleRemoveItem={handleRemoveItem} />
      )}
    </div>
  );
};

export default CartPopup;
