import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useHistory, useLocation } from "react-router-dom";
import { facebookLogin, googleLogin, register } from "../../actions/userActions";
import { reducerState } from "../../store";
import { IUserRegister } from "../../types";
import { GoogleLogin } from "react-google-login";
import FacebookLogin from "react-facebook-login";
import { clientId, appId } from "../../settingsEnv";
import "./registerScreen.scss";
import Meta from "../../components/Meta";

function RegisterScreen() {
  const location = useLocation();
  const history = useHistory();

  const [eyeOpen1, setEyeOpen1] = useState(false);
  const [eyeOpen2, setEyeOpen2] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [message, setMessage] = useState("");

  const dispatch = useDispatch();

  const userRegister: IUserRegister = useSelector(
    (state: reducerState) => state.userRegister
  );

  const { userInfo, loading, error } = userRegister;

  const redirect = location.search ? location.search.split("=")[1] : "/";

  useEffect(() => {
    if (userInfo) {
      history.push(redirect);
    }
  }, [history, redirect, userInfo]);

  const submitHandler = (e: any) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      setMessage("Passwords do not match");
    } else {
      //DISPATCH_REGISTER
      dispatch(register(name, email, password));
    }
  };

  const handleEye1 = () => {
    setEyeOpen1(!eyeOpen1);
  };
  const handleEye2 = () => {
    setEyeOpen2(!eyeOpen2);
  };

  const responseSuccessGoogle = (response: any) => {
    dispatch(googleLogin(response));
  };
  const responseFailureGoogle = (response: any) => {};

  const responseFacebook = (response: any) => {
    dispatch(facebookLogin(response));
  };

  return (
    <>
      <Meta title="Register" />
      <div className="registerScreen">
        <div className="registerBackground">
          <div className="registerContainer">
            <div className="registerLeft">
              <div className="registerLogo">
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
              <div className="registerCard">
                <div className="registerTitle">Create account</div>
                <form className="registerForm" onSubmit={submitHandler}>
                  <div className="registerFormGroup">
                    <label className="formLabel">Name</label>
                    <div className="formInputWrap">
                      <input
                        type="text"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        className="formInput"
                        required
                        maxLength={10}
                      />
                    </div>
                  </div>
                  <div className="registerFormGroup">
                    <label className="formLabel">Email</label>
                    <div className="formInputWrap">
                      <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="formInput"
                        required
                        maxLength={50}
                      />
                    </div>
                  </div>
                  <div className="registerFormGroup">
                    <label className="formLabel">Password</label>
                    <div className="formInputWrap">
                      <input
                        type={eyeOpen1 ? "text" : "password"}
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        className="formInput"
                        required
                      />
                      <div className="imageWrap" onClick={handleEye1}>
                        {eyeOpen1 ? (
                          <svg
                            width="20"
                            height="20"
                            viewBox="0 0 20 20"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M10 4.40002C3.439 4.40002 0 9.23202 0 10C0 10.766 3.439 15.6 10 15.6C16.56 15.6 20 10.766 20 10C20 9.23202 16.56 4.40002 10 4.40002ZM10 14.307C7.545 14.307 5.555 12.379 5.555 10C5.555 7.62102 7.545 5.69102 10 5.69102C12.455 5.69102 14.444 7.62102 14.444 10C14.444 12.379 12.455 14.307 10 14.307ZM10 10C9.593 9.55302 10.663 7.84602 10 7.84602C8.772 7.84602 7.777 8.81102 7.777 10C7.777 11.189 8.772 12.154 10 12.154C11.227 12.154 12.223 11.189 12.223 10C12.223 9.45302 10.346 10.379 10 10Z"
                              fill="white"
                              fillOpacity="0.9"
                            />
                          </svg>
                        ) : (
                          <svg
                            width="20"
                            height="20"
                            viewBox="0 0 20 20"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M14.8417 11.1584C16.3087 9.9534 17.2597 8.23327 17.5 6.35008C17.5131 6.24064 17.5046 6.12969 17.4748 6.02356C17.4451 5.91743 17.3947 5.8182 17.3266 5.73153C17.2585 5.64487 17.174 5.57246 17.078 5.51845C16.9819 5.46444 16.8761 5.42988 16.7667 5.41675C16.6572 5.40361 16.5463 5.41216 16.4401 5.44191C16.334 5.47166 16.2348 5.52202 16.1481 5.59011C16.0615 5.65821 15.989 5.74271 15.935 5.83879C15.881 5.93487 15.8465 6.04064 15.8333 6.15008C15.6341 7.55532 14.9343 8.8414 13.8626 9.77189C12.7909 10.7024 11.4193 11.2147 10 11.2147C8.58071 11.2147 7.20912 10.7024 6.13741 9.77189C5.06569 8.8414 4.36589 7.55532 4.16666 6.15008C4.15353 6.04064 4.11897 5.93487 4.06496 5.83879C4.01095 5.74271 3.93854 5.65821 3.85188 5.59011C3.76521 5.52202 3.66598 5.47166 3.55985 5.44191C3.45372 5.41216 3.34277 5.40361 3.23333 5.41675C3.1239 5.42988 3.01812 5.46444 2.92204 5.51845C2.82596 5.57246 2.74146 5.64487 2.67336 5.73153C2.60527 5.8182 2.55491 5.91743 2.52516 6.02356C2.49542 6.12969 2.48686 6.24064 2.5 6.35008C2.73819 8.23203 3.6861 9.95198 5.15 11.1584L3.23333 13.0917C3.09681 13.2512 3.02547 13.4562 3.03357 13.666C3.04167 13.8757 3.12862 14.0746 3.27703 14.223C3.42544 14.3715 3.62439 14.4584 3.83412 14.4665C4.04385 14.4746 4.24891 14.4033 4.40833 14.2667L6.58333 12.1001C7.3915 12.5085 8.26655 12.7682 9.16666 12.8667V15.8334C9.16666 16.0544 9.25446 16.2664 9.41074 16.4227C9.56702 16.5789 9.77898 16.6667 10 16.6667C10.221 16.6667 10.433 16.5789 10.5893 16.4227C10.7455 16.2664 10.8333 16.0544 10.8333 15.8334V12.8667C11.7335 12.7682 12.6085 12.5085 13.4167 12.1001L15.5917 14.2667C15.7511 14.4033 15.9561 14.4746 16.1659 14.4665C16.3756 14.4584 16.5746 14.3715 16.723 14.223C16.8714 14.0746 16.9583 13.8757 16.9664 13.666C16.9745 13.4562 16.9032 13.2512 16.7667 13.0917L14.8417 11.1584Z"
                              fill="white"
                              fillOpacity="0.9"
                            />
                          </svg>
                        )}
                      </div>
                    </div>
                  </div>
                  <div className="registerFormGroup">
                    <label className="formLabel">Re-enter password</label>
                    <div className="formInputWrap">
                      <input
                        type={eyeOpen2 ? "text" : "password"}
                        value={confirmPassword}
                        onChange={(e) => setConfirmPassword(e.target.value)}
                        className="formInput"
                        required
                      />
                      <div className="imageWrap" onClick={handleEye2}>
                        {eyeOpen2 ? (
                          <svg
                            width="20"
                            height="20"
                            viewBox="0 0 20 20"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M10 4.40002C3.439 4.40002 0 9.23202 0 10C0 10.766 3.439 15.6 10 15.6C16.56 15.6 20 10.766 20 10C20 9.23202 16.56 4.40002 10 4.40002ZM10 14.307C7.545 14.307 5.555 12.379 5.555 10C5.555 7.62102 7.545 5.69102 10 5.69102C12.455 5.69102 14.444 7.62102 14.444 10C14.444 12.379 12.455 14.307 10 14.307ZM10 10C9.593 9.55302 10.663 7.84602 10 7.84602C8.772 7.84602 7.777 8.81102 7.777 10C7.777 11.189 8.772 12.154 10 12.154C11.227 12.154 12.223 11.189 12.223 10C12.223 9.45302 10.346 10.379 10 10Z"
                              fill="white"
                              fillOpacity="0.9"
                            />
                          </svg>
                        ) : (
                          <svg
                            width="20"
                            height="20"
                            viewBox="0 0 20 20"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M14.8417 11.1584C16.3087 9.9534 17.2597 8.23327 17.5 6.35008C17.5131 6.24064 17.5046 6.12969 17.4748 6.02356C17.4451 5.91743 17.3947 5.8182 17.3266 5.73153C17.2585 5.64487 17.174 5.57246 17.078 5.51845C16.9819 5.46444 16.8761 5.42988 16.7667 5.41675C16.6572 5.40361 16.5463 5.41216 16.4401 5.44191C16.334 5.47166 16.2348 5.52202 16.1481 5.59011C16.0615 5.65821 15.989 5.74271 15.935 5.83879C15.881 5.93487 15.8465 6.04064 15.8333 6.15008C15.6341 7.55532 14.9343 8.8414 13.8626 9.77189C12.7909 10.7024 11.4193 11.2147 10 11.2147C8.58071 11.2147 7.20912 10.7024 6.13741 9.77189C5.06569 8.8414 4.36589 7.55532 4.16666 6.15008C4.15353 6.04064 4.11897 5.93487 4.06496 5.83879C4.01095 5.74271 3.93854 5.65821 3.85188 5.59011C3.76521 5.52202 3.66598 5.47166 3.55985 5.44191C3.45372 5.41216 3.34277 5.40361 3.23333 5.41675C3.1239 5.42988 3.01812 5.46444 2.92204 5.51845C2.82596 5.57246 2.74146 5.64487 2.67336 5.73153C2.60527 5.8182 2.55491 5.91743 2.52516 6.02356C2.49542 6.12969 2.48686 6.24064 2.5 6.35008C2.73819 8.23203 3.6861 9.95198 5.15 11.1584L3.23333 13.0917C3.09681 13.2512 3.02547 13.4562 3.03357 13.666C3.04167 13.8757 3.12862 14.0746 3.27703 14.223C3.42544 14.3715 3.62439 14.4584 3.83412 14.4665C4.04385 14.4746 4.24891 14.4033 4.40833 14.2667L6.58333 12.1001C7.3915 12.5085 8.26655 12.7682 9.16666 12.8667V15.8334C9.16666 16.0544 9.25446 16.2664 9.41074 16.4227C9.56702 16.5789 9.77898 16.6667 10 16.6667C10.221 16.6667 10.433 16.5789 10.5893 16.4227C10.7455 16.2664 10.8333 16.0544 10.8333 15.8334V12.8667C11.7335 12.7682 12.6085 12.5085 13.4167 12.1001L15.5917 14.2667C15.7511 14.4033 15.9561 14.4746 16.1659 14.4665C16.3756 14.4584 16.5746 14.3715 16.723 14.223C16.8714 14.0746 16.9583 13.8757 16.9664 13.666C16.9745 13.4562 16.9032 13.2512 16.7667 13.0917L14.8417 11.1584Z"
                              fill="white"
                              fillOpacity="0.9"
                            />
                          </svg>
                        )}
                      </div>
                    </div>
                  </div>
                  <p className="errorMessage">{message}</p>
                  <button type="submit" className="formSubmit">
                    Create your Amazon account
                  </button>
                </form>
              </div>
              <div className="registerDetail">
                <div className="line1"></div>
                <p className="description">Already have an account?</p>
                <div className="line2"></div>
              </div>

              <Link to="/signin" className="detailsButton">
                Sign In
              </Link>
            </div>
            <div className="registerRight">
              <div className="registerOption">
                <GoogleLogin
                  clientId={clientId}
                  buttonText="Sign up with Google"
                  onSuccess={responseSuccessGoogle}
                  onFailure={responseFailureGoogle}
                  cookiePolicy={"single_host_origin"}
                />
              </div>

              <div className="registerOption">
                <FacebookLogin
                  appId={appId}
                  fields="name,email,picture"
                  callback={responseFacebook}
                  icon="fa-facebook"
                  size="small"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default RegisterScreen;
