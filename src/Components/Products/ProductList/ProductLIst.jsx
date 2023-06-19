import React, { useEffect, useState } from "react";
import styles from "./ProductList.module.scss";
import { BsFillGridFill } from "react-icons/bs";
import { FaListAlt } from "react-icons/fa";
import ProductItem from "../ProductItem/ProductItem";
import Search from "../../Search/Search";
import { useDispatch, useSelector } from "react-redux";
import {
  FILTER_BY_SEARCH,
  SORT_PRODUCTS,
} from "../../../Redux/Features/filterSlice";
import { selectFilteredProducts } from "../../../Redux/Features/filterSlice";
const ProductList = ({ products }) => {
  const [grid, setGrid] = useState(true);
  const [search, setSearch] = useState("");
  const [sort, setSort] = useState("");
  console.log(sort);
  const dispatch = useDispatch();
  const filteredProducts = useSelector(selectFilteredProducts);
  // Filter by sort
  useEffect(() => {
    dispatch(SORT_PRODUCTS({ products, sort }));
  }, [dispatch, products, sort]);
  // Filter by search
  useEffect(() => {
    dispatch(FILTER_BY_SEARCH({ products, search }));
  }, [dispatch, products, search]);

  return (
    <div className={styles["product-list"]} id="product">
      <div className={styles.top}>
        <div className={styles.icons}>
          <BsFillGridFill
            size={22}
            color="orangered"
            onClick={() => setGrid(true)}
          />

          <FaListAlt size={24} color="#0066d4" onClick={() => setGrid(false)} />

          <p>
            <b>{filteredProducts.length}</b> Products found.
          </p>
        </div>
        {/* Search Icon */}
        <div>
          <Search value={search} onChange={(e) => setSearch(e.target.value)} />
        </div>
        <div className={styles.sort}>
          <label>Sort by:</label>
          <select value={sort} onChange={(e) => setSort(e.target.value)}>
            <option value="latest">Latest</option>
            <option value="lowest-price">Lowest Price</option>
            <option value="highest-price">Highest Price</option>
            <option value="a-z">A - Z</option>
            <option value="z-a">Z - A</option>
          </select>
        </div>
      </div>

      <div className={grid ? `${styles.grid}` : `${styles.list}`}>
        {products.lenght === 0 ? (
          <p>No products found.</p>
        ) : (
          <>
            {filteredProducts.map((product) => {
              return (
                <div key={product.id}>
                  <ProductItem {...product} grid={grid} />
                </div>
              );
            })}
          </>
        )}
      </div>
    </div>
  );
};

export default ProductList;
