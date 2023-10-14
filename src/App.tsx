import { useState, useEffect } from "react";
import Home from "./pages/Home";
import Navbar from "./ui/Navbar";
type CartItemType = {
  name: string;
  amount: number;
  price: number;
};
function App() {
  const [price, setPrice] = useState<number>(125);
  const [amount, setAmount] = useState<number>(1);
  const [cartItem, setCartItem] = useState<CartItemType>({
    name: "",
    amount: 0,
    price: 0,
  });
  const handleAddCart = (price: number, amount: number): void => {
    setCartItem({
      name: "Fall Limited Edition Sneakers",
      amount: amount,
      price: price,
    });
  };
  const handleRemoveItem = (): void => {
    setCartItem({ name: "", amount: 0, price: 0 });
    setAmount(1);
  };
  useEffect(() => {
    setPrice(amount * 125);
  }, [amount]);
  return (
    <main>
      <Navbar cartItem={cartItem} handleRemoveItem={handleRemoveItem} />
      <Home
        price={price}
        setAmount={setAmount}
        amount={amount}
        handleAddCart={handleAddCart}
      />
    </main>
  );
}

export default App;
