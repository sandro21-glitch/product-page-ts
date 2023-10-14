import minusImg from "../../assets/icon-minus.svg";
import plusImg from "../../assets/icon-plus.svg";
import AddToCart from "../../ui/AddToCart";
type AmountType = {
  setAmount: (amount: number) => void;
  amount: number;
  price: number;
  handleAddCart: (price: number, amount: number) => void;
};
const PriceControl = ({
  setAmount,
  amount,
  price,
  handleAddCart,
}: AmountType) => {
  const handleIncreaseAmount = (): void => {
    setAmount(amount + 1);
  };
  const handleDecreaseAmount = (): void => {
    if (amount > 1) {
      setAmount(amount - 1);
    }
  };

  return (
    <div>
      <div className="mb-5 flex items-center justify-between md:block">
        <h3 className="font-bold text-Verydarkblue">
          $125.00 <span className="text-sm bg-PaleOrange text-NormalOrange ml-3 px-2 py-1 rounded-full">50%</span>
        </h3>
        <del className="font-bold text-Grayishblue">$250.00</del>
      </div>
      {/* price control */}
      <div className="flex items-center flex-col md:flex-row md:justify-between gap-10 md:gap-14">
        <div className="flex items-center justify-between w-full md:w-[8rem] p-5 bg-Lightgrayishblue rounded-md">
          <button onClick={handleDecreaseAmount}>
            <img src={minusImg} alt="minusImg" />
          </button>
          <span className="font-bold text-Verydarkblue">{amount}</span>
          <button onClick={handleIncreaseAmount}>
            <img src={plusImg} alt="plusImg" />
          </button>
        </div>
        <AddToCart
          handleAddCart={handleAddCart}
          price={price}
          amount={amount}
        />
      </div>
    </div>
  );
};
export default PriceControl;
