import { useNavigate, useParams } from "react-router-dom";
import styles from "./Products.module.css";
import { useEffect, useState } from "react";
import axios from "axios";
import ProductCard from "../../components/productCard";
import { IoIosArrowRoundBack } from 'react-icons/io'

const Product = () => {
  const [products, setProducts] = useState(null);
  const id = useParams().category;
  const navigate = useNavigate()
  useEffect(() => {
    axios(
      `https://64b2f06c38e74e386d55bed8.mockapi.io/categories/${id}/products`
    ).then((res) => setProducts(res.data));
  }, [id]);
  return (
    <section className={styles["products"]}>
      <button className={styles['go-back']} onClick={() => navigate('/')}><IoIosArrowRoundBack size={30} /> Back</button>
      <section className={styles["products-wrapper"]}>
        {products?.map((prod) => (
          <ProductCard
            key={prod.id}
            name={prod.name}
            desc={prod.description}
            image={prod.image}
            price={prod.price}
          />
        ))}
      </section>
    </section>
  );
};

export default Product;
