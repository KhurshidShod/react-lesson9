import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Categories from "./pages/categories";
import { useState } from "react";
import Login from "./pages/login";
import Layout from "./components/layout";

import "bootstrap/dist/css/bootstrap.min.css";
import Product from "./pages/products";

function App() {
  const [isAuth, setIsAuth] = useState(
    JSON.parse(localStorage.getItem("isAuth"))
  );
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route
            path="/"
            element={isAuth ? <Categories setIsAuth={setIsAuth} /> : <Login setIsAuth={setIsAuth} />}
          />
          <Route path="/:category" element={<Product />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
