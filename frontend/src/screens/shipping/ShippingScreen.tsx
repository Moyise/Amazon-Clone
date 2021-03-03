import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory, useLocation } from "react-router";
import { saveShippingAddress } from "../../actions/cartActions";
import Meta from "../../components/Meta";
import { reducerState } from "../../store";
import { ICartAll } from "../../types";
import "./shippingScreen.scss";

function ShippingScreen() {
  const { pathname } = useLocation();
  const history = useHistory();
  const cart: ICartAll = useSelector((state: reducerState) => state.cart);
  const { shippingAddress } = cart;

  const [name, setName] = useState("PhantomX");
  const [address, setAddress] = useState("1010 Beach st");
  const [city, setCity] = useState("Mars");
  const [postalCode, setPostalCode] = useState("M2S 2S2");
  const [province, setProvince] = useState("Ontario");
  const [phone, setPhone] = useState("432 201 2020");
  const [country, setCountry] = useState("Universe");

  const dispatch = useDispatch();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  const submitHandler = (e: any) => {
    e.preventDefault();

    dispatch(
      saveShippingAddress({ name, address, city, postalCode, province, country, phone })
    );

    history.push("/payment");
  };

  return (
    <>
      <Meta title="Shipping" />
      <div className="shippingScreen">
        <div className="shippingBackground">
          <div className="shippingContainer">
            <div className="shippingCard">
              <h1 className="shippingTitle">Shipping address</h1>
              <form className="shippingForm" onSubmit={submitHandler}>
                <div className="shippingFormGroup">
                  <label className="formLabel">Country/Region</label>
                  <input
                    type="text"
                    value={country}
                    onChange={(e) => setCountry(e.target.value)}
                    maxLength={30}
                    className="formInput"
                    required
                  />
                </div>
                <div className="shippingFormGroup">
                  <label className="formLabel">Full name (First and Last name)</label>
                  <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    maxLength={50}
                    className="formInput"
                    required
                  />
                </div>
                <div className="shippingFormGroup">
                  <label className="formLabel">Address Line (or Company Name)</label>
                  <input
                    type="text"
                    value={address}
                    onChange={(e) => setAddress(e.target.value)}
                    maxLength={80}
                    className="formInput"
                    required
                  />
                </div>
                <div className="shippingFormGroup">
                  <label className="formLabel">City</label>
                  <input
                    type="text"
                    value={city}
                    onChange={(e) => setCity(e.target.value)}
                    maxLength={30}
                    className="formInput"
                    required
                  />
                </div>
                <div className="shippingFormGroup">
                  <label className="formLabel">State / Province / Region</label>
                  <input
                    type="text"
                    value={province}
                    onChange={(e) => setProvince(e.target.value)}
                    maxLength={30}
                    className="formInput"
                    required
                  />
                </div>
                <div className="shippingFormGroup">
                  <label className="formLabel">Postal Code/ZP</label>
                  <input
                    type="text"
                    value={postalCode}
                    onChange={(e) => setPostalCode(e.target.value)}
                    maxLength={30}
                    className="formInput"
                    required
                  />
                </div>
                <div className="shippingFormGroup">
                  <label className="formLabel">Phone number</label>
                  <input
                    type="text"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    maxLength={40}
                    className="formInput"
                    required
                  />
                </div>
                <button type="submit" className="formSubmit">
                  Continue
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ShippingScreen;
