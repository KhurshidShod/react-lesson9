import { useNavigate, useParams } from "react-router-dom";
import styles from "./Products.module.css";
import { useEffect, useState } from "react";
import axios from "axios";
import ProductCard from "../../components/productCard";
import { IoIosArrowRoundBack } from "react-icons/io";

const Product = () => {
  const [products, setProducts] = useState(null);
  const [search, setSearch] = useState();
  const [order, setOrder] = useState()
  const id = useParams().category;
  const navigate = useNavigate();

  useEffect(() => {
    axios(
      `https://64b2f06c38e74e386d55bed8.mockapi.io/categories/${id}/products`,
      { params: { search, sortBy: 'price', order: order } }
    ).then((res) => setProducts(res.data));
  }, [id, search, order]);

  // const sortByPrice = (order) => {
  //   if (order !== "def") {
  //     axios(
  //       `https://64b2f06c38e74e386d55bed8.mockapi.io/categories/${id}/products`,
  //       { params: { search, sortBy: "price", order } }
  //     ).then((res) => setProducts(res.data));
  //   } else {
  //     axios(
  //       `https://64b2f06c38e74e386d55bed8.mockapi.io/categories/${id}/products`,
  //       { params: { search } }
  //     ).then((res) => setProducts(res.data));
  //   }
  // };

  return (
    <section className={styles["products"]}>
      <button className={styles["go-back"]} onClick={() => navigate("/")}>
        <IoIosArrowRoundBack size={30} /> Back
      </button>
      <div className={styles["products-header"]}>
        <input
          type="text"
          onChange={(e) => setSearch(e.target.value)}
          name="search"
          id="search"
        />
        <select name="" id="" onChange={(e) => setOrder(e.target.value)}>
          <option value="">Def</option>
          <option value="asc">Asc</option>
          <option value="desc">Desc</option>
        </select>
      </div>
      <div className={styles["products-wrapper"]}>
        {products?.map((prod) => (
          <ProductCard
            key={prod.id}
            name={prod.name}
            desc={prod.description}
            image={prod.image}
            price={prod.price}
          />
        ))}
      </div>
    </section>
  );
};

export default Product;
