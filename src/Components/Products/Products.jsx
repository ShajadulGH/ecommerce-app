import React from "react";
import styles from "./Products.module.scss";
import FilterProduct from "./FilterProduct/FilterProduct";
import ProductLIst from "./ProductList/ProductLIst";
const Products = () => {
  return (
    <section>
      <div className={`container ${styles.product}`}>
        <aside className={styles.filter}>
          <FilterProduct />
        </aside>
        <div className={styles.content}>
          <ProductLIst />
        </div>
      </div>
    </section>
  );
};

export default Products;
