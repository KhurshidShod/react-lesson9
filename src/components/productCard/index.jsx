import styles from "./ProductCard.module.css";
import PropTypes from "prop-types";

const ProductCard = ({ name, desc, image, price }) => {
  return (
    <div className={styles["card"]}>
      <div className={styles["card-border-top"]}></div>
      <div className={styles["img"]}>
        <img src={image} alt="" />
      </div>
      <span> {name}</span>
      <p className={styles["job"]}> {desc}</p>
      <button>{price}</button>
    </div>
  );
};

ProductCard.propTypes = {
  name: PropTypes.string,
  desc: PropTypes.string,
  image: PropTypes.string,
  price: PropTypes.string
};

export default ProductCard;
