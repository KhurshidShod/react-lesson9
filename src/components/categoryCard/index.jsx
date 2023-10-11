import { useNavigate } from "react-router-dom";
import styles from "./CategoryCard.module.css";
import PropTypes from "prop-types";

const CategoryCard = ({ id, image, title }) => {
  const navigate = useNavigate()

  const navigateToProducts = (id) => {
    navigate(`/${id}`)
  }
  return (
    <div className={styles["component-card"]} onClick={() => navigateToProducts(id)}>
      <div className={styles["component-card-inner"]}>
        <div className={styles["component-card-image"]}>
          <img src={image} alt="" />
        </div>
        <div className={styles["component-card-title"]}>{title}</div>
      </div>
    </div>
  );
};

CategoryCard.propTypes = {
  image: PropTypes.string,
  title: PropTypes.string,
  id: PropTypes.number,
};

export default CategoryCard;
