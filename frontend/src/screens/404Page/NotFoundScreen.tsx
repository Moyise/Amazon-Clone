import React from "react";
import { Link } from "react-router-dom";
import "./notFound.scss";

const NotFoundScreen = () => {
  return (
    <>
      <div className="notFoundScreen">
        <div className="notFoundBackground">
          <div className="notFountContainer">
            <h1 className="Title">404</h1>
            <p className="subTitle">Page Not Found</p>
            <div className="buttonWrap">
              <span className="buttonDesc">Go back</span>
              <Link to="/" className="button">
                HOME
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default NotFoundScreen;
