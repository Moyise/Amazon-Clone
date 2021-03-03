import React, { useEffect, useState } from "react";
import axios from "axios";
import { PayPalButton } from "react-paypal-button-v2";
import "./orderScreen.scss";
import { useDispatch, useSelector } from "react-redux";
import { useHistory, useLocation, useRouteMatch } from "react-router";
import { reducerState } from "../../store";
import { IOrders, IUserLogin, IPay } from "../../types";
import { ORDER_PAY_RESET } from "../../constants/orderConstants";
import { getOrderDetails, payOrder } from "../../actions/orderActions";
import StripeCheckout from "react-stripe-checkout";
import { Link } from "react-router-dom";
import { stripeKey } from "../../settingsEnv";
import Meta from "../../components/Meta";

interface RouteParams {
  id: string;
}

function OrderScreen() {
  const history = useHistory();
  const match = useRouteMatch<RouteParams>();
  const orderId = match.params.id;
  const { pathname } = useLocation();

  const [sdkReady, setSdkReady] = useState(false);
  const [paid, setPaid] = useState(false);

  const dispatch = useDispatch();

  const orderDetails: IOrders = useSelector((state: reducerState) => state.orderDetails);
  const { order, loading, error } = orderDetails;

  const userLogin: IUserLogin = useSelector((state: reducerState) => state.userLogin);
  const { userInfo } = userLogin;

  const orderPay: IPay = useSelector((state: reducerState) => state.orderPay);
  const { loading: loadingPay, success: successPay } = orderPay;

  useEffect(() => {
    window.scrollTo(0, 0);
    if (!userInfo) {
      history.push("/login");
    }

    const addPayPalScript = async () => {
      const { data: clientId } = await axios.get("/api/config/paypal");
      const script = document.createElement("script");
      script.type = "text/javascript";
      script.src = `https://www.paypal.com/sdk/js?client-id=${clientId}`;
      script.async = true;
      script.onload = () => {
        setSdkReady(true);
      };

      document.body.appendChild(script);
    };

    //dispatch(getOrderDetails(orderId));
    if (!order || successPay) {
      dispatch({ type: ORDER_PAY_RESET });

      dispatch(getOrderDetails(orderId));
    } else if (!order.isPaid) {
      if (!window.paypal) {
        addPayPalScript();
      } else {
        setSdkReady(true);
      }
    }
  }, [dispatch, orderId, successPay, order, history, userInfo, pathname]);

  const successPaymentHandler = (paymentResults: any) => {
    dispatch(payOrder(orderId, paymentResults));
  };

  const onToken = async (token: any) => {
    try {
      const price = order?.totalPrice.toFixed(2);
      const name = userInfo?.name;

      const config = {
        headers: {
          "Content-Type": "application/json",
        },
      };

      const { data } = await axios.post("/api/stripe", { price, name, token }, config);
      if (data.status === "succeeded") {
        const status = data.status;
        const receipt_email = data.receipt_email;
        const id = data.id;
        const paymentResults = {
          status,
          receipt_email,
          id,
        };
        dispatch(payOrder(orderId, paymentResults));
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <Meta title="Order Details" />
      <div className="orderScreen">
        <div className="orderBackground">
          <div className="orderTitle">Pay your order</div>
          <div className="orderContainer">
            <div className="orderLeft">
              <div className="orderCardTop">
                <div className="topLeft">
                  <h1 className="title">Shipping address</h1>
                  <p className="detail">{order?.shippingAddress.name}</p>
                  <p className="detail">
                    {order?.shippingAddress.address} {order?.shippingAddress.city},{" "}
                    {order?.shippingAddress.province} {order?.shippingAddress.postalCode}{" "}
                    {order?.shippingAddress.country}
                  </p>
                  <p className="detail">Phone: {order?.shippingAddress.phone}</p>
                </div>
                <div className="topMiddle">
                  <h1 className="title">Status</h1>
                  <p className={order?.isPaid ? "status done" : "status"}>
                    {order?.isPaid
                      ? `Paid ${order.paidAt?.substring(0, 10)}`
                      : "Not Paid"}
                  </p>
                  <p className={order?.isDelivered ? "status done" : "status"}>
                    {order?.isDelivered ? "Delivered" : "Not Delivered"}
                  </p>
                </div>
                <div className="topRight">
                  <h1 className="title">Payment method</h1>
                  <p className="detail">{order?.paymentMethod}</p>
                </div>
              </div>
              <div className="orderCardBottom">
                <h1 className="bottomTitle">Order Items:</h1>
                {order?.isPaid
                  ? order?.orderItems.map((item) => (
                      <div key={item.product}>
                        <div className="orderDetail">
                          <img src={item.image} alt={item.name} className="itemImage" />
                          <div className="itemDetails">
                            <h1 className="itemTitle">{item.name}</h1>
                            <p className="itemPrice">${item.price}</p>
                            <p className="itemPrice">
                              {item.qty} x {item.price} = $
                              {(item.qty * item.price).toFixed(2)}
                            </p>
                            <div className="paidDetails">
                              <Link to={`/products/${item.product}`} className="paidLink">
                                Leave a review
                              </Link>
                              <Link to={`/products/${item.product}`} className="paidLink">
                                Buy again
                              </Link>
                            </div>
                          </div>
                        </div>
                        <div className="line"></div>
                      </div>
                    ))
                  : order?.orderItems.map((item) => (
                      <div key={item.product}>
                        <div className="orderDetail">
                          <img src={item.image} alt={item.name} className="itemImage" />
                          <div className="itemDetails">
                            <h1 className="itemTitle">{item.name}</h1>
                            <p className="itemPrice">${item.price}</p>
                            <p className="itemPrice">
                              {item.qty} x {item.price} = $
                              {(item.qty * item.price).toFixed(2)}
                            </p>
                          </div>
                        </div>
                        <div className="line"></div>
                      </div>
                    ))}
              </div>
            </div>
            <div className="orderRight">
              <div className="orderRightTop">
                <h1 className="orderTitle">Order Summary</h1>
                <p className="orderDetails">
                  <span>
                    Items ({order?.orderItems.reduce((acc, item) => acc + item.qty, 0)}):
                  </span>
                  <span>${order?.itemsPrice}</span>
                </p>
                <p className="orderDetails">
                  <span>Shipping & handling:</span>
                  <span>${order?.shippingPrice}</span>
                </p>
                <div className="line"></div>
                <p className="orderDetails">
                  <span>Total before tax:</span>
                  <span>${order?.TBC}</span>
                </p>
                <p className="orderDetails">
                  <span>Estimated tax:</span>
                  <span>${order?.taxPrice}</span>
                </p>
                <div className="line"></div>
                <p className="orderTotal">
                  <span>Order total:</span>
                  <span>${order?.totalPrice}</span>
                </p>
                {order?.paymentMethod === "PayPal or Credit Card"
                  ? !order?.isPaid && (
                      <div className="orderButton">
                        {sdkReady && (
                          <PayPalButton
                            style={{ color: "blue" }}
                            amount={order?.totalPrice}
                            onSuccess={successPaymentHandler}
                          />
                        )}
                      </div>
                    )
                  : !order?.isPaid && (
                      <StripeCheckout
                        name="Pay Order "
                        token={onToken}
                        stripeKey={stripeKey}
                        amount={order?.totalPrice! * 100}
                        shippingAddress
                        billingAddress
                      >
                        <button className="orderButton2">Pay ${order?.totalPrice}</button>
                      </StripeCheckout>
                    )}
              </div>
              {order?.isPaid && (
                <div className="orderRightBottom">
                  <p>Thanks for shopping with us,</p>
                  <p>
                    {order?.isDelivered
                      ? "Your order is Delivered."
                      : "Your order will be out for delivery soon"}
                  </p>
                  <Link to="/" className="link">
                    Home
                  </Link>
                </div>
              )}
              {!order?.isPaid && order?.paymentMethod === "Stripe" && (
                <div className="orderRightBottom">
                  <div className="cardDetails">
                    <p className="tile">Test Payment</p>
                    <p className="card">Card: 4242 4242 4242 4242</p>
                    <p className="expiry">02/28 --- CVC: 222</p>
                  </div>
                </div>
              )}
              {!order?.isPaid && order?.paymentMethod === "PayPal or Credit Card" && (
                <div className="orderRightBottom">
                  <div className="cardDetails">
                    <p className="tile">Test Payment</p>
                    <p className="card">Email: sb-7474wf4569743@personal.example.com</p>
                    <p className="expiry">Password: TJ_Q6aV9</p>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default OrderScreen;
