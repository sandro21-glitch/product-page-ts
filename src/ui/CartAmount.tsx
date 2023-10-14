type AmountType = {
  amount: number;
};

const CartAmount = ({ amount }: AmountType) => {
  if (amount < 1) return null;
  return (
    <div
      className="
        absolute bg-NormalOrange rounded-full text-white
        -right-2 -top-[.5rem] text-center text-[.8rem] font-bold py-[.05rem] px-[.4rem]"
    >
      {amount}
    </div>
  );
};
export default CartAmount;
