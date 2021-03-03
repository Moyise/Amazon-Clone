import React from "react";
import "./footer.scss";

function Footer() {
  const year = new Date().getFullYear();

  return (
    <>
      <div className="footer">
        <div className="footerBackground">
          <div className="footerTop">
            <div>
              <ul>
                <li className="footerTitle">Get to Know Us</li>
                <li className="footerLink">Careers</li>
                <li className="footerLink">Blog</li>
                <li className="footerLink">About Amazon</li>
                <li className="footerLink">Investor Relations</li>
                <li className="footerLink">Amazon Devices</li>
              </ul>
            </div>
            <div>
              <ul>
                <li className="footerTitle">Make Money with Us</li>
                <li className="footerLink">Sell products on Amazon</li>
                <li className="footerLink">Sell on Amazon Business</li>
                <li className="footerLink">Sell apps on Amazon</li>
                <li className="footerLink">Become an Affiliate</li>
                <li className="footerLink">Advertise Your Products</li>
              </ul>
            </div>
            <div>
              <ul>
                <li className="footerTitle">Amazon Payment Products</li>
                <li className="footerLink">Amazon Business Card</li>
                <li className="footerLink">Shop with Points</li>
                <li className="footerLink">Reload Your Balance</li>
                <li className="footerLink">Amazon Currency Converter</li>
              </ul>
            </div>
            <div>
              <ul>
                <li className="footerTitle">Let Us Help You</li>
                <li className="footerLink">Amazon and COVID-19</li>
                <li className="footerLink">Your Account</li>
                <li className="footerLink">Your Orders</li>
                <li className="footerLink">Shipping Rates & Policies</li>
                <li className="footerLink">Amazon Assistant</li>
              </ul>
            </div>
          </div>
          <div className="footerBottom">
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
            <p>Amazon Clone {year} , LLC | Moyise.</p>
            <a href="https://www.moyise.com/" target="_blank" rel="noreferrer">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M16.36 14C16.44 13.34 16.5 12.68 16.5 12C16.5 11.32 16.44 10.66 16.36 10H19.74C19.9 10.64 20 11.31 20 12C20 12.69 19.9 13.36 19.74 14H16.36ZM14.59 19.56C15.19 18.45 15.65 17.25 15.97 16H18.92C17.9512 17.6683 16.4141 18.932 14.59 19.56V19.56ZM14.34 14H9.66C9.56 13.34 9.5 12.68 9.5 12C9.5 11.32 9.56 10.65 9.66 10H14.34C14.43 10.65 14.5 11.32 14.5 12C14.5 12.68 14.43 13.34 14.34 14ZM12 19.96C11.17 18.76 10.5 17.43 10.09 16H13.91C13.5 17.43 12.83 18.76 12 19.96ZM8 8H5.08C6.03886 6.32721 7.5748 5.06149 9.4 4.44C8.8 5.55 8.35 6.75 8 8ZM5.08 16H8C8.35 17.25 8.8 18.45 9.4 19.56C7.57862 18.9317 6.04485 17.6677 5.08 16V16ZM4.26 14C4.1 13.36 4 12.69 4 12C4 11.31 4.1 10.64 4.26 10H7.64C7.56 10.66 7.5 11.32 7.5 12C7.5 12.68 7.56 13.34 7.64 14H4.26ZM12 4.03C12.83 5.23 13.5 6.57 13.91 8H10.09C10.5 6.57 11.17 5.23 12 4.03V4.03ZM18.92 8H15.97C15.657 6.76146 15.1936 5.5659 14.59 4.44C16.43 5.07 17.96 6.34 18.92 8ZM12 2C6.47 2 2 6.5 2 12C2 14.6522 3.05357 17.1957 4.92893 19.0711C5.85752 19.9997 6.95991 20.7362 8.17317 21.2388C9.38642 21.7413 10.6868 22 12 22C14.6522 22 17.1957 20.9464 19.0711 19.0711C20.9464 17.1957 22 14.6522 22 12C22 10.6868 21.7413 9.38642 21.2388 8.17317C20.7362 6.95991 19.9997 5.85752 19.0711 4.92893C18.1425 4.00035 17.0401 3.26375 15.8268 2.7612C14.6136 2.25866 13.3132 2 12 2V2Z"
                  fill="white"
                  fillOpacity="0.9"
                />
              </svg>
            </a>

            <a href="https://twitter.com/0moyise" target="_blank" rel="noreferrer">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M23.643 4.93708C22.808 5.30708 21.911 5.55708 20.968 5.67008C21.941 5.08787 22.6689 4.17154 23.016 3.09208C22.1018 3.63507 21.1013 4.01727 20.058 4.22208C19.3564 3.47294 18.4271 2.9764 17.4143 2.80955C16.4016 2.6427 15.3621 2.81487 14.4572 3.29933C13.5524 3.78379 12.8328 4.55344 12.4102 5.48878C11.9875 6.42412 11.8855 7.47283 12.12 8.47208C10.2677 8.37907 8.45562 7.89763 6.80142 7.05898C5.14722 6.22034 3.68784 5.04324 2.518 3.60408C2.118 4.29408 1.888 5.09408 1.888 5.94608C1.88755 6.71307 2.07643 7.46832 2.43788 8.14481C2.79932 8.8213 3.32216 9.39812 3.96 9.82408C3.22027 9.80054 2.49687 9.60066 1.85 9.24108V9.30108C1.84992 10.3768 2.22203 11.4195 2.90318 12.2521C3.58433 13.0847 4.53257 13.656 5.587 13.8691C4.90078 14.0548 4.18133 14.0821 3.483 13.9491C3.78049 14.8747 4.35999 15.6841 5.14036 16.264C5.92074 16.8439 6.86291 17.1653 7.835 17.1831C6.18483 18.4785 4.14688 19.1812 2.049 19.1781C1.67738 19.1782 1.30607 19.1565 0.936996 19.1131C3.06647 20.4823 5.54534 21.2089 8.077 21.2061C16.647 21.2061 21.332 14.1081 21.332 7.95208C21.332 7.75208 21.327 7.55008 21.318 7.35008C22.2293 6.69105 23.0159 5.87497 23.641 4.94008L23.643 4.93708V4.93708Z"
                  fill="white"
                  fillOpacity="0.9"
                />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

export default Footer;
