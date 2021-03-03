import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useHistory, useLocation } from "react-router-dom";
import { savePaymentMethod } from "../../actions/cartActions";
import Meta from "../../components/Meta";
import "./paymentScreen.scss";

function PaymentScreen() {
  const { pathname } = useLocation();
  const history = useHistory();

  const [radio1, setRadio1] = useState(true);
  const [radio2, setRadio2] = useState(false);
  const [paymentMethod, setPaymentMethod] = useState<String>("PayPal or Credit Card");

  const dispatch = useDispatch();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  const handlePayment1 = (e: { target: { value: String } }) => {
    const method = e.target.value;
    setRadio1(true);
    setRadio2(false);
    setPaymentMethod(method);
  };
  const handlePayment2 = (e: any) => {
    const method = e.target.value;
    setRadio1(false);
    setRadio2(true);
    setPaymentMethod(method);
  };

  const submitHandler = (e: any) => {
    e.preventDefault();
    //Dispatch payment
    dispatch(savePaymentMethod(paymentMethod));
    history.push("/placeorder");
  };

  return (
    <>
      <Meta title="Payment" />
      <div className="paymentScreen">
        <div className="paymentBackground">
          <div className="paymentContainer">
            <div className="paymentCard">
              <h1 className="paymentTitle">Payment method</h1>
              <form className="paymentForm" onSubmit={submitHandler}>
                <div className="paymentFormGroup">
                  <label className="formLabel">PayPal or Credit Card</label>
                  <input
                    type="radio"
                    className="radioInput"
                    value="PayPal or Credit Card"
                    checked={radio1}
                    onChange={handlePayment1}
                  />
                </div>

                <div className="paymentFormGroup">
                  <label className="formLabel">Stripe</label>
                  <input
                    type="radio"
                    className="radioInput"
                    value="Stripe"
                    checked={radio2}
                    onChange={handlePayment2}
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

export default PaymentScreen;
