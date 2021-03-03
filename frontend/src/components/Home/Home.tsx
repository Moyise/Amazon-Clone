import React, { useEffect, useRef, useState } from "react";
import { Link as ScrollLink } from "react-scroll";
import gsap from "gsap";
import "./home.scss";
import arrow from "../../img/arrow.png";
import backArrow from "../../img/arrow_back.png";
import { useHistory } from "react-router";

function Home() {
  const history = useHistory();
  const ref = useRef<HTMLDivElement>(null);

  const [open, setOpen] = useState(false);
  const [Sub1, setSub1] = useState(false);
  const [Sub2, setSub2] = useState(false);
  const [Sub3, setSub3] = useState(false);
  const [Sub4, setSub4] = useState(false);

  useEffect(() => {
    let tl2 = gsap.timeline();
    tl2.from(".scrollLogo", { y: 10, repeat: -1, duration: 1.5, yoyo: true }, "-=1");

    //===================
    const node = ref.current as any;
    document.body.addEventListener("click", (ev: MouseEvent) => {
      if (node.contains(ev.target)) {
        return;
      }
      setOpen(false);
      setSub1(false);
      setSub2(false);
      setSub3(false);
      setSub4(false);
    });
  }, []);

  return (
    <>
      <div className="home">
        <div className="backgroundRec">
          <div className="homeContainer">
            <div ref={ref} className="menuContainer">
              <div
                className={open ? "menuIcon open" : "menuIcon"}
                onClick={() => setOpen(!open)}
              >
                <svg
                  width="33"
                  height="33"
                  viewBox="0 0 33 33"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M16.5 27.5C14.9812 27.5 13.75 26.2688 13.75 24.75C13.75 23.2312 14.9812 22 16.5 22C18.0188 22 19.25 23.2312 19.25 24.75C19.25 26.2688 18.0188 27.5 16.5 27.5ZM16.5 19.25C14.9812 19.25 13.75 18.0188 13.75 16.5C13.75 14.9812 14.9812 13.75 16.5 13.75C18.0188 13.75 19.25 14.9812 19.25 16.5C19.25 17.2293 18.9603 17.9288 18.4445 18.4445C17.9288 18.9603 17.2293 19.25 16.5 19.25ZM16.5 11C14.9812 11 13.75 9.76878 13.75 8.25C13.75 6.73122 14.9812 5.5 16.5 5.5C18.0188 5.5 19.25 6.73122 19.25 8.25C19.25 8.97935 18.9603 9.67882 18.4445 10.1945C17.9288 10.7103 17.2293 11 16.5 11Z"
                    fill="white"
                    fillOpacity="0.8"
                  />
                </svg>
              </div>
              <div className={open ? "homeMenu open" : "homeMenu"}>
                <ul>
                  <li className="menuTitle">Shop By Department</li>
                  <li className="menuItem">
                    <div>
                      <span>
                        <p className="menuLink" onClick={() => setSub1(!Sub1)}>
                          Electronics
                        </p>
                      </span>
                      <div className={Sub1 ? "headerSub open" : "headerSub"}>
                        <ul>
                          <li className="subTitle" onClick={() => setSub1(!Sub1)}>
                            <img src={backArrow} alt="backArrow" />
                            <span>Electronics</span>
                          </li>
                          <li className="subItem">
                            <p onClick={() => history.push(`/search/accessories`)}>
                              Accessories
                            </p>
                          </li>
                          <li className="subItem">
                            <p onClick={() => history.push(`/search/gps`)}>
                              GPS & Navigation
                            </p>
                          </li>
                          <li className="subItem">
                            <p onClick={() => history.push(`/search/headphones`)}>
                              Headphones
                            </p>
                          </li>
                          <li className="subItem">
                            <p onClick={() => history.push("/search/cellphones")}>
                              Cell Phones
                            </p>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <span>
                      <img
                        className="menuLink"
                        src={arrow}
                        alt="arrow"
                        onClick={() => setSub1(!Sub1)}
                      />
                    </span>
                  </li>
                  <li className="menuItem">
                    <div>
                      <span>
                        <p className="menuLink" onClick={() => setSub2(!Sub2)}>
                          Computers
                        </p>
                      </span>
                      <div className={Sub2 ? "headerSub open" : "headerSub"}>
                        <ul>
                          <li className="subTitle" onClick={() => setSub2(!Sub2)}>
                            <img src={backArrow} alt="backArrow" />
                            <span>Computers</span>
                          </li>
                          <li className="subItem">
                            <p onClick={() => history.push(`/search/monitors`)}>
                              Monitors
                            </p>
                          </li>
                          <li className="subItem">
                            <p onClick={() => history.push(`/search/scanners`)}>
                              Scanners
                            </p>
                          </li>
                          <li className="subItem">
                            <p onClick={() => history.push(`/search/laptopaccessories`)}>
                              Laptop Accessories
                            </p>
                          </li>
                          <li className="subItem">
                            <p onClick={() => history.push(`/search/datastorage`)}>
                              Data Storage
                            </p>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <span>
                      <img
                        className="menuLink"
                        src={arrow}
                        alt="arrow"
                        onClick={() => setSub2(!Sub2)}
                      />
                    </span>
                  </li>
                  <li className="menuItem">
                    <div>
                      <span>
                        <p className="menuLink" onClick={() => setSub3(!Sub3)}>
                          Smart Home
                        </p>
                      </span>
                      <div className={Sub3 ? "headerSub open" : "headerSub"}>
                        <ul>
                          <li className="subTitle" onClick={() => setSub3(!Sub3)}>
                            <img src={backArrow} alt="backArrow" />
                            <span>Smart Home</span>
                          </li>
                          <li className="subItem">
                            <p onClick={() => history.push(`/search/amazonsmarthome`)}>
                              Amazon Smart Home
                            </p>
                          </li>
                          <li className="subItem">
                            <p onClick={() => history.push(`/search/smarthomelighting`)}>
                              Smart Home Lighting
                            </p>
                          </li>
                          <li className="subItem">
                            <p onClick={() => history.push(`/search/smartlocks`)}>
                              Smart Locks and Entry
                            </p>
                          </li>
                          <li className="subItem">
                            <p onClick={() => history.push(`/search/securitycameras`)}>
                              Security Cameras
                            </p>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <span>
                      <img
                        className="menuLink"
                        src={arrow}
                        alt="arrow"
                        onClick={() => setSub3(!Sub3)}
                      />
                    </span>
                  </li>
                  <li className="menuItem">
                    <div>
                      <span>
                        <p className="menuLink" onClick={() => setSub4(!Sub4)}>
                          Video Games
                        </p>
                      </span>
                      <div className={Sub4 ? "headerSub open" : "headerSub"}>
                        <ul>
                          <li className="subTitle" onClick={() => setSub4(!Sub4)}>
                            <img src={backArrow} alt="backArrow" />
                            <span>Video Games</span>
                          </li>
                          <li className="subItem">
                            <p onClick={() => history.push(`/search/games`)}>Games</p>
                          </li>
                          <li className="subItem">
                            <p onClick={() => history.push("/search/playstation5")}>
                              PlayStation 5
                            </p>
                          </li>
                          <li className="subItem">
                            <p onClick={() => history.push(`/search/xboxseriesx`)}>
                              Xbox Series X & S
                            </p>
                          </li>
                          <li className="subItem">
                            <p onClick={() => history.push(`/search/nintendoswitch`)}>
                              Nintendo Switch
                            </p>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <span>
                      <img
                        className="menuLink"
                        src={arrow}
                        alt="arrow"
                        onClick={() => setSub4(!Sub4)}
                      />
                    </span>
                  </li>
                </ul>
              </div>
            </div>
            <div className="homeCenter">
              <h1 className="title">Welcome</h1>
              <p className="subTitle">Amazon Clone</p>
              <ScrollLink to="main" smooth={true} duration={1500} className="scrollLogo">
                <svg
                  width="90"
                  height="90"
                  viewBox="0 0 90 90"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <circle cx="45" cy="45" r="45" fill="#C4C4C4" fillOpacity="0.5" />
                  <rect
                    x="36.9503"
                    y="5.64086"
                    width="25"
                    height="74"
                    rx="12.5"
                    transform="rotate(20 36.9503 5.64086)"
                    stroke="white"
                  />
                  <rect
                    x="-0.298836"
                    y="0.640856"
                    width="25"
                    height="74"
                    rx="12.5"
                    transform="matrix(-0.939693 0.34202 0.34202 0.939693 51.6749 5.32561)"
                    stroke="#FF8A00"
                  />
                  <rect
                    x="77.7373"
                    y="74.8445"
                    width="25.7973"
                    height="50.653"
                    rx="12"
                    transform="rotate(160 77.7373 74.8445)"
                    fill="#FF8A00"
                  />
                  <path
                    d="M45.2485 30.8183L45.5068 23.0197L43.0166 23.926L42.8695 23.522L45.9141 22.4138L46.0304 22.7333L45.7747 30.6268L48.5468 29.6179L48.6939 30.0219L45.3955 31.2224L45.2485 30.8183ZM52.6966 44.6448C52.0012 44.8979 51.4407 44.8784 51.0152 44.5863C50.5936 44.2857 50.2529 43.7783 49.9929 43.0642L48.7822 39.7376C48.5268 39.036 48.4705 38.4428 48.6133 37.9581C48.7601 37.4648 49.175 37.0939 49.8578 36.8453C50.5344 36.5991 51.0874 36.6177 51.517 36.9012C51.9465 37.1847 52.2878 37.6742 52.5409 38.3696L53.7551 41.7055C54.015 42.4196 54.0759 43.0254 53.9376 43.5226C53.8056 44.0176 53.3919 44.3917 52.6966 44.6448ZM52.5427 44.2219C53.0564 44.0349 53.3567 43.7589 53.4438 43.3938C53.5371 43.0264 53.4811 42.5608 53.2759 41.997L51.9967 38.4825C51.7915 37.9187 51.5363 37.5292 51.2309 37.314C50.9318 37.0965 50.5254 37.0812 50.0117 37.2682C49.498 37.4552 49.1934 37.7292 49.0978 38.0904C49.0085 38.4492 49.0664 38.9105 49.2716 39.4744L50.5508 42.9888C50.7583 43.5589 51.0127 43.9558 51.3141 44.1796C51.6194 44.3948 52.029 44.4089 52.5427 44.2219ZM53.2993 51.6512L53.7033 51.5041L58.6269 56.9911L56.2875 50.5636L56.7385 50.3994L59.5089 58.0109L59.1048 58.158L54.1778 52.6616L56.5207 59.0985L56.0696 59.2627L53.2993 51.6512ZM58.4202 65.75L61.0513 64.7923L61.2018 65.2058L59.0875 65.9754L60.199 69.0294L61.9375 68.3966L62.0811 68.7913L60.3427 69.424L61.5603 72.7693L63.7028 71.9895L63.8499 72.3936L61.1905 73.3615L58.4202 65.75Z"
                    fill="white"
                    fillOpacity="0.9"
                  />
                </svg>
              </ScrollLink>

              <ScrollLink to="main" smooth={true} duration={1500} className="scrollDown">
                Scroll Down
              </ScrollLink>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
