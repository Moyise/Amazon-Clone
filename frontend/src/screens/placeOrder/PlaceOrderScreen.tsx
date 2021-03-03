import React, { useEffect } from "react";
import "./placeOrderScreen.scss";
import { useDispatch, useSelector } from "react-redux";
import { reducerState } from "../../store";
import { ICartAll, ICart, IOrders } from "../../types";
import { addToCart } from "../../actions/cartActions";
import { createOrder } from "../../actions/orderActions";
import { useHistory, useLocation } from "react-router";
import { ORDER_DETAILS_RESET } from "../../constants/orderConstants";
import Meta from "../../components/Meta";

function PlaceOrderScreen() {
  const { pathname } = useLocation();
  const history = useHistory();
  const dispatch = useDispatch();

  const cart: ICartAll = useSelector((state: reducerState) => state.cart);
  const { cartItems, shippingAddress, paymentMethod } = cart;

  const orderCreate: IOrders = useSelector((state: reducerState) => state.orderCreate);
  const { order, success, error } = orderCreate;

  //Calculate Prices
  const addDecimals = (num: number) => {
    return Number((Math.round(num * 100) / 100).toFixed(2));
  };

  const itemsPrice = (cart.itemsPrice = addDecimals(
    Number(cartItems.reduce((acc, item) => acc + item.price * item.qty, 0).toFixed(2))
  ));

  const shippingPrice = (cart.shippingPrice = addDecimals(
    cart.itemsPrice > 200 ? 0 : 10
  ));

  const TBC = (cart.TBC = addDecimals(
    Number((cart.itemsPrice + cart.shippingPrice).toFixed(2))
  ));

  const taxPrice = (cart.taxPrice = addDecimals(
    Number((0.15 * cart.itemsPrice).toFixed(2))
  ));

  const totalPrice = (cart.totalPrice = Number(
    (cart.itemsPrice + cart.shippingPrice + cart.taxPrice).toFixed(2)
  ));

  useEffect(() => {
    window.scrollTo(0, 0);
    if (success) {
      dispatch({ type: ORDER_DETAILS_RESET });
      history.push(`/order/${order?._id}`);
    }
  }, [history, success, order, dispatch, pathname]);

  const placeOrderHandler = () => {
    //Dispatch placeorder
    dispatch(
      createOrder({
        orderItems: cartItems,
        shippingAddress,
        paymentMethod,
        itemsPrice,
        shippingPrice,
        TBC,
        taxPrice,
        totalPrice,
      })
    );
  };

  return (
    <>
      <Meta title="Place Order" />
      <div className="placeOrderScreen">
        <div className="placeOrderBackground">
          <div className="placeOrderTitle">Review your order</div>
          <div className="placeOrderContainer">
            <div className="placeOrderLeft">
              <div className="placeOrderCardTop">
                <div className="topLeft">
                  <h1 className="title">Shipping address</h1>
                  <p className="detail">{shippingAddress.name}</p>
                  <p className="detail">
                    {shippingAddress.address} {shippingAddress.city},{" "}
                    {shippingAddress.province} {shippingAddress.postalCode}{" "}
                    {shippingAddress.country}
                  </p>
                  <p className="detail">Phone: {shippingAddress.phone}</p>
                </div>
                <div className="topRight">
                  <h1 className="title">Payment method</h1>
                  <p className="detail">{paymentMethod}</p>
                </div>
              </div>
              <div className="placeOrderCardBottom">
                <h1 className="bottomTitle">Order Items:</h1>
                {cartItems &&
                  cartItems.map((item, index) => (
                    <div key={index}>
                      <div className="orderDetail">
                        <img src={item.image} alt={item.name} className="itemImage" />
                        <div className="itemDetails">
                          <h1 className="itemTitle">{item.name}</h1>
                          <p className="itemPrice">${item.price}</p>
                          <div className="qtySelect">
                            <span>Qty: </span>
                            <span>
                              <select
                                className="select"
                                value={item.qty}
                                onChange={(e: any) =>
                                  dispatch(
                                    addToCart(item.product, Number(e.target.value))
                                  )
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
                        </div>
                      </div>
                      <div className="line"></div>
                    </div>
                  ))}
              </div>
            </div>
            <div className="placeOrderRight">
              <h1 className="orderTitle">Order Summary</h1>
              <p className="orderDetails">
                <span>
                  Items (
                  {cartItems.reduce((acc: number, item: ICart) => acc + item.qty, 0)}):
                </span>
                <span>${itemsPrice}</span>
              </p>
              <p className="orderDetails">
                <span>Shipping & handling:</span>
                <span>${shippingPrice}</span>
              </p>
              <div className="line"></div>
              <p className="orderDetails">
                <span>Total before tax:</span>
                <span>${TBC}</span>
              </p>
              <p className="orderDetails">
                <span>Estimated tax:</span>
                <span>${taxPrice}</span>
              </p>
              <div className="line"></div>
              <p className="orderTotal">
                <span>Order total:</span>
                <span>${totalPrice}</span>
              </p>

              <button className="placeOrderButton" onClick={placeOrderHandler}>
                Place your order
              </button>

              {error && <p>{error}</p>}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default PlaceOrderScreen;
