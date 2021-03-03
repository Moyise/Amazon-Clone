import React, { useEffect, useRef, useState } from "react";
import { useHistory, useLocation, useRouteMatch } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { reducerState } from "../../store";
import { createProductReview, listProductDetails } from "../../actions/productActions";
import { IData, IReviews, IUserLogin } from "../../types";
import "./productScreen.scss";
import { PRODUCT_CREATE_REVIEW_RESET } from "../../constants/productConstants";
import Rating from "../../components/Rating/Rating";
import Meta from "../../components/Meta";

interface RouteParams {
  id: string;
}

const ProductScreen = () => {
  const mql = window.matchMedia("(min-width: 958px)").matches;
  const match = useRouteMatch<RouteParams>();
  const history = useHistory();
  const { pathname } = useLocation();

  const productDetails: IData = useSelector(
    (state: reducerState) => state.productDetails
  );
  const { product, error, loading } = productDetails;

  const productCreateReview: IReviews = useSelector(
    (state: reducerState) => state.productCreateReview
  );
  const {
    error: errorProductReview,
    success: successProductReview,
  } = productCreateReview;

  const userLogin: IUserLogin = useSelector((state: reducerState) => state.userLogin);
  const { userInfo } = userLogin;

  const [open, setOpen] = useState(false);
  const [image, setImage] = useState("");
  const [show, setShow] = useState(false);
  const [qty, setQty] = useState(1);
  const [title, setTitle] = useState("");
  const [rating, setRating] = useState(0);
  const [comment, setComment] = useState("");
  const [message, setMessage] = useState("");

  const el = useRef(null);

  const mouseMoveHandler = (e: any) => {
    if (mql) {
      const offsetX = e.clientX;
      const offsetY = e.clientY;

      const rect = el.current as any;

      const x = offsetX - rect.getBoundingClientRect().left;
      const y = offsetY - rect.getBoundingClientRect().top;

      const first: HTMLElement | null = document.getElementById("recta");
      first?.setAttribute(
        "style",
        `left: ${x}px; top: ${y}px; transform: translate(-50%, -50%)`
      );

      setShow(true);
      const zoom: HTMLElement | null = document.getElementById("zoom");
      const ratio = 1.5;
      const origWidth = e.target.clientWidth;
      const origHeight = e.target.clientHeight;
      const xx = x * ratio;
      const yy = y * ratio;

      zoom?.setAttribute(
        "style",
        `background-image: url("${image ? image : product.image}"); background-size: ${
          origWidth * ratio
        }px ${origHeight * ratio}px; background-position: -${xx}px -${yy}px;`
      );
    }
  };

  const dispatch = useDispatch();

  const id = match.params.id;
  const profPic = userInfo?.image;

  useEffect(() => {
    window.scrollTo(0, 0);
    if (successProductReview) {
      setMessage("Thanks for reviewing this product.");
      setTitle("");
      setRating(0);
      setComment("");
      dispatch({ type: PRODUCT_CREATE_REVIEW_RESET });
    }
    dispatch(listProductDetails(id));
  }, [dispatch, id, pathname, successProductReview]);

  const addToCartHandler = () => {
    history.push(`/cart/${id}/?qty=${qty}`);
  };

  const submitHandler = (e: any) => {
    e.preventDefault();
    //Dispatch Create Review
    dispatch(createProductReview(id, { title, rating, comment, profPic }));
  };

  const signinHandler = () => {
    history.push(`/signin?redirect=products/${product._id}`);
  };

  return (
    <>
      <Meta title={product.name} />
      <div className="productScreen">
        <div className="productBackground">
          {loading ? (
            <i
              className="fas fa-spinner fa-spin"
              style={{ color: "rgba(255, 168, 0, 0.9)" }}
            ></i>
          ) : error ? (
            <p style={{ color: "white" }}>Error</p>
          ) : (
            <>
              <div className="productContainer">
                <div className="productImages">
                  {product.images &&
                    product.images.map((image: string, index: number) => (
                      <img
                        key={index}
                        className="imageCard"
                        src={`${image}`}
                        alt={product.name}
                        onMouseOver={() => setImage(image)}
                      />
                    ))}
                </div>
                <div
                  ref={el}
                  className="productImage"
                  onMouseMove={(e) => mouseMoveHandler(e)}
                  onMouseLeave={() => setShow(false)}
                >
                  <div id="recta" className={show ? "rect show" : "rect"}></div>

                  <img
                    src={image ? image : product.image}
                    alt={product.name}
                    className="imgPrev"
                  />
                </div>
                <div
                  id="zoom"
                  className={show ? "zoomContainer show" : "zoomContainer"}
                ></div>
                <div className="productDetails">
                  <h1 className="pdTitle">{product.name}</h1>
                  <p className="pBrand">Brand: {product.brand}</p>
                  <div className="pStar">
                    <Rating value={product.rating} />
                  </div>
                  <p className="pDescription">{product.description}</p>
                </div>
                <div className="productAddToCart">
                  <h1 className="pPrice">${product.price}</h1>
                  <p className={product.countInStock > 0 ? "pStock" : "pStock out"}>
                    {product.countInStock >= 5
                      ? "In Stock"
                      : product.countInStock > 0
                      ? `${product.countInStock} Left`
                      : "Out of Stock"}
                  </p>
                  {product.countInStock > 0 && (
                    <div className="pQty">
                      <span>Qty: </span>
                      <span>
                        <select
                          className="select"
                          value={qty}
                          onChange={(e: any) => setQty(e.target.value)}
                        >
                          {[...Array(product.countInStock).keys()].map((x) => (
                            <option key={x + 1} value={x + 1} className="option">
                              {x + 1}
                            </option>
                          ))}
                        </select>
                      </span>
                    </div>
                  )}

                  <button
                    className={
                      product.countInStock === 0
                        ? "pButtonContainer out"
                        : "pButtonContainer"
                    }
                    onClick={addToCartHandler}
                    disabled={product.countInStock === 0}
                  >
                    <p className="pButton">Add to Cart</p>
                  </button>
                </div>
              </div>

              <div className="productReview">
                <div className="reviewLeft">
                  <div className="reviewCard">
                    <div className="CreateReviewTitle">Review this product</div>
                    <p>Share your thoughts with other customers</p>
                    <div
                      className="writeReview"
                      onClick={userInfo ? () => setOpen(true) : () => setOpen(false)}
                    >
                      {userInfo ? (
                        <span>Write a customer review</span>
                      ) : (
                        <span onClick={signinHandler} className="reviewLink">
                          Sign In to write a Review
                        </span>
                      )}
                    </div>
                  </div>
                  <div className={open ? "writeReviewCard open" : "writeReviewCard"}>
                    <form className="reviewForm" onSubmit={submitHandler}>
                      <div className="reviewFormGroup">
                        <label className="formLabel">Title</label>
                        <input
                          type="text"
                          name="title"
                          value={title}
                          className="formInput"
                          required
                          maxLength={100}
                          onChange={(e) => setTitle(e.target.value)}
                        />
                      </div>

                      <div className="reviewFormGroup">
                        <label className="formLabel">Rating</label>
                        <select
                          className="select"
                          value={rating}
                          onChange={(e) => setRating(Number(e.target.value))}
                        >
                          <option value="" className="option">
                            Select
                          </option>
                          <option value="1" className="option">
                            1 - Poor
                          </option>
                          <option value="2" className="option">
                            2 - Fair
                          </option>
                          <option value="3" className="option">
                            3 - Good
                          </option>
                          <option value="4" className="option">
                            4 - Very Good
                          </option>
                          <option value="5" className="option">
                            5 - Excellent
                          </option>
                        </select>
                      </div>

                      <div className="reviewFormGroup">
                        <label className="formLabel">Comment</label>
                        <textarea
                          name="comment"
                          value={comment}
                          className="formTextarea"
                          required
                          onChange={(e) => setComment(e.target.value)}
                        ></textarea>
                      </div>

                      <button type="submit" className="formSubmit">
                        Submit
                      </button>
                    </form>
                    <p className="revMessage">{message}</p>
                    {errorProductReview && (
                      <p className="errMessage">{errorProductReview}</p>
                    )}
                  </div>
                </div>
                <div className="reviewRight">
                  {!product.reviews?.length && (
                    <p className="noReview">No Reviews added</p>
                  )}
                  {product.reviews?.map((review) => (
                    <div key={review._id} className="reviewsCard">
                      <div className="reviewsTop">
                        <img
                          src={review.image}
                          alt={review.name}
                          className="profileImg"
                        />
                        <h1 className="profileName">{review.name}</h1>
                      </div>
                      <div className="reviewsBottom">
                        <div className="reviewRating">
                          <Rating value={review.rating} />
                        </div>
                        <p className="reviewTitle">{review.title}</p>
                      </div>
                      <p className="reviewDate">
                        Reviewed on {review.createdAt.substring(0, 10)}
                      </p>
                      <p className="reviewDescription">{review.comment}</p>
                    </div>
                  ))}
                </div>
              </div>
            </>
          )}
        </div>
      </div>
    </>
  );
};

export default ProductScreen;
