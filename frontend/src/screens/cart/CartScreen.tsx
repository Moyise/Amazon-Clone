import React, { useEffect } from "react";
import "./cartScreen.scss";
import { useHistory, useLocation, useRouteMatch } from "react-router";
import { addToCart, removeFromCart } from "../../actions/cartActions";
import { useDispatch, useSelector } from "react-redux";
import { reducerState } from "../../store";
import { ICartAll } from "../../types";
import { Link } from "react-router-dom";
import Meta from "../../components/Meta";

interface RouteParams {
  id: string;
}

function CartScreen() {
  const history = useHistory();
  const match = useRouteMatch<RouteParams>();
  const { pathname, search } = useLocation();

  const productId = match.params.id;

  const qty = search ? Number(search.split("=")[1]) : 1;

  const dispatch = useDispatch();

  const cart: ICartAll = useSelector((state: reducerState) => state.cart);

  const { cartItems } = cart;

  useEffect(() => {
    window.scrollTo(0, 0);
    if (productId) {
      dispatch(addToCart(productId, qty));
    }
  }, [dispatch, productId, qty, pathname]);

  const removeFromCartHandler = (id: string) => {
    dispatch(removeFromCart(id));
  };

  const checkoutHandler = () => {
    history.push("/signin?redirect=shipping");
  };

  return (
    <>
      <Meta title="Shopping Cart" />
      <div className="cart">
        <div className="cartBackground">
          <h1 className="cartTitle">Shopping Cart</h1>
          <div className="cartCenter">
            {!cartItems.length ? (
              <p className="emptyCartWrap">
                <span>Your Cart Is Empty</span>
                <Link to="/" className="emptyCart">
                  Shop Now
                </Link>
              </p>
            ) : (
              <div className="cartLeft">
                {cartItems.map((item) => (
                  <div key={item.product} className="cardItem">
                    <img src={item.image} alt={item.name} className="itemImage" />
                    <div className="itemDetails">
                      <Link to={`/products/${item.product}`} className="itemTitle">
                        {item.name}
                      </Link>
                      <p className="itemStock">
                        {item.countInStock >= 5
                          ? "In Stock"
                          : item.countInStock > 0
                          ? `${item.countInStock} Left`
                          : "Out of Stock"}
                      </p>
                      <div className="ItemQty">
                        <div className="qtySelect">
                          <span>Qty: </span>
                          <span>
                            <select
                              className="select"
                              value={item.qty}
                              onChange={(e) =>
                                dispatch(addToCart(item.product, Number(e.target.value)))
                              }
                            >
                              {[...Array(item.countInStock).keys()].map((x) => (
                                <option key={x + 1} value={x + 1} className="option">
                                  {x + 1}
                                </option>
                              ))}
                            </select>
                          </span>
                        </div>
                        <p
                          className="removeItem"
                          onClick={() => removeFromCartHandler(item.product)}
                        >
                          Delete
                        </p>
                      </div>
                    </div>
                    <h1 className="itemPrice">${item.price}</h1>
                  </div>
                ))}
              </div>
            )}

            <div className="cartRight">
              <p className="subtotal">
                Subtotal ({cartItems.reduce((acc, item) => acc + item.qty, 0)}): $
                {cartItems
                  .reduce((acc, item) => acc + item.qty * item.price, 0)
                  .toFixed(2)}
              </p>
              {!cartItems.length ? (
                ""
              ) : (
                <button onClick={checkoutHandler} className="itemCheckout">
                  Proceed to Checkout
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default CartScreen;
