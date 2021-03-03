import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation, useRouteMatch } from "react-router";
import { reducerState } from "../../store";
import { IProductData } from "../../types";
import Product from "../../components/Product/Product";
import "./searchScreen.scss";
import { listProducts } from "../../actions/productActions";
import Meta from "../../components/Meta";

interface IMatch {
  keyword: string;
}

const SearchScreen = () => {
  const match = useRouteMatch<IMatch>();
  const keyword = match.params.keyword;

  const dispatch = useDispatch();
  const { pathname } = useLocation();

  const productList: IProductData = useSelector(
    (state: reducerState) => state.productList
  );
  const { products, error, loading } = productList;

  useEffect(() => {
    window.scrollTo(0, 0);
    dispatch(listProducts(keyword));
  }, [dispatch, pathname, keyword]);

  return (
    <>
      <Meta title={keyword} />
      <div className="searchScreen">
        <div className="product">
          {loading ? (
            <i
              className="fas fa-spinner fa-spin"
              style={{ color: "rgba(255, 168, 0, 0.9)" }}
            ></i>
          ) : error ? (
            <p className="homeError">{error}</p>
          ) : (
            <div className="productRow">
              {!products.length ? (
                <p className="empty">No Product added yet. SORRY ":(" </p>
              ) : (
                products.map((product) => (
                  <Product key={product.name} product={product} />
                ))
              )}
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default SearchScreen;
