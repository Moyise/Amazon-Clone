import React, { useEffect } from "react";
import "./ordersScreen.scss";
import { useHistory, useLocation } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import { reducerState } from "../../store";
import { IMyOrders, IUserLogin } from "../../types";
import { listMyOrders } from "../../actions/orderActions";
import { Link } from "react-router-dom";
import { ORDER_DETAILS_RESET } from "../../constants/orderConstants";
import Meta from "../../components/Meta";

function OrdersScreen() {
  const history = useHistory();
  const { pathname } = useLocation();

  const dispatch = useDispatch();

  const orderMyList: IMyOrders = useSelector((state: reducerState) => state.orderMyList);
  const { orders, loading, error } = orderMyList;
  const userLogin: IUserLogin = useSelector((state: reducerState) => state.userLogin);
  const { userInfo } = userLogin;

  useEffect(() => {
    window.scrollTo(0, 0);
    dispatch({ type: ORDER_DETAILS_RESET });
    if (!userInfo) {
      history.push("/signin?redirect=orders");
    } else {
      dispatch(listMyOrders());
    }
  }, [pathname, dispatch, history, userInfo]);

  return (
    <>
      <Meta title="Your Orders" />
      <div className="ordersScreen">
        <div className="ordersBackground">
          <h1 className="ordersTitle">My Orders({orders?.length})</h1>
          <div className="ordersCenter">
            {!orders?.length && (
              <div className="ordersEmpty">
                <p>No orders Yet</p>
                <Link to="/" className="emptyOrder">
                  Shop Now
                </Link>
              </div>
            )}
            {orders?.map((order, index) => (
              <div key={index} className="ordersLeft">
                <div className="cardItem">
                  <div className="itemImage">
                    <span className="numbItems">{order.orderItems.length} Items</span>
                    <svg
                      width="104"
                      height="104"
                      viewBox="0 0 104 104"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M71.1463 28.0367H72.0339C83.6992 28.0367 93.1666 37.7867 93.1666 49.7467V73.6667C93.1666 85.6267 83.6992 95.3334 72.0339 95.3334H31.9661C20.3008 95.3334 10.8333 85.6267 10.8333 73.6667V49.7467C10.8333 37.7867 20.3008 28.0367 31.9661 28.0367H32.8537C32.9382 22.8367 34.9247 17.9834 38.5173 14.3434C42.1521 10.66 46.8013 8.79669 52.0422 8.66669C62.5241 8.66669 71.0195 17.3334 71.1463 28.0367ZM42.9552 18.98C40.5883 21.4067 39.2781 24.6134 39.1936 28.0367H64.8065C64.6797 20.93 59.0161 15.1667 52.0423 15.1667C48.7879 15.1667 45.4066 16.51 42.9552 18.98ZM68.0609 44.7199C69.8361 44.7199 71.2308 43.2466 71.2308 41.4699V36.4433C71.2308 34.6666 69.8361 33.1933 68.0609 33.1933C66.328 33.1933 64.891 34.6666 64.891 36.4433V41.4699C64.891 43.2466 66.328 44.7199 68.0609 44.7199ZM38.7285 41.4699C38.7285 43.2466 37.3337 44.7199 35.5586 44.7199C33.8257 44.7199 32.3887 43.2466 32.3887 41.4699V36.4433C32.3887 34.6666 33.8257 33.1933 35.5586 33.1933C37.3337 33.1933 38.7285 34.6666 38.7285 36.4433V41.4699Z"
                        fill="white"
                        fillOpacity="0.9"
                      />
                    </svg>
                  </div>
                  <div className="itemDetails">
                    <Link to={`/order/${order._id}`} className="itemTitle">
                      ID: {order._id}
                    </Link>
                    <p className={order?.isPaid ? "itemStock done" : "itemStock"}>
                      {order?.isPaid
                        ? `Paid ${order.paidAt?.substring(0, 10)}`
                        : "Not Paid"}
                    </p>
                    <p className={order?.isDelivered ? "itemStock done" : "itemStock"}>
                      {order?.isDelivered ? `Delivered` : "Not Delivered"}
                    </p>
                    <div className="itemLinks">
                      <Link to={`/order/${order._id}`} className="itemLink">
                        View order details
                      </Link>
                    </div>
                  </div>
                  <h1 className="itemPrice">${order.totalPrice}</h1>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default OrdersScreen;
