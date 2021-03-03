import React, { useEffect, useRef, useState } from "react";
import "./header.scss";
import search from "../../img/search.png";
import { Link, useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { reducerState } from "../../store";
import { IUserLogin } from "../../types";
import { logout } from "../../actions/userActions";

function Header() {
  const history = useHistory();

  const [open, setOpen] = useState(false);
  const [show, setShow] = useState(false);
  const [keyword, setKeyword] = useState("");
  const ref = useRef<HTMLDivElement | null>(null);
  const ref2 = useRef<HTMLDivElement | null>(null);

  const dispatch = useDispatch();

  const cart: any = useSelector((state: reducerState) => state.cart);
  const { cartItems } = cart;
  const items: number = cartItems.length > 0 ? cartItems.length : 0;

  const userLogin: IUserLogin = useSelector((state: reducerState) => state.userLogin);
  const { userInfo } = userLogin;

  useEffect(() => {
    document.body.addEventListener("click", (e: any) => {
      if (ref.current?.contains(e.target)) {
        return;
      }
      setOpen(false);
    });

    document.body.addEventListener("click", (e: any) => {
      if (ref2.current?.contains(e.target)) {
        return;
      }
      setShow(false);
    });
  }, []);

  const logoutHandler = () => {
    setShow(false);
    dispatch(logout());
  };

  const submitHandler = (e: any) => {
    e.preventDefault();
    if (keyword.trim()) {
      history.push(`/search/${keyword}`);
    } else {
      history.push("/");
    }
  };

  return (
    <>
      <div className="header">
        <div className="headerContainer">
          <div ref={ref} className="navMenu">
            <div className="menuIcon" onClick={() => setOpen(!open)}>
              <svg
                width="33"
                height="33"
                viewBox="0 0 23 23"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M11.5 19.1667C10.4415 19.1667 9.58337 18.3086 9.58337 17.25C9.58337 16.1915 10.4415 15.3333 11.5 15.3333C12.5586 15.3333 13.4167 16.1915 13.4167 17.25C13.4167 18.3086 12.5586 19.1667 11.5 19.1667ZM11.5 13.4167C10.4415 13.4167 9.58337 12.5586 9.58337 11.5C9.58337 10.4415 10.4415 9.58334 11.5 9.58334C12.5586 9.58334 13.4167 10.4415 13.4167 11.5C13.4167 12.0083 13.2148 12.4959 12.8553 12.8553C12.4959 13.2147 12.0084 13.4167 11.5 13.4167ZM11.5 7.66668C10.4415 7.66668 9.58337 6.80856 9.58337 5.75001C9.58337 4.69146 10.4415 3.83334 11.5 3.83334C12.5586 3.83334 13.4167 4.69146 13.4167 5.75001C13.4167 6.25834 13.2148 6.74585 12.8553 7.1053C12.4959 7.46474 12.0084 7.66668 11.5 7.66668Z"
                  fill="white"
                  fillOpacity="0.8"
                />
              </svg>
            </div>
            <div className={open ? "menuLinks open" : "menuLinks"}>
              <div className="menuHeader">
                {userInfo && <img src={userInfo?.image} alt="pic" className="picture" />}
                <h1 className="menuTitle">
                  {userInfo ? (
                    <span className="titleLink">Hello {userInfo.name}</span>
                  ) : (
                    <Link
                      to="/signin"
                      className="signinLink"
                      onClick={() => setOpen(false)}
                    >
                      Sign In
                    </Link>
                  )}
                </h1>
              </div>
              <ul>
                <li className="menuLink" onClick={() => setOpen(false)}>
                  <Link to="/" className="link">
                    Home
                  </Link>
                </li>
                <li className="menuLink" onClick={() => setOpen(false)}>
                  <Link to="/profile" className="link">
                    Profile
                  </Link>
                </li>
                <li className="menuLink" onClick={() => setOpen(false)}>
                  <Link to="/orders" className="link">
                    Orders
                  </Link>
                </li>
                {userInfo && (
                  <li className="menuLink" onClick={() => setOpen(false)}>
                    <p className="link" onClick={logoutHandler}>
                      Logout
                    </p>
                  </li>
                )}
              </ul>
            </div>
          </div>
          <div className="headerLogo">
            <Link to="/">
              <svg
                width="40"
                height="40"
                viewBox="0 0 40 40"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect
                  x="16.5884"
                  y="2.86302"
                  width="10.5556"
                  height="32.3333"
                  rx="5.27778"
                  transform="rotate(20 16.5884 2.86302)"
                  stroke="white"
                />
                <rect
                  x="-0.298836"
                  y="0.640856"
                  width="10.5556"
                  height="32.3333"
                  rx="5.27778"
                  transform="matrix(-0.939693 0.34202 0.34202 0.939693 22.5228 2.4453)"
                  stroke="#FF8A00"
                />
                <rect
                  x="34.5499"
                  y="33.2642"
                  width="11.4655"
                  height="22.5124"
                  rx="5.73273"
                  transform="rotate(160 34.5499 33.2642)"
                  fill="#FF8A00"
                />
                <path
                  d="M20.3465 14.2952L20.4756 10.3959L19.2305 10.8491L19.157 10.647L20.6793 10.093L20.7374 10.2527L20.6096 14.1995L21.9956 13.695L22.0692 13.897L20.42 14.4973L20.3465 14.2952ZM23.8995 20.7386C23.5518 20.8651 23.2716 20.8554 23.0588 20.7094C22.848 20.5591 22.6776 20.3054 22.5477 19.9483L21.9423 18.285C21.8146 17.9342 21.7865 17.6376 21.8579 17.3952C21.9313 17.1486 22.1387 16.9631 22.4801 16.8389C22.8184 16.7157 23.0949 16.7251 23.3097 16.8668C23.5245 17.0086 23.6951 17.2533 23.8217 17.601L24.4288 19.2689C24.5587 19.626 24.5892 19.9289 24.52 20.1775C24.454 20.425 24.2472 20.612 23.8995 20.7386ZM23.8226 20.5272C24.0794 20.4337 24.2296 20.2957 24.2731 20.1131C24.3198 19.9294 24.2918 19.6966 24.1892 19.4147L23.5496 17.6575C23.447 17.3755 23.3193 17.1808 23.1667 17.0732C23.0171 16.9644 22.8139 16.9568 22.5571 17.0503C22.3002 17.1438 22.1479 17.2808 22.1001 17.4614C22.0555 17.6408 22.0844 17.8715 22.187 18.1534L22.8266 19.9106C22.9304 20.1956 23.0576 20.3941 23.2083 20.506C23.3609 20.6136 23.5657 20.6206 23.8226 20.5272ZM24.0298 23.7719L24.2319 23.6984L26.6937 26.4419L25.5239 23.2281L25.7495 23.1461L27.1347 26.9518L26.9326 27.0253L24.4691 24.2772L25.6405 27.4956L25.415 27.5777L24.0298 23.7719ZM26.4193 30.3515L27.7348 29.8727L27.8101 30.0794L26.7529 30.4642L27.3087 31.9912L28.1779 31.6748L28.2498 31.8722L27.3805 32.1885L27.9893 33.8612L29.0606 33.4713L29.1341 33.6733L27.8045 34.1573L26.4193 30.3515Z"
                  fill="white"
                  fillOpacity="0.9"
                />
              </svg>
            </Link>
          </div>
          <form className="headerSearch" onSubmit={submitHandler}>
            <input
              type="text"
              name="q"
              onChange={(e) => setKeyword(e.target.value)}
              className="headerSearchInput"
              autoComplete="off"
            />
            <button type="submit" className="headerSearchIcon">
              <img src={search} alt="search" />
            </button>
          </form>
          <div className="headerNav">
            <div ref={ref2} className="headerOption">
              {userInfo ? (
                <div className="headerLink link">
                  <span onClick={() => setShow(!show)}>Menu</span>
                  <div className={show ? "linkMenu show" : "linkMenu"}>
                    <Link
                      to="/profile"
                      className="subLinkMenu"
                      onClick={() => setShow(!show)}
                    >
                      Profile
                    </Link>
                    <p className="subLinkMenu" onClick={logoutHandler}>
                      Logout
                    </p>
                  </div>
                </div>
              ) : (
                <Link to="/signin" className="headerLink">
                  Sign In
                </Link>
              )}
            </div>
            <div className="headerOption">
              <Link to="/orders" className="headerLink">
                Orders
              </Link>
            </div>
            <div className="headerOption">
              <Link to="/cart">
                <div className="headerBasket">
                  <svg
                    width="40"
                    height="40"
                    viewBox="0 0 40 40"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M28.2172 11.6667C28.2702 11.5486 28.295 11.4198 28.2898 11.2905H28.3333C28.1469 6.84319 24.4748 3.33334 20.0082 3.33334C15.5417 3.33334 11.8695 6.84319 11.6831 11.2905C11.6612 11.415 11.6612 11.5423 11.6831 11.6667H11.5529C9.41703 11.6667 7.13391 13.0766 6.47107 16.8668L5.17484 27.1912C4.11429 34.7716 8.0177 36.6667 13.1142 36.6667H26.9308C32.0126 36.6667 35.7981 33.9226 34.8554 27.1912L33.5739 16.8668C32.7933 13.1827 30.5838 11.6667 28.4774 11.6667H28.2172ZM25.822 11.6667C25.7756 11.5466 25.7511 11.4192 25.7494 11.2905C25.7494 8.09472 23.1498 5.50398 19.9429 5.50398C16.7361 5.50398 14.1364 8.09472 14.1364 11.2905C14.1584 11.415 14.1584 11.5423 14.1364 11.6667H25.822ZM15.1617 20.2476C14.3482 20.2476 13.6887 19.5689 13.6887 18.7316C13.6887 17.8943 14.3482 17.2155 15.1617 17.2155C15.9752 17.2155 16.6346 17.8943 16.6346 18.7316C16.6346 19.5689 15.9752 20.2476 15.1617 20.2476ZM23.3367 18.7316C23.3367 19.5689 23.9962 20.2476 24.8097 20.2476C25.6232 20.2476 26.2827 19.5689 26.2827 18.7316C26.2827 17.8943 25.6232 17.2155 24.8097 17.2155C23.9962 17.2155 23.3367 17.8943 23.3367 18.7316Z"
                      fill="white"
                    />
                  </svg>
                  <div>{items}</div>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Header;
