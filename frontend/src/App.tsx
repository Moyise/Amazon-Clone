import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import CartScreen from "./screens/cart/CartScreen";
import HomeScreen from "./screens/home/HomeScreen";
import SigninScreen from "./screens/signin/SigninScreen";
import OrdersScreen from "./screens/orders/OrdersScreen";
import OrderScreen from "./screens/order/OrderScreen";
import PaymentScreen from "./screens/payment/PaymentScreen";
import PlaceOrderScreen from "./screens/placeOrder/PlaceOrderScreen";
import ProductScreen from "./screens/product/ProductScreen";
import RegisterScreen from "./screens/register/RegisterScreen";
import ShippingScreen from "./screens/shipping/ShippingScreen";
import NotFoundScreen from "./screens/404Page/NotFoundScreen";
import ProfileScreen from "./screens/profile/ProfileScreen";
import SearchScreen from "./screens/search/SearchScreen";
import BackToTop from "./components/backToTop/BackToTop";

function App() {
  return (
    <>
      <Router>
        <Switch>
          <Route path="/register" exact>
            <RegisterScreen />
          </Route>

          <Route path="/signin" exact>
            <SigninScreen />
          </Route>

          <Route path="/profile" exact>
            <Header />
            <ProfileScreen />
            <Footer />
          </Route>

          <Route path="/order/:id" exact>
            <Header />
            <OrderScreen />
            <BackToTop />
            <Footer />
          </Route>

          <Route path="/placeorder" exact>
            <Header />
            <PlaceOrderScreen />
            <BackToTop />
            <Footer />
          </Route>

          <Route path="/payment" exact>
            <Header />
            <PaymentScreen />
            <Footer />
          </Route>

          <Route path="/shipping" exact>
            <Header />
            <ShippingScreen />
            <Footer />
          </Route>

          <Route path="/orders" exact>
            <Header />
            <OrdersScreen />
            <BackToTop />
            <Footer />
          </Route>

          <Route path="/products/:id" exact>
            <Header />
            <ProductScreen />
            <BackToTop />
            <Footer />
          </Route>

          <Route path="/cart/:id?" exact>
            <Header />
            <CartScreen />
            <BackToTop />
            <Footer />
          </Route>

          <Route path="/search/:keyword" exact>
            <Header />
            <SearchScreen />
            <BackToTop />
            <Footer />
          </Route>

          <Route path="/" exact>
            <Header />
            <HomeScreen />
            <BackToTop />
            <Footer />
          </Route>

          <Route>
            <NotFoundScreen />
          </Route>
        </Switch>
      </Router>
    </>
  );
}

export default App;
