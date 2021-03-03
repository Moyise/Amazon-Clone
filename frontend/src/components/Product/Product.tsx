import React, { FunctionComponent } from "react";
import "./product.scss";
import { IProduct } from "../../types";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addToCart } from "../../actions/cartActions";
import Rating from "../Rating/Rating";

const Product: FunctionComponent<IProduct> = ({ product }) => {
  const dispatch = useDispatch();

  return (
    <>
      <div className="productCard">
        <Link to={`/products/${product._id}`} className="productImg">
          <img src={product.image} alt={product.name} />
        </Link>
        <div className="productInfo">
          <Link to={`/products/${product._id}`} className="pTitle">
            {product.name.substring(0, 30)}...
          </Link>
          <p className="pPrice">${product.price}</p>
        </div>
        <div className="productRating">
          <Rating value={product.rating} />
        </div>
        <button
          className={product.countInStock === 0 ? "pButton out" : "pButton"}
          onClick={() => dispatch(addToCart(product._id, 1))}
          disabled={product.countInStock === 0}
        >
          Add to Cart
        </button>
      </div>
    </>
  );
};

export default Product;
