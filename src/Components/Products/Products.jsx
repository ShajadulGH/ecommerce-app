import React, { useEffect, useState } from "react";
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
import { FaCogs } from "react-icons/fa";

const Products = () => {
  const { allProducts, isLoading } = FetchData("products");
  const [showFilter, setShowFilter] = useState(false);

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
  const toggleFilter = () => {
    setShowFilter(!showFilter);
  };
  return (
    <section>
      <div className={`container ${styles.product}`}>
        <aside
          className={
            showFilter ? `${styles.filter} ${styles.show}` : `${styles.filter}`
          }
        >
          {isLoading ? null : <FilterProduct />}
        </aside>
        <div className={styles.content}>
          <ProductList products={allProducts} />
          <div className={styles.icon} onClick={toggleFilter}>
            <FaCogs size={20} color="orangered" />
            <p>
              <b>{showFilter ? "Hide Filter" : "Show Filter"}</b>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Products;
