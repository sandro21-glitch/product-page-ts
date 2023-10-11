import ProductImages from "../features/Home/ProductImages";
import ProductInfo from "../features/Home/ProductInfo";

const Home = () => {
  return (
    <section className="py-20">
      <article className="section-center flex justify-evenly">
        <ProductImages />
        <ProductInfo />
      </article>
    </section>
  );
};

export default Home;
