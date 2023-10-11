import { useFormik } from "formik";
import userSchema from "../../schemas/userSchema";
import styles from "./Login.module.css";
import * as yup from "yup";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

const Login = ({ setIsAuth }) => {
  const navigate = useNavigate();
  const formik = useFormik({
    initialValues: {
      fullName: "",
      email: "",
      password: "",
    },
    validationSchema: userSchema,
    onSubmit: () => {
      try {
        localStorage.setItem("isAuth", true);
        setIsAuth(true);
        navigate("/");
        toast.success("Logged in successfully");
      } catch (err) {
        console.log(err);
      }
    },
  });
  return (
    <section className={styles["login"]}>
      <div className="container">
        <div className={styles["form-container"]}>
          <form className={styles["form"]} onSubmit={formik.handleSubmit}>
            <div className={styles["form-group"]}>
              <label htmlFor="fullName">Fullname</label>
              <input
                type="text"
                id={styles["fullName"]}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.fullName}
                name="fullName"
                className={
                  formik.touched.fullName && formik.errors.fullName
                    ? styles["invalid-input"]
                    : null
                }
              />
              <span className="text-danger">
                {formik.touched.fullName && formik.errors.fullName
                  ? `${formik.errors.fullName}`
                  : null}
              </span>
            </div>
            <div className={styles["form-group"]}>
              <label htmlFor="email">Email</label>
              <input
                type="text"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.email}
                id={styles["email"]}
                name="email"
                className={
                  formik.touched.email && formik.errors.email
                    ? styles["invalid-input"]
                    : null
                }
              />
              <span className="text-danger">
                {formik.touched.email && formik.errors.email
                  ? `${formik.errors.email}`
                  : null}
              </span>
            </div>
            <div className={styles["form-group"]}>
              <label htmlFor="email">Password</label>
              <input
                type="password"
                id={styles["email"]}
                name="password"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.password}
                required
                className={
                  formik.touched.password && formik.errors.password
                    ? styles["invalid-input"]
                    : null
                }
              />
              <span className="text-danger">
                {formik.touched.password && formik.errors.password
                  ? `${formik.errors.password}`
                  : null}
              </span>
            </div>
            <button className={styles["form-submit-btn"]} type="submit">
              Submit
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Login;
