import React, { useEffect, useState } from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { useHistory, useLocation } from "react-router";
import { getUserDetails, updateUserProfile } from "../../actions/userActions";
import { reducerState } from "../../store";
import { IUserLogin, IUpdateProfile, IUserDetails } from "../../types";
import "./profileScreen.scss";
import Meta from "../../components/Meta";

const ProfileScreen = () => {
  const history = useHistory();
  const { pathname } = useLocation();

  const [image, setImage] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [message, setMessage] = useState("");
  const [eyeOpen1, setEyeOpen1] = useState(false);
  const [eyeOpen2, setEyeOpen2] = useState(false);
  const [uploading, setUploading] = useState(false);

  const dispatch = useDispatch();

  const userDetails: IUserDetails = useSelector(
    (state: reducerState) => state.userDetails
  );
  const { user, loading, error } = userDetails;

  const userLogin: IUserLogin = useSelector((state: reducerState) => state.userLogin);
  const { userInfo } = userLogin;

  const userUpdateProfile: IUpdateProfile = useSelector(
    (state: reducerState) => state.userUpdateProfile
  );
  const { success } = userUpdateProfile;

  useEffect(() => {
    window.scrollTo(0, 0);
    if (!userInfo) {
      history.push("/signin");
    } else {
      if (!user?.name) {
        dispatch(getUserDetails("profile"));
      } else {
        setName(user.name);
        setEmail(user.email);
      }
    }
  }, [history, userInfo, dispatch, user, pathname]);

  const handleEye1 = () => {
    setEyeOpen1(!eyeOpen1);
  };
  const handleEye2 = () => {
    setEyeOpen2(!eyeOpen2);
  };

  const submitHandler = (e: any) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      setMessage("Passwords do not match");
    } else {
      //DISPATCH_UPDATE PROFILE
      dispatch(updateUserProfile({ id: user?._id, name, email, password, image }));
    }
  };

  const uploadFileHandler = async (e: any) => {
    const file = e.target.files[0];

    const formData = new FormData();
    formData.append("image", file);
    setUploading(true);

    try {
      const config = {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      };

      const { data } = await axios.post("/api/upload", formData, config);
      setImage(data);
      setUploading(false);
    } catch (error) {
      console.log(error);
      setUploading(false);
    }
  };

  return (
    <>
      <Meta title="Your Profile" />
      <div className="profileScreen">
        <div className="profileBackground">
          <div className="profileContainer">
            <div className="profileLeft">
              <h1 className="leftTitle">Profile</h1>
              <div className="leftCard">
                <div className="cardTop">
                  <img src={user?.image} alt={user?.name} />
                  <p className="name">{user?.name}</p>
                </div>
                <div className="cardDetails">
                  <p>Email: {user?.email}</p>
                  <p>Created: {user?.createdAt?.substring(0, 10)}</p>
                  <p>Updated: {user?.updatedAt?.substring(0, 10)}</p>
                </div>
              </div>
            </div>
            <div className="profileRight">
              <h1 className="rightTitle">Update Profile</h1>
              <div className="rightCard">
                <form className="registerForm" onSubmit={submitHandler}>
                  <div className="registerFormGroup">
                    <label className="formLabel">Profile Picture</label>
                    <div className="formInputWrap">
                      <input
                        type="file"
                        name="image"
                        onChange={uploadFileHandler}
                        className="fileInput"
                        required
                      />
                      {uploading && <i className="fas fa-spinner fa-spin"></i>}
                    </div>
                  </div>
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
                    <label className="formLabel">New Password</label>
                    <div className="formInputWrap">
                      <input
                        type={eyeOpen1 ? "text" : "password"}
                        onChange={(e) => setPassword(e.target.value)}
                        className="formInput"
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
                    <label className="formLabel">Confirm Password</label>
                    <div className="formInputWrap">
                      <input
                        type={eyeOpen2 ? "text" : "password"}
                        onChange={(e) => setConfirmPassword(e.target.value)}
                        className="formInput"
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
                  {success && (
                    <p className="successMessage">Profile successfully updated</p>
                  )}

                  <button type="submit" className="formSubmit">
                    Update
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProfileScreen;
