import React, { useEffect } from "react";
import styles from "./Products.module.scss";
import FilterProduct from "./FilterProduct/FilterProduct";
import ProductList from "./ProductList/ProductLIst";
import FetchData from "../../CustomHooks/FetchData";
import { useDispatch, useSelector } from "react-redux";
import {
  STORE_PRODUCTS,
  GET_PRICE_RANGE,
  selectProducts,
} from "../../Redux/Features/prouctsSlice";

const Products = () => {
  const { allProducts, isLoading } = FetchData("products");
  console.log(allProducts);
  const products = useSelector(selectProducts);
  console.log(products);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(
      STORE_PRODUCTS({
        allProducts,
      })
    );
  }, [allProducts, dispatch]);
  useEffect(() => {
    dispatch(
      GET_PRICE_RANGE({
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
