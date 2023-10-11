import { useState } from "react";
import minusImg from "../../assets/icon-minus.svg";
import plusImg from "../../assets/icon-plus.svg";
import AddToCartBtn from "../../ui/AddToCartBtn";

const PriceControl = () => {
  const [price, setPrice] = useState<number>(125);
  const [amount, setAmount] = useState<number>(0);
  return (
    <div>
      <div className="mb-5">
        <h4 className="font-bold text-Verydarkblue">
          ${price}.00{" "}
          <span className="text-sm text-NormalOrange ml-3">50%</span>
        </h4>
        <del className="font-bold text-Grayishblue">$250.00</del>
      </div>
      {/* price control */}
      <div className="flex items-center justify-between">
        <div className="flex items-center justify-between w-[7rem]">
          <button>
            <img src={minusImg} alt="" />
          </button>
          <span className="font-bold text-Verydarkblue">{amount}</span>
          <button>
            <img src={plusImg} alt="" />
          </button>
        </div>
        <AddToCartBtn />
      </div>
    </div>
  );
};
export default PriceControl;
