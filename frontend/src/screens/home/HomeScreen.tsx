import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation, useRouteMatch } from "react-router";
import { listProducts } from "../../actions/productActions";
import Home from "../../components/Home/Home";
import Meta from "../../components/Meta";
import Product from "../../components/Product/Product";
import { reducerState } from "../../store";
import { IProductData } from "../../types";
import "./homeScreen.scss";

interface IMatch {
  keyword: string;
}

const HomeScreen = () => {
  const { pathname } = useLocation();
  const match = useRouteMatch<IMatch>();
  const keyword = match.params.keyword;

  const dispatch = useDispatch();

  const productList: IProductData = useSelector(
    (state: reducerState) => state.productList
  );
  const { products, error, loading } = productList;

  useEffect(() => {
    window.scrollTo(0, 0);
    dispatch(listProducts(keyword));
  }, [dispatch, keyword, pathname]);

  return (
    <>
      <Meta
        title="Online Shopping for Electronics, Computers, ..."
        description="We sell Electronics, Computers, Video Games"
        keywords="Laptop, Computer,Fashion, buy shoes, cheap shoes"
      />
      <Home />
      <div id="main" className="homeScreen">
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

export default HomeScreen;
