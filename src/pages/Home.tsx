import ProductImages from "../features/Home/ProductImages";
import ProductInfo from "../features/Home/ProductInfo";

type CartTyps = {
  setAmount: (amount: number) => void;
  amount: number;
  price: number;
  handleAddCart: (price: number, amount: number) => void;
};

const Home = ({ setAmount, amount, price, handleAddCart }: CartTyps) => {
  return (
    <section className="py-20 relative">
      <article className="section-center p-5 gap-5 flex flex-col md:flex-row justify-center md:justify-evenly">
        <ProductImages />
        <ProductInfo
          setAmount={setAmount}
          amount={amount}
          price={price}
          handleAddCart={handleAddCart}
        />
      </article>
    </section>
  );
};

export default Home;
