import CartItems from "../features/CartItems/CartItems";

type CartPopupType = {
  openCart: boolean;
};

const CartPopup = ({ openCart }: CartPopupType) => {
  return (
    <div
      className={`
        ${openCart ? "block" : "hidden"} rounded-md 
        
        absolute right-0 md:right-0 left-0 md:left-auto border border-Grayishblue top-full
        w-[90%] m-auto bg-white
        md:w-[25rem] h-[15rem] md:h-13 shadow-ShadowBottom
        `}
    >
      <div className="border-b border-b-Grayishblue p-5">
        <h6>Cart</h6>
      </div>
      {/* cart content */}
      <CartItems />
    </div>
  );
};

export default CartPopup;
