import React, { useEffect } from "react";
import { useState } from "react";
import styles from "./Footer.module.scss";
import react from "../../assets/images/React-icon.svg";
import jsworld from "../../assets/images/logo_jsworld.svg";
import Vuejs from "../../assets/images/logo_vuejs_amsterdam.svg";
import dev from "../../assets/images/devworld.png";
import location from "../../assets/images/svg collection/location.svg";
import call from "../../assets/images/svg collection/call.svg";
import fetchData from "../../utilityFunction";

function Footer() {
  const [footerData, setFooterData] = useState({});
  const [isContentLoaded, setIsContentLoaded] = useState(false);

  useEffect(() => {
    (async () => {
      let fetchedData = await fetchData(`{
        allFooters {
            title
            date
            logo {
              url
            }
          }
      }`);
      setIsContentLoaded(true);
      console.log(fetchedData);
      setFooterData(fetchedData);
    })();
  }, []);

  return (
    <React.Fragment>
      {isContentLoaded ? (
        <>
          <div className={styles["footer-wrapper"]}>
            <div className={styles["footer-list"]}>
              <h3 className={styles["footer-list__head"]}>
                Upcoming <span className={styles["designred"]}>events</span>
              </h3>
              {}
              {footerData.allFooters.map((item) => {
                return (
                  <div className={styles["footer-section"]}>
                    <div className={styles["footer-section__imgwrapper"]}>
                      <img
                        className={styles["footer-section__imgwrapper-img"]}
                        src={item.logo.url}
                        alt="logo"
                      />
                    </div>
                    <div
                      className={
                        styles["footer-section__imgwrapper-img__divisiontwo"]
                      }
                    >
                      <span
                        className={
                          styles[
                            "footer-section__imgwrapper-img__divisiontwo-spanone"
                          ]
                        }
                      >
                        {item.title}
                      </span>
                      <span
                        className={
                          styles[
                            "footer-section__imgwrapper-img__divisiontwo-spanone-spantwo"
                          ]
                        }
                      >
                        {item.date}
                      </span>
                    </div>
                  </div>
                );
              })}
            </div>

            <div className={styles["footer-list"]}>
              <h3 className={styles["footer-list__head"]}>
                Contact <span className={styles["designred"]}>us</span>
              </h3>
              <div className={styles["footer-contact"]}>
                <div className={styles["footer-contact__wrapper"]}>
                  <div className={styles["footer-contact__wrapper-img"]}>
                    <img src={location} alt="location" />
                  </div>
                  <div
                    className={
                      styles["footer-contact__wrapper-img-spandivision"]
                    }
                  >
                    <span>Amsterdam</span>
                    <span> The Netherlands</span>
                  </div>
                </div>
                <div className={styles["footer-contact__wrapper"]}>
                  <div className={styles["footer-contact__wrapper-img"]}>
                    <img src={call} alt="phone" />
                  </div>
                  <div
                    className={
                      styles["footer-contact__wrapper-img-spandivision"]
                    }
                  >
                    <span>Phone: +1 7675991332</span>
                    <span>
                      {" "}
                      <a href="#"> Whatsapp</a>{" "}
                    </span>
                  </div>
                </div>
              </div>
            </div>

            <div className={styles["footer-list"]}>
              <h3 className={styles["footer-list__head"]}>
                Our <span className={styles["designred"]}>Brands</span>
              </h3>
              <div className={styles["footer-brands__cmn"]}>
                <div className={styles["footer-brands__cmn"]}>
                  <img
                    className={styles["footer-section__imgwrapper-img"]}
                    src={react}
                    alt="react"
                  />
                </div>
                <div className={styles["footer-brands__cmn"]}>
                  <img
                    className={styles["footer-section__imgwrapper-img"]}
                    src={jsworld}
                    alt="JS"
                  />
                </div>
                <div className={styles["footer-brands__cmn"]}>
                  <img
                    className={styles["footer-section__imgwrapper-img"]}
                    src={Vuejs}
                    alt="vue JS"
                  />
                </div>
                <div className={styles["footer-brands__cmn"]}>
                  <img
                    className={styles["footer-section__imgwrapper-img"]}
                    src={dev}
                    alt="Dev world"
                  />
                </div>
              </div>
            </div>

            <div className={styles["footer-list"]}>
              <h3 className={styles["footer-list__head"]}>
                Important <span className={styles["designred"]}>Links</span>
              </h3>
              <div className={styles["footer-links"]}>
                <ul>
                  <li>
                    <a href="#">Travel Tips</a>
                  </li>
                  <li>
                    <a href="#">FAQ </a>
                  </li>
                  <li>
                    <a href="#">Diversity & Inclusion</a>
                  </li>
                  <li>
                    <a href="#">Newsletter</a>
                  </li>
                  <li>
                    <a href="#">JSWorld Podcast</a>
                  </li>
                  <li>
                    <a href="#">Call for Speakers</a>
                  </li>
                  <li>
                    <a href="#">Privacy Policy</a>
                  </li>
                  <li>
                    <a href="#">Code of Conduct</a>
                  </li>
                  <li>
                    <a href="#">Terms & conditions</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className={styles["footer-copyright"]}>
            © Copyright 2023, Frontend Revolution BV
          </div>
        </>
      ) : (
        <h1>error</h1>
      )}
    </React.Fragment>
  );
}

export default Footer;
