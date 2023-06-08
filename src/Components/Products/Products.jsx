import React, { useEffect } from "react";
import styles from "./Products.module.scss";
import FilterProduct from "./FilterProduct/FilterProduct";
import ProductList from "./ProductList/ProductLIst";
import FetchData from "../../CustomHooks/FetchData";
import { useDispatch, useSelector } from "react-redux";
import {
  STORE_PRODUCTS,
  selectProducts,
} from "../../Redux/Features/prouctsSlice";

const Products = () => {
  const { allProducts, isLoading } = FetchData("products");

  const products = useSelector(selectProducts);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(
      STORE_PRODUCTS({
        allProducts,
      })
    );
  }, [allProducts, dispatch]);
  return (
    <section>
      <div className={`container ${styles.product}`}>
        <aside className={styles.filter}>
          <FilterProduct />
        </aside>
        <div className={styles.content}>
          <ProductList products={allProducts} />
        </div>
      </div>
    </section>
  );
};

export default Products;
