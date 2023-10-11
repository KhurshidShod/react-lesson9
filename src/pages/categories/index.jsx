import axios from "axios";
import { useEffect, useState } from "react";
import styles from "./Categories.module.css";
import CategoryCard from "../../components/categoryCard";
import { HiLogout } from "react-icons/hi";
import { useNavigate } from "react-router-dom";
import PropTypes from "prop-types";

const Categories = ({ setIsAuth }) => {
  const [categories, setCategories] = useState();
  const [modalOpen, setModalOpen] = useState(false);
  const navigate = useNavigate();
  useEffect(() => {
    return () =>
      axios
        .get("https://64b2f06c38e74e386d55bed8.mockapi.io/categories")
        .then((res) => setCategories(res.data))
        .catch((err) => console.log(err));
  }, []);
  return (
    <section className={styles["categories"]}>
      <button
        className={styles["logout"]}
        onClick={() => {
          localStorage.removeItem("isAuth");
          setIsAuth(false);
          navigate("/");
        }}
      >
        Logout <HiLogout />
      </button>
      <button className={styles["add"]} onClick={() => setModalOpen(true)}>
        Add category
      </button>
      <div className={styles["categories-wrapper"]}>
        {categories &&
          categories.map((cat) => (
            <CategoryCard
              key={cat.id}
              title={cat.category}
              id={cat.id}
              image={cat.image}
            />
          ))}
      </div>
    </section>
  );
};

Categories.propTypes = {
  setIsAuth: PropTypes.func,
};

export default Categories;
