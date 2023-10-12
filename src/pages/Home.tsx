import ProductImages from "../features/Home/ProductImages";
import ProductInfo from "../features/Home/ProductInfo";

const Home = () => {
  return (
    <section className="py-20">
      <article className="section-center p-5 gap-5 flex flex-col md:flex-row justify-center md:justify-evenly">
        <ProductImages />
        <ProductInfo />
      </article>
    </section>
  );
};

export default Home;
